import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getDrugsListAction, delDrugsAction } from '../../actions/action.js'
import { Table, Button, Icon } from 'antd';
import { Pagination } from 'antd';

const { Column, ColumnGroup } = Table

//展示公告
class rootShowDrugs extends Component {
	 

	constructor(props){
		super(props)
	}

	onTextChange(e) {
	}

	handleClick(userlist) {
		console.log(userlist)
		browserHistory.push("/system/editdrugs")
	}

	handleDelete(drugs) {
		console.log(drugs)
		const { deldrugs } = this.props
		deldrugs(drugs)
	}

	handlelistwhat(o){
		console.log(o)
	}

	onPageChange(pageNumber) {
	  console.log('Page: ', pageNumber);
	}

	render() {
		const { user, drugslist } = this.props
		//const userlist2=[user]

		return (
				<div>
						<Table dataSource={drugslist} style={{width:"1000px"}} rowKey="_id">
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
		drugs: state.drugs,
		drugslist: state.drugslist.list
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({
		getdrugslist: getDrugsListAction,
		deldrugs: delDrugsAction
	}, dispatch)
}

let showDrugs = connect (
	mapStateToProps,
	mapDispatchToProps
)(rootShowDrugs)
export default showDrugs
