import React, { Component } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { bindActionCreators } from 'redux'
import { loginUserAction } from '../actions/action.js'
import { Button, Form, Input, Icon, Checkbox } from 'antd';
import style from '../public/css/register.css'

const FormItem = Form.Item;

class rootLogin extends Component {
	constructor(props) {
		super(props)
		var defaultState = {
			user: {
				username: "",
				password: "",
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
            //console.log(user)
        }
    }

	handleClick(user) { /*提交处理*/
		console.log(user)
		const { handleLogin } = this.props
		 if(user.username.length<4 || user.username.length>12){
			console.log('please input username in 4-12')
			return false
		}else if(user.password.length<4 || user.password.length>12){
			console.log('please input password in 4-12')
			return false
		}else{
			handleLogin(user)
		}
	}

	backToHome(login) {
		console.log(login)
		browserHistory.push("/")
	}

	goToRegister(){
		browserHistory.push("/register")
	}

	render(){
		var user = this.state.user
		const { login } = this.props
		return (
			<div>
				<Form className="login-form login-formp">
					<sapn className="register-line">用户登录</sapn>
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
					<Button type="primary" onClick={this.handleClick.bind(this, user)}>login</Button>
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
					<a href="javascript:;" 
						onClick={this.goToRegister.bind(this,login)}
						style={{textDecoration:"underline"}}
						>
						come&nbsp;<span>with</span>&nbsp;us
						</a>
					</FormItem>
					<FormItem>
						<a href="javascript:;" 
						onClick={this.backToHome.bind(this,login)}
						style={{fontSize:"14px"}}
						>
						back&nbsp;to&nbsp;home
						</a>
					</FormItem>
				</Form>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		login: state.login
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({
		handleLogin: loginUserAction
	}, dispatch)
}

let Login = connect(
	mapStateToProps,
	mapDispatchToProps
)(rootLogin)

export default Login