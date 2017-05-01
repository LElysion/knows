import React, { Component } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { bindActionCreators } from 'redux'
import { loginUserAction, addNoticeAction } from '../../actions/action.js'
import { Button, Form, Input, Icon, Checkbox } from 'antd';
import style from '../../public/css/register.css'

const FormItem = Form.Item;

//添加公告
class rootAddNotice extends Component {
	constructor(props) {
		super(props)
		var defaultState = {
			notice: {
				pid: "",
				title: "",
				content: "",
				author: "",
				date: "",
				comment: ""
			}
		}
		this.state = defaultState
	}

	componentWillMount(){

	}

	onTextChange(key) {
        return e => {
            var notice = this.state.notice
            notice[key] = e.target.value 
            this.setState({ notice })
            console.log(notice)
        }
    }

	handleClick(notice) { /*提交处理*/
		console.log(notice)
	}

	handleAddNotice(notice){
		const { user, handlenotice } = this.props
		var notice = this.state.notice
		var _date = new Date
		notice.date = _date.toLocaleDateString()
		notice.author = user.username
		console.log(notice)
		handlenotice(notice)
	}

	backToHome(login) {
		console.log(login)
		browserHistory.push("/")
	}

	goToRegister(){
		browserHistory.push("/register")
	}

	render(){
		var notice = this.state.notice
		const { login, user } = this.props
		return (
			<div>
				<p>添加公告</p>
				<Form className="login-form login-formp">
					<FormItem>
					<Input type="text" 
					value={notice.title} 
					onChange={this.onTextChange('title').bind(this)} 
					placeholder="title" 
					style={{width:"550px"}}/>
					</FormItem>

					<FormItem>
					<Input type="textarea" rows={20}
					value={notice.content}  
					onChange={this.onTextChange('content').bind(this)} 
					placeholder="notice" 
					style={{width:"550px"}}/>
					</FormItem>

					<FormItem>
					<Button type="primary" onClick={this.handleAddNotice.bind(this, notice)}>submit</Button>
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
		login: state.login,
		user: state.user
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({
		handleLogin: loginUserAction,
		handlenotice: addNoticeAction
	}, dispatch)
}

let addNotice = connect(
	mapStateToProps,
	mapDispatchToProps
)(rootAddNotice)

export default addNotice