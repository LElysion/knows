import fetch from 'isomorphic-fetch'
import { browserHistory } from 'react-router'
export const islogin = 'islogin'
//export const getuserlist = 'getuserlist'
export function getLoginAction(login, user){
	return {type: islogin, login:login, user: user}
}

export function notLogin(){
	return {type: islogin, login:false}
}
export function getuser(user){
	return {type: getuser, user: user }
}
export function getuserlist(userlist){
	return {type: getuserlist, userlist: userlist}
}

export function getadminlist(adminlist){
	return {type: getadminlist, adminlist: adminlist}
}

export function getnoticelist(noticelist){
	return {type: getnoticelist, noticelist: noticelist}
}

export function gethealthknowledgelist(healthknowledgelist) { //获取健康信息列表
	return { type: gethealthknowledgelist, healthknowledgelist: healthknowledgelist }
}

export function getdrugslist(drugslist) {
	return { type: getdrugslist, drugslist:drugslist }
}

export function getphysicaldatalist(physicaldatalist) {
	return { type: getphysicaldatalist, physicaldatalist:physicaldatalist }
}

export function getdiagnosisdatalist(diagnosisdatalist) {
	return { type: getdiagnosisdatalist, diagnosisdatalist:diagnosisdatalist }
}

export function getuserbloglist(userbloglist) {
	return { type: getuserbloglist, userbloglist:userbloglist }
}

export function gethospitallist(hospitallist) {
	return { type: gethospitallist, hospitallist:hospitallist }
}
// export const add = 'add'
// export function getToDoAction(todo) {
// 	return {type: add, todo: todo}
// }



// export function addTextAction(text){
// 	return dispatch => {
// 		return fetch('/v1/todo', {
// 			method: 'post',
// 			credentials: 'include', //配置cookie来获取session
// 			headers: {
// 				'Accept': 'application/json',
// 				'Content-Type': 'application/json'
// 			},
// 			body: JSON.stringify({
// 				text: text
// 			})
// 		}).then(function(response){
// 			return response.json()
// 		}).then(function(json){
// 			if(!json.success){
// 				console.log(json.error)
// 			}else{
// 				dispatch(getToDoAction(json.data))
// 			}
// 		}).catch(function(err){
// 			console.log(err)
// 		})
// 	}
// }

export function addUserAction(user) { //添加用户
	return dispatch => {
		return fetch('/v1/knows/userdata', {
			method: 'post',
			credentials: 'include',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				user: user
			})
		}).then(function(response){
			//console.log("heyheyhey")
			//browserHistory.push("/")
			return response.json()
		}).then(function(json){
			console.log(json)
			browserHistory.push("/login")
		}).catch(function(err){
			console.log(err)
		})
	}
}

export function addNoticeAction(notice){ //添加公告
	return dispatch => {
		return fetch('/v1/knows/noticedata', {
			method: 'post',
			credentials: 'include',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				notice: notice
			})
		}).then(function(response){
			return response.json()
		}).then(function(json){
			console.log(json)
		}).catch(function(err){
			console.log(err)
		})
	}
}

export function addHealthKnowledgeAction(healthknowledge){ //添加健康信息
	return dispatch => {
		return fetch('/v1/knows/healthknowledgedata', {
			method: 'post',
			credentials: 'include',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				healthknowledge: healthknowledge
			})
		}).then(function(response){
			return response.json()
		}).then(function(json){
			console.log(json)
		}).catch(function(err){
			console.log(err)
		})
	}
}

export function addDrugsAction(drugs) { //添加药品
	return dispatch => {
		return fetch('/v1/knows/drugsdata', {
			method: 'post',
			credentials: 'include',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				drugs: drugs
			})
		}).then(function(response){
			return response.json()
		}).then(function(json){
			console.log(json)
		}).catch(function(err){
			console.log(err)
		})
	}
}

export function editDrugsAction(drugs) { //修改药品
	return dispatch => {
		return fetch('/v1/knows/editdrugsdata', {
			method: 'post',
			credentials: 'include',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				drugs: drugs
			})
		}).then(function(response){
			return response.json()
		}).then(function(json){
			console.log(json)
		}).catch(function(err){
			console.log(err)
		})
	}
}


export function addHospitalAction(hospital) { //添加医院
	return dispatch => {
		return fetch('/v1/knows/hospitaldata', {
			method: 'post',
			credentials: 'include',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				hospital: hospital
			})
		}).then(function(response){
			return response.json()
		}).then(function(json){
			console.log(json)
		}).catch(function(err){
			console.log(err)
		})
	}
}

export function addPhysicalAction(physicaldata) { //添加体检
	return dispatch => {
		return fetch('/v1/knows/physicaldata', {
			method: 'post',
			credentials: 'include',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				physicaldata: physicaldata
			})
		}).then(function(response){
			return response.json()
		}).then(function(json){
			console.log(json)
		}).catch(function(err){
			console.log(err)
		})
	}
}

export function addDiagnosisAction(diagnosisdata) { //添加看诊
	return dispatch => {
		return fetch('/v1/knows/diagnosisdata', {
			method: 'post',
			credentials: 'include',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				diagnosisdata: diagnosisdata
			})
		}).then(function(response){
			return response.json()
		}).then(function(json){
			console.log(json)
		}).catch(function(err){
			console.log(err)
		})
	}
}

export function addUserBlogAction(userblog) { //添加用户动态
	return dispatch => {
		return fetch('/v1/knows/userblogdata', {
			method: 'post',
			credentials: 'include',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				userblog: userblog
			})
		}).then(function(response){
			return response.json()
		}).then(function(json){
			console.log(json)
		}).catch(function(err){
			console.log(err)
		})
	}
}

export function loginUserAction(user){ //登陆验证
	return dispatch => {
		return fetch('/v1/knows/login', {
			method: 'post',
			credentials: 'include',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				user: user
			})
		}).then(function(response){
			return response.json()
		}).then(function(json){
			console.log(json.login)
			dispatch(getLoginAction(json.login, json.user))
			console.log("yes")
			if(json.login){
				browserHistory.push("/")
			}else{
				console.log("username or password wram ")
			}
			//
			
		}).catch(function(err){
			console.log(err)
		})
	}
}

export function getUserAtion (user) { //获取用户信息
	return dispatch => {
		return fetch('/v1/knows/userdata', {
			method: 'get',
			credentials: 'include',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
		}).then(function(response){
			return response.json()
		}).then(function(json){
			console.log(json.data)
			dispatch(getuser(json.data))
		}).catch(function(err){
			console.log(err)
		})
	}
}

export function getUserListAction(user){ //获取用户列表
	return dispatch => {
		return fetch('/v1/knows/userlist',{
			method: 'get',
			credentials: 'include',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
		}).then(function(response){
			return response.json()
		}).then(function(json){
			console.log(json.data)
			dispatch(getuserlist(json.data))
		}).catch(function(err){
			console.log(err)
		})
	}
}

export function getAdminListAction(user){ //获取管理员列表
	return dispatch => {
		return fetch('/v1/knows/adminlist',{
			method: 'get',
			credentials: 'include',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
		}).then(function(response){
			return response.json()
		}).then(function(json){
			console.log(json.data)
			dispatch(getadminlist(json.data))
		}).catch(function(err){
			console.log(err)
		})
	}
}

export function getNoticeListAction(notice){ //获取公告列表
	return dispatch => {
		return fetch('/v1/knows/noticelist',{
			method: 'get',
			credentials: 'include',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
		}).then(function(response){
			return response.json()
		}).then(function(json){
			console.log(json.data)
			var newdata = json.data
			newdata.list.reverse()
			dispatch(getnoticelist(newdata))
		}).catch(function(err){
			console.log(err)
		})
	}
}

export function getHealthKnowledgeListAction(healthknowledge){ //获取健康信息列表
	return dispatch => { 
		return fetch('/v1/knows/healthknowledgelist',{
			method: 'get',
			credentials: 'include',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
		}).then(function(response){
			return response.json()
		}).then(function(json){
			console.log(json.data)
			var newdata = json.data
			newdata.list.reverse()
			dispatch(gethealthknowledgelist(newdata))
		}).catch(function(err){
			console.log(err)
		})
	}
}

export function getDrugsListAction(drugs){ //获取药品列表
	return dispatch => {
		return fetch('/v1/knows/drugslist',{
			method: 'get',
			credentials: 'include',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
		}).then(function(response){
			return response.json()
		}).then(function(json){
			console.log(json.data)
			var newdata = json.data
			newdata.list.reverse()
			dispatch(getdrugslist(newdata))
		}).catch(function(err){
			console.log(err)
		})
	}
}

export function getHospitalListAction(hospital){ //获取医院列表
	return dispatch => {
		return fetch('/v1/knows/hospitallist',{
			method: 'get',
			credentials: 'include',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
		}).then(function(response){
			return response.json()
		}).then(function(json){
			console.log(json.data)
			var newdata = json.data
			newdata.list.reverse()
			dispatch(gethospitallist(newdata))
		}).catch(function(err){
			console.log(err)
		})
	}
}

export function getPhysicalDataListAction(physicaldata){ //获取体检列表
	return dispatch => {
		return fetch('/v1/knows/physicaldatalist',{
			method: 'get',
			credentials: 'include',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
		}).then(function(response){
			return response.json()
		}).then(function(json){
			console.log(json.data)
			var newdata = json.data
			newdata.list.reverse()
			dispatch(getphysicaldatalist(newdata))
		}).catch(function(err){
			console.log(err)
		})
	}
}

export function getDiagnosisDataListAction(diagnosisdatalist){ //获取看诊列表
	return dispatch => {
		return fetch('/v1/knows/diagnosisdatalist',{
			method: 'get',
			credentials: 'include',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
		}).then(function(response){
			return response.json()
		}).then(function(json){
			console.log(json.data)
			var newdata = json.data
			newdata.list.reverse()
			dispatch(getdiagnosisdatalist(newdata))
		}).catch(function(err){
			console.log(err)
		})
	}
}

export function getUserBlogListAction(userbloglist){ //获取用户动态列表
	return dispatch => {
		return fetch('/v1/knows/userbloglist',{
			method: 'get',
			credentials: 'include',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
		}).then(function(response){
			return response.json()
		}).then(function(json){
			console.log(json.data)
			var newdata = json.data
			newdata.list.reverse()
			dispatch(getuserbloglist(newdata))
		}).catch(function(err){
			console.log(err)
		})
	}
}

export function delNoticeAction(notice) { //删除公告
	return dispatch => {
		return fetch('/v1/knows/noticedata',{
			method: 'delete',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				notice: notice
			})
		}).then(function(response){
			return response.json()
		}).then(function(json){
			console.log(json.data)
			console.log("getnoticelistnew")
			dispatch(getnoticelist(json.data))
		}).catch(function(err){
			console.log(err)
		})
	}
}

export function delHealthKnowledgeAction(healthknowledge) { //删除健康信息
	return dispatch => {
		return fetch('/v1/knows/healthknowledgedata',{
			method: 'delete',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				healthknowledge: healthknowledge
			})
		}).then(function(response){
			return response.json()
		}).then(function(json){
			console.log(json.data)
			console.log("gethealthknowledgelistnew")
			dispatch(gethealthknowledgelist(json.data))
		}).catch(function(err){
			console.log(err)
		})
	}
}

export function delDrugsAction(drugs) { //删除药品
	return dispatch => {
		return fetch('/v1/knows/drugsdata',{
			method: 'delete',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				drugs: drugs
			})
		}).then(function(response){
			return response.json()
		}).then(function(json){
			console.log(json.data)
			console.log("getdrugslistnew")
			dispatch(getdrugslist(json.data))
		}).catch(function(err){
			console.log(err)
		})
	}
}

export function delHospitalAction(hospital) { //删除合作医院
	return dispatch => {
		return fetch('/v1/knows/hospitaldata',{
			method: 'delete',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				hospital: hospital
			})
		}).then(function(response){
			return response.json()
		}).then(function(json){
			console.log(json.data)
			console.log("getdrugslistnew")
			dispatch(gethospitallist(json.data))
		}).catch(function(err){
			console.log(err)
		})
	}
}


export function delUserAction(user) { //删除用户
	return dispatch => {
		return fetch('/v1/knows/userdata',{
			method: 'delete',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				user: user
			})
		}).then(function(response){
			return response.json()
		}).then(function(json){
			console.log(json.data)
			dispatch(getuserlist(json.data))
		}).catch(function(err){
			console.log(err)
		})
	}
}

export function delAdminAction(user) { //删除管理员
	return dispatch => {
		return fetch('/v1/knows/admindata',{
			method: 'delete',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				user: user
			})
		}).then(function(response){
			return response.json()
		}).then(function(json){
			console.log(json.data)
			dispatch(getadminlist(json.data))
		}).catch(function(err){
			console.log(err)
		})
	}
}

export function delUserBlogAction(userblog, user) { //删除用户动态
	return dispatch => {
		return fetch('/v1/knows/userblogdata',{
			method: 'delete',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				userblog: userblog,
				user: user
			})
		}).then(function(response){
			return response.json()
		}).then(function(json){
			console.log(json.data)
			dispatch(getuserbloglist(json.data))
		}).catch(function(err){
			console.log(err)
		})
	}
}