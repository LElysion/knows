import { combineReducers } from 'redux'
import * as actions from '../actions/action.js'

function Reducer(state, action){
	switch(action.type) {
		case actions.add:
			return Object.assign({}, state, { todo: action.todo })
		case actions.islogin:
			return Object.assign({}, state, { login: action.login, user: action.user })
		case actions.getuser:
			return Object.assign({}, state, { user: action.user })
		case actions.getuserlist:
			return Object.assign({}, state, { userlist: action.userlist})
		case actions.getadminlist:
			return Object.assign({}, state, { adminlist: action.adminlist})
		case actions.getnoticelist:
			return Object.assign({}, state, { noticelist: action.noticelist})
		case actions.gethealthknowledgelist:
			return Object.assign({}, state, { healthknowledgelist: action.healthknowledgelist})
		case actions.getdrugslist:
			return Object.assign({}, state, { drugslist: action.drugslist})
		case actions.getphysicaldatalist:
			return Object.assign({}, state, { physicaldatalist: action.physicaldatalist})
		case actions.getdiagnosisdatalist: 
			return Object.assign({}, state, { diagnosisdatalist: action.diagnosisdatalist})
		case actions.getuserbloglist:
			return Object.assign({}, state, { userbloglist: action.userbloglist})
		case actions.gethospitallist:
			return Object.assign({}, state, { hospitallist: action.hospitallist})
		default: 
			return state
	}
}

export default Reducer