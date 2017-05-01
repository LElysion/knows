import React, { Component } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { bindActionCreators } from 'redux'
import { loginUserAction, editDrugsAction } from '../../actions/action.js'
import { Button, Form, Input, Icon, Checkbox } from 'antd';
import style from '../../public/css/register.css'

const FormItem = Form.Item;

//添加药品
class rootEditDrugs extends Component {
	constructor(props) {
		super(props)
		var defaultState = {
			drugs: {
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
            var drugs = this.state.drugs
            drugs[key] = e.target.value 
            this.setState({ drugs })
            console.log(drugs)
        }
    }

	handleClick(drugs) { /*提交处理*/
		console.log(drugs)
	}

	handleEditDrugs(drugs){
		const { user, handledrugs } = this.props
		var drugs = this.state.drugs
		var _date = new Date
		drugs.date = _date.toLocaleDateString()
		drugs.author = user.username
		console.log(drugs)
		handledrugs(drugs)
	}

	backToHome(login) {
		console.log(login)
		browserHistory.push("/")
	}

	render(){
		var drugs = this.state.drugs
		const { login, user } = this.props
		return (
			<div>
				<p>修改药品</p>
				<Form className="login-form login-formp">
					<FormItem>
					<Input type="text" 
					value={drugs.title} 
					onChange={this.onTextChange('title').bind(this)} 
					placeholder="title" 
					style={{width:"550px"}}/>
					</FormItem>

					<FormItem>
					<Input type="textarea" rows={20}
					value={drugs.content}  
					onChange={this.onTextChange('content').bind(this)} 
					placeholder="drugs" 
					style={{width:"550px"}}/>
					</FormItem>

					<FormItem>
					<Button type="primary" onClick={this.handleEditDrugs.bind(this, drugs)}>submit</Button>
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
		handledrugs: editDrugsAction
	}, dispatch)
}

let editDrugs = connect(
	mapStateToProps,
	mapDispatchToProps
)(rootEditDrugs)

export default editDrugs