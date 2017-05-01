import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getUserBlogListAction, delUserBlogAction } from '../../actions/action.js'
import style from '../../public/css/userbloglist.css'

class rootMyBlogList extends Component {
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
										<div>
											<div key={t._id} style={
												{
													padding: "5px",
													margin: "5px",
													border: "1px solid #CCC",
													width: "980px"
												}
											}
											className={isusername==t.author?"candel":"hide"}
											>

											<h3><a href="http://www.baidu.com">{t.title}</a></h3>
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
											className={isusername==t.author?"candel":"hide"}
											>删除</span>

											<p>{t.comment}</p>
											</div>

											
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

let myBlogList = connect (
	mapStateToProps,
	mapDispatchToProps
)(rootMyBlogList)

export default myBlogList