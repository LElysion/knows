import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getUserBlogListAction, delUserBlogAction } from '../../actions/action.js'
import style from '../../public/css/userbloglist.css'

class rootUserBlogList extends Component {
	constructor(props) {
		super(props)
	}

	componentWillMount(){

	}

	handleDelete(t, user) {
		console.log(t)
		console.log(user)
		const { deluserblog } = this.props
		deluserblog(t, user)
	}


	render(){
		const { userbloglist, user } = this.props
		var isusername = user.username
		return (
			<div>
				{
								userbloglist.list.map( t=>{
									return (
										<div key={t._id} style={
											{
												padding: "5px",
												margin: "5px",
												border: "1px solid #CCC",
												width: "980px"
											}
										}>

										<h3>{t.title}</h3>
										<p style={
											{
												color:"black",
												margin: "5px"
											}
										}>{t.content}</p>

										<div style={
											{	
												marginTop: "25px",
												textAlign: "right" 
											}
										}>
										<p>{t.author}</p>
										<p>{t.date}</p>
										</div>

										<span style={
											{	
												cursor:"pointer"

											}

										} onClick={this.handleDelete.bind(this, t, user)} 
										className={isusername==t.author||user.power>2?"candel":"hide"}
										>删除</span>

										<p>{t.comment}</p>

										</div>
									)
								})
							}
				<p> userBlogList Document @Laurant 2017</p>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		user: state.user,
		userbloglist: state.userbloglist
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({
		getuserbloglist: getUserBlogListAction,
		deluserblog: delUserBlogAction
	}, dispatch)
}

let userBlogList = connect (
	mapStateToProps,
	mapDispatchToProps
)(rootUserBlogList)

export default userBlogList