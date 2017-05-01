import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Button, Form, Input, Icon, Select, Radio } from 'antd';

const FormItem = Form.Item; //引入FormItem
const Option = Select.Option;
const RadioGroup = Radio.Group;

class rootChangePsw extends Component {
	constructor(props) {
		super(props)
		var defaultState = {
			newPsw: {
				password:"",
				newpassword: "",
				newpasswordagain: ""
			}
		}
		this.state = defaultState
	}

	componentWillMount(){

	}

	onTextChange(key) {
        return e => {
            var newPsw = this.state.newPsw
            newPsw[key] = e.target.value 
            this.setState({ newPsw })
            console.log(newPsw)
        }
    }

    handleChangePsw (newPsw, user){
    	console.log(newPsw)
    	console.log(user)
    	if(newPsw.password!=user.password){
    		alert('您输入的密码有误!')
    	}else if(newPsw.newpassword!=newPsw.newpasswordagain){
    		alert('您输入的两次密码不相同!')
    	}else{
    		alert('您成功修改了密码!')
    	}
    }

	render(){
		const { user } = this.props
		var newPsw = this.state.newPsw
		return (
			<div>
				<p>修改密码 </p> 
				<Form className="login-form login-formp">
					<FormItem>
					<Input type="password" prefix={<Icon type="lock" style={{ fontSize: 13 }} />}
					value={newPsw.password}  
					onChange={this.onTextChange('password').bind(this)} 
					placeholder="password" 
					style={{width:"220px"}}/>
					</FormItem>

					<FormItem>
					<Input type="password" prefix={<Icon type="lock" style={{ fontSize: 13 }} />}
					value={newPsw.newpassword}  
					onChange={this.onTextChange('newpassword').bind(this)} 
					placeholder="newpassword" 
					style={{width:"220px"}}/>
					</FormItem>

					<FormItem>
					<Input type="password"  prefix={<Icon type="lock" style={{ fontSize: 13 }} />}
					value={newPsw.newpasswordagain} 
					onChange={this.onTextChange('newpasswordagain').bind(this)} 
					placeholder="newpasswordagain" 
					style={{width:"220px"}}/>
					</FormItem>

					<Button type="primary" onClick={this.handleChangePsw.bind(this, this.state.newPsw, user)}>提交修改</Button>
				</Form>

				<p> changePsw Document @Laurant 2017</p>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		user: state.user
	}
}

function mapDispatchToProps(dispatch){
	return {

	}
}

let changePsw = connect (
	mapStateToProps,
	mapDispatchToProps
)(rootChangePsw)

export default changePsw