import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class rootNoticeCenterList extends Component {
	constructor(props) {
		super(props)
	}

	componentWillMount(){

	}

	handleClick(t){
		console.log(t)
	}

	render(){
		const { noticelist } = this.props
		return (
			<div>
							{
								noticelist.list.map( t=>{
									return (
										<div key={t._id} style={
											{
												padding: "5px",
												margin: "5px",
												border: "1px solid #CCC"
											}
										}>
										<h3 onClick={this.handleClick.bind(this, t)} 
											style={{
												cursor:"pointer"
											}}
										>{t.title}</h3>
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
										<p>{t.comment}</p>
										</div>
									)
								})
							}
				<p> noticeCenterList Document @Laurant 2017</p>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		user: state.user,
		noticelist: state.noticelist
	}
}

function mapDispatchToProps(dispatch){
	return {

	}
}

let noticeCenterList = connect (
	mapStateToProps,
	mapDispatchToProps
)(rootNoticeCenterList)

export default noticeCenterList