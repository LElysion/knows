import React, { Component } from 'react'
import { Link } from 'react-router'
import style from '../public/css/desktop.css'
import { Menu, Icon, Button } from 'antd'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { notLogin, getHealthKnowledgeListAction, getNoticeListAction } from '../actions/action.js'

//导航
const SubMenu = Menu.SubMenu
const MenuItemGroup = Menu.ItemGroup
/*

*/

class rootDeskTop extends Component {
	constructor(props) {
		super(props)
	}

	componentWillMount(){

	}
	handleEsc(login) { /*提交处理*/
		console.log(login)
		const { escnow } = this.props
		escnow()
	}

	handlegethealthknowledgelist(healthknowledgelist){
		console.log(healthknowledgelist)
		const { gethealthknowledgelist} = this.props
		gethealthknowledgelist(healthknowledgelist)
	}

	handlegetnoticelist(noticelist) {
		console.log(noticelist)
		const { getnoticelist } = this.props
		getnoticelist(noticelist)
	}

	render(){
		const { login, power, healthknowledgelist, noticelist } = this.props
		var ispower = power > 1
		return (
			<div>
				<header className="headericon"><span className="headericonin">社区</span>健康信息平台</header>
				<Menu mode="horizontal" className="" theme="dark" style={{textAlign: "center", padding:"4px"}}>
					<Menu.Item><Link to='/' className="linkitem">首页</Link></Menu.Item>
					<Menu.Item><Link to='/user' className="linkitem">健康档案中心</Link></Menu.Item>
					<Menu.Item><Link to='/health' className="linkitem" onClick={this.handlegethealthknowledgelist.bind(this, healthknowledgelist)}>健康信息</Link></Menu.Item>
					<Menu.Item><Link to='/noticecenter' className="linkitem" onClick={this.handlegetnoticelist.bind(this, noticelist)}>公告</Link></Menu.Item>
					<Menu.Item><Link to='/hospital' className="linkitem">合作医院</Link></Menu.Item>
					<Menu.Item className={ispower?"newesc":"hide"}><Link to='/system' className="linkitem">系统管理</Link></Menu.Item>
				</Menu>
				<div className="login">
					<Button style={{marginRight:"12px"}} className={login?"hide":"new"}>
						<Link to='/login'>
							login
						</Link>
					</Button>
					<Button className={login?"hide":"new"}>
						<Link to='/register'>
							register
						</Link>
					</Button>
					<span style={{marginRight:"12px",right:"15px"}} className={login?"newesc":"hide"} onClick={this.handleEsc.bind(this,login)}>
						<Link to='/login'>
							esc
						</Link>
					</span>
				</div>
				{ this.props.children }
			</div> 
		)
	}
}

function mapStateToProps(state) { 
    return {
        login: state.login,
        power: state.user.power
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ 
      escnow:notLogin,
      gethealthknowledgelist: getHealthKnowledgeListAction,
      getnoticelist: getNoticeListAction
    }, dispatch)
}

let DeskTop = connect(
    mapStateToProps,
    mapDispatchToProps
)(rootDeskTop)

export default  DeskTop