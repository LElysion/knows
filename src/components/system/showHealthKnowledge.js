import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getHealthKnowledgeListAction, delHealthKnowledgeAction } from '../../actions/action.js'
import { Table, Button, Icon } from 'antd';

const { Column, ColumnGroup } = Table

//展示公告
class rootShowHealthKnowledge extends Component {
	 

	constructor(props){
		super(props)
	}

	onTextChange(e) {
	}

	handleClick(userlist) {
		console.log(userlist)
	}

	handleDelete(healthknowledge) {
		console.log(healthknowledge)
		const { delhealthknowledge } = this.props
		delhealthknowledge(healthknowledge)
	}

	handlelistwhat(o){
		console.log(o)
	}

	render() {
		const { user, healthknowledgelist } = this.props
		//const userlist2=[user]

		return (
				<div>
						<Table dataSource={healthknowledgelist} style={{width:"1000px"}}>
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
		healthknowledge: state.healthknowledge,
		healthknowledgelist: state.healthknowledgelist.list
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({
		gethealthknowledgelist: getHealthKnowledgeListAction,
		delhealthknowledge: delHealthKnowledgeAction
	}, dispatch)
}

let showHealthKnowledge = connect (
	mapStateToProps,
	mapDispatchToProps
)(rootShowHealthKnowledge)
export default showHealthKnowledge
