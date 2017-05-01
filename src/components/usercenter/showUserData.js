import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Button, Form, Input, Icon, Select, Radio } from 'antd';

const FormItem = Form.Item; //引入FormItem
const Option = Select.Option;
const RadioGroup = Radio.Group;

class rootshowUserData extends Component {
	constructor(props) {
		super(props)
		var  defaultState = {
			edituser:{
				username: "",
				email: "",
				mobile: "",
				gender: "",
				realname: "",
			 	idcard: ""
			 }
		}
		this.state = defaultState
	}

	componentWillMount(){

	}

	onTextChange(key) {
        return e => {
            var edituser = this.state.edituser
            edituser[key] = e.target.value 
            this.setState({ edituser })
            console.log(edituser)
        }
    }

	render(){
		const { user } = this.props
		return (
			<div>
				<p>个人资料 </p> 
				<Form className="login-form login-formp">
				<FormItem>
					<Input type="text" prefix={<Icon type="user" style={{ fontSize: 13 }} />}
					value={user.username} 
					onChange={this.onTextChange('username').bind(this)} 
					placeholder="Username" 
					disabled={true}
					style={{width:"220px"}}/>
					</FormItem>
				<FormItem>
					<Input type="text"  prefix={<Icon type="mail" style={{ fontSize: 13 }} />}
					value={user.email} 
					onChange={this.onTextChange('email').bind(this)} 
					placeholder="email" 
					disabled={true}
					style={{width:"220px"}}/>
					</FormItem>
				<FormItem>
					<Input type="text"  prefix={<Icon type="mobile" style={{ fontSize: 13 }} />}
					value={user.mobile} 
					onChange={this.onTextChange('mobile').bind(this)} 
					placeholder="mobile" 
					disabled={true}
					style={{width:"220px"}}/>
					</FormItem>
				<FormItem>
					<Input type="text" prefix={<Icon type="smile-o" style={{ fontSize: 13 }} />}
					value={user.gender}
					readOnly="true"
					disabled={true}
					style={{width:"220px"}}/><br/>
					<RadioGroup onChange={this.onTextChange('gender').bind(this)} value={user.gender}>
				        <Radio value={"male"}>male</Radio>
				        <Radio value={"female"}>female</Radio>
			      	</RadioGroup>
					</FormItem>
				<FormItem>
					<Input type="text"  prefix={<Icon type="user" style={{ fontSize: 13 }} />}
					value={user.realname} 
					onChange={this.onTextChange('realname').bind(this)} 
					placeholder="realname" 
					disabled={true}
					style={{width:"220px"}}/>
					</FormItem>
				<FormItem>
					<Input type="text"  prefix={<Icon type="user" style={{ fontSize: 13 }} />}
					value={user.idcard} 
					onChange={this.onTextChange('idcard').bind(this)} 
					placeholder="idcard" 
					disabled={true}
					style={{width:"220px"}}/>
					</FormItem>
				</Form>


				<p> Userdata Document @Laurant 2017</p>
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

let showUserData = connect (
	mapStateToProps,
	mapDispatchToProps
)(rootshowUserData)

export default showUserData