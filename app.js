require('babel-register')
require('babel-polyfill')

/*获取需求模块*/
var express = require('express');
var app = express(); 
var session = require('express-session')
var MongoStore = require('connect-mongo')(session)
var MongoClient = require('mongodb').MongoClient
var cookieParser = require('mongodb').ObjectID

global._ = require('lodash')

global.app = express()
console.log('connecting database...')

global.db = null
var dbn = 'knows'

MongoClient.connect('mongodb://localhost:27017/'+dbn,function(err, instance){
	if(err!=null){
		return console.log('database error')
	}

	global.db = instance
	console.log('database connected: ', dbn)

	var bodyParser = require('body-parser')
	var jsonParser = bodyParser.json() /*解析json*/
	var app = express()
	app.use(bodyParser())
	app.use(bodyParser.urlencoded({extended: false}))

	//app.use(cookieParser())

	var MongoStore = require('connect-mongo')(session)

	//app.use(cookieParser()) /*????*/

	app.use(session({ //配置session
		secret: 'knows',
		name: 'knows',
		resave: false,
		saveUninitialized: false,
		store: new MongoStore({
			host: '127.0.0.1',
			port: '27017',
			db: 'sessions',
			url: 'mongodb://localhost:27017/knows'
		})
	}))
	console.log('starting http...')
	var webapp = app.listen(8081, function(){
		var host = webapp.address().address
		var port = webapp.address().port

		var docRoute = require('./app/routes.js')
		app.use('/v1/', docRoute)
		app.use(express.static('build'))
		app.use('*', (req, res) =>{
			res.sendFile(__dirname + '/build/index.html')
		})
	})
})

