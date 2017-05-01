import React, { Component } from 'react'
import { Link } from 'react-router'
import { Menu, Icon } from 'antd';
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { bindActionCreators } from 'redux'
import { getDrugsListAction, getUserListAction, getPhysicalDataListAction, getDiagnosisDataListAction, getUserBlogListAction, getHealthKnowledgeListAction } from '../actions/action.js'
import { Button } from 'antd'
import style from '../public/css/User.css'

const SubMenu = Menu.SubMenu;
class rootUser extends Component {
	constructor(props) {
		super(props)
	}

	componentWillMount(){
	}

	handleclick(user) {
		console.log(user)
	}

	state = {
	    current: '1',
	    openKeys: [],
	  }
	  handleClick = (e) => {
	    console.log('Clicked: ', e);
	    this.setState({ current: e.key });
	  }
	  onOpenChange = (openKeys) => {
	    const state = this.state;
	    const latestOpenKey = openKeys.find(key => !(state.openKeys.indexOf(key) > -1));
	    const latestCloseKey = state.openKeys.find(key => !(openKeys.indexOf(key) > -1));

	    let nextOpenKeys = [];
	    if (latestOpenKey) {
	      nextOpenKeys = this.getAncestorKeys(latestOpenKey).concat(latestOpenKey);
	    }
	    if (latestCloseKey) {
	      nextOpenKeys = this.getAncestorKeys(latestCloseKey);
	    }
	    this.setState({ openKeys: nextOpenKeys });
	  }
	  getAncestorKeys = (key) => {
	    const map = {
	      sub3: ['sub2'],
	    };
	    return map[key] || [];
	  }

	handleloginnow(){
		browserHistory.push("/login")
	}

	handletoshowdrugslist(drugslist){
		console.log(drugslist)
		const { handledrugslist} = this.props
		handledrugslist(drugslist)
	}

	handletoshowuserlist(userlist){
		console.log(userlist)
		const { handleuserlist } = this.props
		handleuserlist(userlist)
		//document.body.scrollTop=150 //滚动条控制
	}

	handletoshowphysicaldatalist(physicaldatalist){
		console.log(physicaldatalist)
		const { handlephysicaldatalist} = this.props
		handlephysicaldatalist(physicaldatalist)
	}

	handletoshowdiagnosisdatalist(diagnosisdatalist){
		console.log(diagnosisdatalist)
		const { handlediagnosisdatalist} = this.props
		handlediagnosisdatalist(diagnosisdatalist)
	}

	handletoshowuserbloglist(userbloglist){
		console.log(userbloglist)
		const { handleuserbloglist} = this.props
		handleuserbloglist(userbloglist)
	}

	handlegethealthknowledgelist(healthknowledgelist){
		console.log(healthknowledgelist)
		const { gethealthknowledgelist} = this.props
		gethealthknowledgelist(healthknowledgelist)
	}

	render(){
		var hight = window.innerHeight
		const { user, login, children, drugslist, userlist, physicaldatalist, diagnosisdatalist, userbloglist, healthknowledgelist } = this.props
			return (
			<div>
				<div>
					<Menu
					    mode="inline" theme="dark"
					    openKeys={this.state.openKeys}
					    selectedKeys={[this.state.current]}
					    style={{ width: 200, height: hight }}
					    onOpenChange={this.onOpenChange}
					    onClick={this.handleClick}
					    >
					    <SubMenu key="sub1" title={<span><Icon type="mail" /><span>用户中心</span></span>}>
					        <Menu.Item key="1"><Link to='/user/showuserdata' >个人资料</Link></Menu.Item>
					        <Menu.Item key="2"><Link to='/user/changePsw' >修改密码</Link></Menu.Item>
					    </SubMenu>
					    <SubMenu key="sub2" title={<span><Icon type="mail" /><span>看诊信息</span></span>}>
					        <Menu.Item key="3"><Link to='/user/newPhysical' onClick={this.handletoshowuserlist.bind(this, userlist)}>新建体检</Link></Menu.Item>
					        <Menu.Item key="4"><Link to='/user/newDiagnosis'  onClick={this.handletoshowdrugslist.bind(this, drugslist)}>新建看诊</Link></Menu.Item>
					        <Menu.Item key="5"><Link to='/user/physicalList' onClick={this.handletoshowphysicaldatalist.bind(this, physicaldatalist)}>体检信息</Link></Menu.Item>
					        <Menu.Item key="6"><Link to='/user/diagnosisList' onClick={this.handletoshowdiagnosisdatalist.bind(this, diagnosisdatalist)}>看诊信息</Link></Menu.Item>
					    </SubMenu>
					    <SubMenu key="sub4" title={<span><Icon type="mail" /><span>动态信息</span></span>}>
					        <Menu.Item key="7"><Link to='/user/userBlog' >发表动态</Link></Menu.Item>
					        <Menu.Item key="8"><Link to='/user/userBlogList'  onClick={this.handletoshowuserbloglist.bind(this, userbloglist)}>用户动态</Link></Menu.Item>
					        <Menu.Item key="9"><Link to='/user/myBlogList'  onClick={this.handletoshowuserbloglist.bind(this, userbloglist)}>个人动态</Link></Menu.Item>
					    </SubMenu>
					    <SubMenu key="sub5" title={<span><Icon type="mail" /><span>药品与健康信息</span></span>}>
					        <Menu.Item key="10"><Link to='/user/userShowDrugs'  onClick={this.handletoshowdrugslist.bind(this, drugslist)}>查看药品信息</Link></Menu.Item>
					        <Menu.Item key="11"><Link to='/user/health' onClick={this.handlegethealthknowledgelist.bind(this, healthknowledgelist)}>查看健康信息</Link></Menu.Item>
					    </SubMenu>
					</Menu>
			 	</div>
			 	<div className="usercontent">
				    {children}
				</div>
			</div>
			)
		
	}
}

function mapStateToProps(state) {
	return {
		user: state.user,
		login: state.login,
		drugslist: state.drugslist,
		userlist: state.userlist,
		userbloglist: state.userbloglist
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({
		handledrugslist: getDrugsListAction,
		handleuserlist: getUserListAction,
		handlephysicaldatalist: getPhysicalDataListAction,
		handlediagnosisdatalist: getDiagnosisDataListAction,
		gethealthknowledgelist: getHealthKnowledgeListAction,
		handleuserbloglist: getUserBlogListAction
	}, dispatch)
}

let User = connect(
	mapStateToProps,
	mapDispatchToProps
)(rootUser)


export default User