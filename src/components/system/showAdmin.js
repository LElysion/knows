import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getAdminListAction, delAdminAction } from '../../actions/action.js'
import { Table, Button, Icon } from 'antd';

const { Column, ColumnGroup } = Table

//展示管理员
class rootShowAdmin extends Component {
	 

	constructor(props){
		super(props)
	}

	onTextChange(e) {
	}

	handleClick(userlist) {
		console.log(userlist)
	}

	handleDelete(user) {
		console.log(user)
		const { deladmin, getadminlist } = this.props
		deladmin(user)
	}

	handlelistwhat(o){
		console.log(o)
	}

	render() {
		const { user, adminlist } = this.props
		//const userlist2=[user]

		return (
				<div>
					<Table dataSource={adminlist} style={{width:"1000px"}}>
				    <Column 
				      title="Name"
				      dataIndex="username"
				      key="username"/>
				    <Column
				      title="Email"
				      dataIndex="email"
				      key="email"/>
				    <Column
				      title="Moblile"
				      dataIndex="mobile"
				      key="mobile"/>
				    <Column
				      title="Gender"
				      dataIndex="gender"
				      key="gender"/>
				      <Column
				      title="Power"
				      dataIndex="power"
				      key="power"/>
				    <Column
				      title="Action"
				      key="action"
				      render={(text, record) => (
				        <span>
				          <a href="javascript:void(0)" onClick={this.handleClick.bind(this, record)}>修改</a>
				          <span className="ant-divider" />
				          <a href="javascript:void(0)" onClick={this.handleDelete.bind(this, record)}>删除</a>
				          <span className="ant-divider" />
				        </span>
				      )}/>
				  </Table>
		      	</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		user: state.user,
		adminlist: state.adminlist.list
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({
		getadminlist: getAdminListAction,
		deladmin: delAdminAction
	}, dispatch)
}

let showAdmin = connect (
	mapStateToProps,
	mapDispatchToProps
)(rootShowAdmin)
export default showAdmin
