import React, { Component } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { bindActionCreators } from 'redux'
import { loginUserAction, addHealthKnowledgeAction } from '../../actions/action.js'
import { Button, Form, Input, Icon, Checkbox } from 'antd';
import style from '../../public/css/register.css'

const FormItem = Form.Item;

class rootAddHealthKnowledge extends Component {
	constructor(props) {
		super(props)
		var defaultState = {
			healthknowledge: {
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
            var healthknowledge = this.state.healthknowledge
            healthknowledge[key] = e.target.value 
            this.setState({ healthknowledge })
            console.log(healthknowledge)
        }
    }

	handleClick(healthknowledge) { /*提交处理*/
		console.log(healthknowledge)
	}

	handleAddHealthKnowledge(healthknowledge){
		const { user, handlehealthknowledge } = this.props
		var healthknowledge = this.state.healthknowledge
		var _date = new Date
		healthknowledge.date = _date.toLocaleDateString()
		healthknowledge.author = user.username
		console.log(healthknowledge)
		handlehealthknowledge(healthknowledge)
	}

	backToHome(login) {
		console.log(login)
		browserHistory.push("/")
	}

	goToRegister(){
		browserHistory.push("/register")
	}

	render(){
		var healthknowledge = this.state.healthknowledge
		const { login, user } = this.props
		return (
			<div>
				<p>添加健康信息</p>
				<Form className="login-form login-formp">
					<FormItem>
					<Input type="text" 
					value={healthknowledge.title} 
					onChange={this.onTextChange('title').bind(this)} 
					placeholder="title" 
					style={{width:"550px"}}/>
					</FormItem>

					<FormItem>
					<Input type="textarea" rows={20}
					value={healthknowledge.content}  
					onChange={this.onTextChange('content').bind(this)} 
					placeholder="healthknowledge" 
					style={{width:"550px"}}/>
					</FormItem>

					<FormItem>
					<Button type="primary" onClick={this.handleAddHealthKnowledge.bind(this, healthknowledge)}>submit</Button>
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
		handlehealthknowledge: addHealthKnowledgeAction
	}, dispatch)
}

let addHealthKnowledge = connect(
	mapStateToProps,
	mapDispatchToProps
)(rootAddHealthKnowledge)

export default addHealthKnowledge