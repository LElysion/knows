import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addUserAction } from '../../actions/action.js'
import { Button, Form, Input, Icon, Checkbox, Radio } from 'antd';
import style from '../../public/css/register.css'

const FormItem = Form.Item;
const RadioGroup = Radio.Group;

//添加管理员
class rootAddAdmin extends Component {
	constructor(props) {
		super(props)
		var defaultState = {
			user: {
				email: "",
				username: "",
				password: "",
				passwordagain: "",
				gender: "male",
				mobile: "",
				realname: "",
				idcard: "",
				power: "3"
			}
		}
		this.state = defaultState
	}

	componentWillMount(){

	}

	onTextChange(key) {
        return e => {
            var user = this.state.user
            user[key] = e.target.value 
            this.setState({ user })
            console.log(user)
        }
    }

    onGenderChange(e) {
    	console.log('radio checked', e.targer.value)
    	this.setState ({
    		value: e.targer.value
    	})
    }

	handleClick(user) { /*提交处理*/
		console.log(user)
		var emailreg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/; //验证邮箱
		const { handleSign } = this.props
		if(user.password!=user.passwordagain){
			console.log('not same password'+user.username.length)
			return false
		}else if(user.username.length<4 || user.username.length>12){
			console.log('please input username in 4-12')
			return false
		}else if(user.password.length<6 || user.password.length>12){
			console.log('please input password in 6-12')
			return false
		}else if(user.email!=""&&!emailreg.test(user.email)){
			console.log('please input the real email')
			return false
		}else if(user.mobile.length!=11){
			console.log('please input 11 mobilenumber')
			return false
		}else{
			handleSign(user)
			browserHistory.push("/system")
		}
	}

	backToHome() {
		browserHistory.push("/")
	}

	render(){
		var user = this.state.user
		return (
			<div>
				<p>添加管理员</p>
				<Form className="login-form login-formp">
					<FormItem>
					<Input type="text"  prefix={<Icon type="mail" style={{ fontSize: 13 }} />}
					value={user.email} 
					onChange={this.onTextChange('email').bind(this)} 
					placeholder="email" 
					style={{width:"220px"}}/>
					</FormItem>

					<FormItem>
					<Input type="text" prefix={<Icon type="user" style={{ fontSize: 13 }} />}
					value={user.username} 
					onChange={this.onTextChange('username').bind(this)} 
					placeholder="Username" 
					style={{width:"220px"}}/>
					</FormItem>

					<FormItem>
					<Input type="password" prefix={<Icon type="lock" style={{ fontSize: 13 }} />}
					value={user.password}  
					onChange={this.onTextChange('password').bind(this)} 
					placeholder="password" 
					style={{width:"220px"}}/>
					</FormItem>

					<FormItem>
					<Input type="password"  prefix={<Icon type="lock" style={{ fontSize: 13 }} />}
					value={user.passwordagain} 
					onChange={this.onTextChange('passwordagain').bind(this)} 
					placeholder="passwordagain" 
					style={{width:"220px"}}/>
					</FormItem>

					<FormItem>
					<Input type="text" prefix={<Icon type="smile-o" style={{ fontSize: 13 }} />}
					value={user.gender}
					readOnly="true"
					style={{width:"220px"}}/><br/>
					<RadioGroup onChange={this.onTextChange('gender').bind(this)} value={user.gender}>
				        <Radio value={"male"}>male</Radio>
				        <Radio value={"female"}>female</Radio>
			      	</RadioGroup>
					</FormItem>

					<FormItem>
					<Input type="text"  prefix={<Icon type="mobile" style={{ fontSize: 13 }} />}
					value={user.mobile} 
					onChange={this.onTextChange('mobile').bind(this)} 
					placeholder="mobile" 
					style={{width:"220px"}}/>
					</FormItem>

					<FormItem>
					<Input type="text"  prefix={<Icon type="user" style={{ fontSize: 13 }} />}
					value={user.realname} 
					onChange={this.onTextChange('realname').bind(this)} 
					placeholder="realname" 
					style={{width:"220px"}}/>
					</FormItem>

					<FormItem>
					<Input type="text"  prefix={<Icon type="user" style={{ fontSize: 13 }} />}
					value={user.idcard} 
					onChange={this.onTextChange('idcard').bind(this)} 
					placeholder="idcard" 
					style={{width:"220px"}}/>
					</FormItem>

					<FormItem>
					<Button type="primary" onClick={this.handleClick.bind(this, user)}>add</Button>
					</FormItem>

					<FormItem>
						<a href="javascript:;" onClick={this.backToHome.bind(this)}>cancel</a>
					</FormItem>
				</Form>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({
		handleSign: addUserAction
	}, dispatch)
}

let addAdmin = connect(
	mapStateToProps,
	mapDispatchToProps
)(rootAddAdmin)

export default addAdmin