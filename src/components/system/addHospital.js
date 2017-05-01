import React, { Component } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { bindActionCreators } from 'redux'
import { loginUserAction, addHospitalAction } from '../../actions/action.js'
import { Button, Form, Input, Icon, Checkbox } from 'antd';
import style from '../../public/css/register.css'

const FormItem = Form.Item;

//添加医院
class rootAddHospital extends Component {
	constructor(props) {
		super(props)
		var defaultState = {
			hospital: {
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
            var hospital = this.state.hospital
            hospital[key] = e.target.value 
            this.setState({ hospital })
            console.log(hospital)
        }
    }

	handleClick(hospital) { /*提交处理*/
		console.log(hospital)
	}

	handleAddHospital(hospital){
		const { user, handlehospital } = this.props
		var hospital = this.state.hospital
		var _date = new Date
		hospital.date = _date.toLocaleDateString()
		hospital.author = user.username
		console.log(hospital)
		handlehospital(hospital)
		browserHistory.push("/system")
	}

	backToHome(login) {
		console.log(login)
		browserHistory.push("/")
	}

	goToRegister(){
		browserHistory.push("/register")
	}

	render(){
		var hospital = this.state.hospital
		const { login, user } = this.props
		return (
			<div>
				<p>添加医院</p>
				<Form className="login-form login-formp">
					<FormItem>
					<Input type="text" 
					value={hospital.title} 
					onChange={this.onTextChange('title').bind(this)} 
					placeholder="title" 
					style={{width:"550px"}}/>
					</FormItem>

					<FormItem>
					<Input type="textarea" rows={20}
					value={hospital.content}  
					onChange={this.onTextChange('content').bind(this)} 
					placeholder="hospital" 
					style={{width:"550px"}}/>
					</FormItem>

					<FormItem>
					<Button type="primary" onClick={this.handleAddHospital.bind(this, hospital)}>submit</Button>
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
		handlehospital: addHospitalAction
	}, dispatch)
}

let addHospital = connect(
	mapStateToProps,
	mapDispatchToProps
)(rootAddHospital)

export default addHospital