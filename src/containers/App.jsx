import React , {Component} from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { About, Home, DeskTop, Register, Login, User, System } from './index.js'
import { showUsers, addUser, modifyUser, powerUser, addAdmin, showAdmin, addNotice, showNotice,addHealthKnowledge, showHealthKnowledge, addDrugs, showDrugs, editDrugs } from '../components/system'
import { showUserData, changePsw, physicalList, diagnosisList, userBlog, userBlogList, newDiagnosis, newPhysical, myBlogList, userShowDrugs } from '../components/usercenter'
import { showHospitalData } from '../components/hospital'
import { showHospital, addHospital } from '../components/system'
import { healthList } from '../components/health'
import { noticeCenterList } from '../components/noticeCenter'
import { Provider, connect } from 'react-redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import reducer from '../reducers/reducer.js'

var initState = {
	todo: {
		list: []
	},
	login: false,
	showed: false,
	user: {
		login: false,
		username: "",
		email: "",
		mobile: "",
		gender: "",
		realname: "",
		idcard: "",
		power: ""
	},
	edituser: {
		login: false,
		username: "",
		email: "",
		mobile: "",
		gender: ""
	},
	userlist:{
		list: []
	},
	adminlist:{
		list: []
	},
	noticelist: {
		list: []
	},
	healthknowledgelist: {
		list: []
	},
	drugslist: {
		list: []
	},
	diagnosisdatalist: {
		list: []
	},
	physicaldatalist: {
		list: []
	},
	userbloglist: {
		list: []
	},
	hospitallist: {
		list: []
	},
	notice: {
		title: "",
		content: "",
		author: "",
		date: "",
		comment: ""
	},
	healthknowledge: {
		title: "",
		content: "",
		author: "",
		date: "",
		comment: ""
	},
	drugs: {
		title: "",
		content: "",
		author: "",
		date: "",
		comment: ""
	},
	hospital: {
		title: "",
		content: "",
		author: "",
		date: "",
		comment: ""
	},
	editnotice: {
		title: "",
		content: "",
		author: "",
		date: "",
		comment: ""
	},
	message: {
		sender: "",
		content: "",
		receiver: "",
		date: ""
	},
	physicaldata: {
		id: "",
		lastId: "",
		username: "",
		age: "",
		gender: "",
		height: "",
		weight: "",
		leftSight: "",
		rightSight: "",
		HighPressure: "",
		LowPressure: "",
		HeartBeat: "",
		Color: "",
		Liver: "",
		Lung: "",
		Teeth: "",
		Remark: "",
		content: "",
		docter: "",
		date: ""
	},
	diagnosisdata: {
		username: "",
		sickcontent: "",
		drugsneed:[],
		drugscontent: "",
		doctercontent: "",
		docter: "",
		date:""
	},
	userblog: {
		title: "",
		content: "",
		author: "",
		date: "",
		comment: ""
	},
	editblog: {
		title: "",
		content: "",
		author: "",
		date: "",
		comment: ""
	}
}

const logger = createLogger()
const createStoreWithMiddleware = applyMiddleware(
	thunk,
	logger
)(createStore)

let store = createStoreWithMiddleware(reducer, initState)

class App extends Component {
	constructor(props){
		super(props)
	}

	render(){
		return (
			<Provider store={store}>
				<div>
		            <Router history={ browserHistory }>
		              <Route path="/" component={ DeskTop }>  
		                <IndexRoute component={ Home }/>  
		                <Route path="/user" component={ User }>
		                	<Route path="/user/showuserdata" component={ showUserData }/>
		                	<Route path="/user/changePsw" component={ changePsw } />
		                	<Route path="/user/physicalList" component={ physicalList } />
		                	<Route path="/user/diagnosisList" component={ diagnosisList } />
		                	<Route path="/user/userBlog" component={ userBlog } />
		                	<Route path="/user/userBlogList" component={ userBlogList } />
		                	<Route path="/user/newPhysical" component={ newPhysical } />
		                	<Route path="/user/newDiagnosis" component={ newDiagnosis } />
		                	<Route path="/user/myBlogList" component={ myBlogList } />
		                	<Route path="/user/usershowdrugs" component={ userShowDrugs } />
		                	<Route path="/user/health" component={ healthList } />
		                </Route>
		                <Route path="/about" component={ About }/>  
		                <Route path="/hospital" component={ showHospitalData }/> 
		                <Route path="/health" component={ healthList } /> 
		                <Route path="/noticecenter" component={ noticeCenterList } />
		                <Route path="/system" component={ System }>
		                	<Route path="/system/showusers" component={ showUsers }/> 
		                	<Route path="/system/modifyuser" component={ modifyUser }/>
		                	<Route path="/system/adduser" component={ addUser }/>
		                	<Route path="/system/addadmin" component={ addAdmin }/>
		                	<Route path="/system/shownotice" component={ showNotice }/>
		                	<Route path="/system/addnotice" component={ addNotice }/>
		                	<Route path="/system/showdrugs" component={ showDrugs }/>
		                	<Route path="/system/editdrugs" component={ editDrugs }/>
		                	<Route path="/system/showhospital" component={ showHospital }/>
		                	<Route path="/system/addhospital" component={ addHospital }/>
		                	<Route path="/system/adddrugs" component={ addDrugs }/>
		                	<Route path="/system/showhealthknowledge" component={ showHealthKnowledge }/>
		                	<Route path="/system/addhealthknowledge" component={ addHealthKnowledge }/>
		                	<Route path="/system/powermodule" component={ powerUser }/>
		                	<Route path="/system/poweemoduleuser" component={ powerUser }/>
		                	<Route path="/system/showadmin" component={ showAdmin }/>
		                	<Route path="/system/showsystem" component={ powerUser }/>
		                	<Route path="/system/about" component={ About }/>
		                </Route>
		              </Route>  
		              <Route path="/register" component={ Register } />   
		              <Route path="/login" component={ Login } />
		            </Router>  
	          </div>
          </Provider> 
		)
	}
}

export default App