import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import { ToDoo } from '../components/system'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getNoticeListAction, delNoticeAction } from '../actions/action.js'
import { addTextAction } from '../actions/action.js'
import { Button, Calendar, Carousel } from 'antd'
import style from '../public/css/home.css'

class rootHome extends Component {
	constructor(props) {
		super(props)
		var defaultState = {
			show: false,
			map: {}
		}
		this.state = defaultState
	}

	componentWillMount(){
		const { getnoticelist } = this.props
		getnoticelist()
	}

	handleloginnow(){
		browserHistory.push("/login")
	}

	handlelistwhat(noticelist){
		console.log(noticelist)
	}

	showthedata(_id){
		var newmap = this.state.map
		//console.log(newmap)
		console.log(newmap[_id])
		var isid = _id
		if(newmap[_id]==undefined||newmap[_id]==false) {
			newmap[_id] = true
			this.setState({map: newmap})
			console.log(this.state.map[_id])

		} else {
			newmap[_id] = false
			this.setState({map: newmap})
			console.log(this.state.map[_id])
		}
	}

	render(){
		const { login, user, noticelist } = this.props
		var map = this.state.map 
			return (
				<div>
					<div className="allpage">
						<div className="">
							<Carousel autoplay>
							    <div><img src={require('../public/img/2.jpg')}/></div>
							    <div><img src={require('../public/img/4.jpg')}/></div>
							    <div><img src={require('../public/img/2.jpg')}/></div>
							    <div><img src={require('../public/img/4.jpg')}/></div>
							 </Carousel>
							<div className="">
								<div className="home-noticelist">
								<p>最新公告</p>
								{
									noticelist.list.map( t=>{
										return (
											<div key={t._id} style={
												{
													padding: "5px",
													margin: "5px",
													border: "1px solid #CCC",
													width: "100%"
												}
											}>

											<h3>{t.title}</h3>
											<div className={ this.state.map[t._id]?"show":"hide" }>
												<p>{t.content}</p>
											</div>
											<div style={
												{	
													marginTop: "25px",
													textAlign: "right" 
												}
											}>
											<p>发布人:{t.author}</p>
											</div>
											<p onClick={this.showthedata.bind(this, t._id)} style={{
												cursor: "pointer"
											}}>显示全文</p>
											</div>
										)
									})
								}
								</div>
							</div>
						</div>
							 <div className="documentlaurant">
							 Document @Laurant 2017
							 </div>
					</div>
				</div>
			)
		
		
	}
}

function mapStateToProps(state) { 
    return {
        login: state.login,
        power: state.user.power,
        userlist: state.userlist,
        adminlist: state.adminlist,
        user: state.user,
        noticelist: state.noticelist
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
		getnoticelist: getNoticeListAction,
		delnotice: delNoticeAction
	}, dispatch)
}

let Home = connect(
    mapStateToProps,
    mapDispatchToProps
)(rootHome)

export default Home