import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getNoticeListAction, delNoticeAction } from '../../actions/action.js'
import { Table, Button, Icon } from 'antd';

const { Column, ColumnGroup } = Table

//展示公告
class rootShowNotice extends Component {
	 

	constructor(props){
		super(props)
	}

	onTextChange(e) {
	}

	handleClick(userlist) {
		console.log(userlist)
	}

	handleDelete(notice) {
		console.log(notice)
		const { delnotice } = this.props
		delnotice(notice)
	}

	handlelistwhat(o){
		console.log(o)
	}

	render() {
		const { user, noticelist } = this.props
		//const userlist2=[user]

		return (
				<div>
						<Table dataSource={noticelist} style={{width:"1000px"}}>
					    <Column 
					      title="Title"
					      dataIndex="title"
					      key="title"/>
					    <Column
					      title="Author"
					      dataIndex="author"
					      key="author"/>
					    <Column
					      title="Date"
					      dataIndex="date"
					      key="date"/>
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
		notice: state.notice,
		noticelist: state.noticelist.list
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({
		getnoticelist: getNoticeListAction,
		delnotice: delNoticeAction
	}, dispatch)
}

let showNotice = connect (
	mapStateToProps,
	mapDispatchToProps
)(rootShowNotice)
export default showNotice
