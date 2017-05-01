import React, { Component } from 'react'
import { Link } from 'react-router'
import { Menu, Icon } from 'antd';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { browserHistory } from 'react-router'
import style from '../public/css/desktop.css'
import { getUserListAction, getAdminListAction, getNoticeListAction, getHealthKnowledgeListAction, getDrugsListAction, getHospitalListAction } from '../actions/action.js'

const SubMenu = Menu.SubMenu;
class rootSystem extends Component {
	constructor(props) {
		super(props)
	}

	componentWillMount(){

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

	handletoshowuserlist(userlist){
		console.log(userlist)
		const { handleuserlist } = this.props
		handleuserlist(userlist)
	}

	handletoshowadminlist(adminlist){
		console.log(adminlist)
		const {handleadminlist } = this.props
		handleadminlist(adminlist)
	}

	handletoshownoticelist(noticelist){
		console.log(noticelist)
		const { handlenoticelist } = this.props
		handlenoticelist(noticelist)
	}

	handletoshowhealthknowledgelist(healthknowledgelist){
		console.log(healthknowledgelist)
		const { handlehealthknowledgelist } = this.props
		handlehealthknowledgelist(healthknowledgelist)
	}

	handletoshowdrugslist(drugslist){
		console.log(drugslist)
		const { handledrugslist} = this.props
		handledrugslist(drugslist)
	}

	handletoshowhospitallist(hospitallist){
		console.log(hospitallist)
		const { handlehospitallist} = this.props
		handlehospitallist(hospitallist)
	}

	render(){
		var hight = window.innerHeight
		const { login, children,userlist, adminlist, hospitallist } = this.props
		if(login){
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
					        <SubMenu key="sub1" title={<span><Icon type="mail" /><span>用户管理</span></span>}>
					          <Menu.Item key="1"><Link to='/system/showusers' onClick={this.handletoshowuserlist.bind(this, userlist)}>查看用户</Link></Menu.Item>
					          <Menu.Item key="2"><Link to='/system/showadmin' onClick={this.handletoshowadminlist.bind(this, adminlist)}>查看管理员</Link></Menu.Item>
					          <Menu.Item key="3"><Link to='/system/addadmin'>创建管理员</Link></Menu.Item>
					        </SubMenu>

					        <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>公告管理</span></span>}>
					          <Menu.Item key="5"><Link to='/system/shownotice' onClick={this.handletoshownoticelist.bind(this, adminlist)}>查看公告</Link></Menu.Item>
					          <Menu.Item key="6"><Link to='/system/addnotice'>添加公告</Link></Menu.Item>
					        </SubMenu>

					        <SubMenu key="sub5" title={<span><Icon type="appstore" /><span>健康信息管理</span></span>}>
					          <Menu.Item key="7"><Link to='/system/showhealthknowledge' onClick={this.handletoshowhealthknowledgelist.bind(this, adminlist)}>查看健康信息</Link></Menu.Item>
					          <Menu.Item key="8"><Link to='/system/addhealthknowledge'>添加健康信息</Link></Menu.Item>
					        </SubMenu>

					        <SubMenu key="sub6" title={<span><Icon type="appstore" /><span>药品管理</span></span>}>
					          <Menu.Item key="12"><Link to='/system/showdrugs' onClick={this.handletoshowdrugslist.bind(this, adminlist)}>查看药品</Link></Menu.Item>
					          <Menu.Item key="13"><Link to='/system/adddrugs'>添加药品</Link></Menu.Item>
					        </SubMenu>

					        <SubMenu key="sub7" title={<span><Icon type="appstore" /><span>合作医院管理</span></span>}>
					          <Menu.Item key="14"><Link to='/system/showhospital' onClick={this.handletoshowhospitallist.bind(this, hospitallist)}>查看合作医院</Link></Menu.Item>
					          <Menu.Item key="15"><Link to='/system/addhospital'>添加合作医院</Link></Menu.Item>
					        </SubMenu>

					        <SubMenu key="sub4" title={<span><Icon type="setting" /><span>系统设置</span></span>}>
					          <Menu.Item key="9"><Link to='/system/showusers'>管理员资料</Link></Menu.Item>
					          <Menu.Item key="10"><Link to='/system/showusers'>系统配置</Link></Menu.Item>
					          <Menu.Item key="11"><Link to='/system/about'>关于</Link></Menu.Item>
					        </SubMenu>
					      </Menu>
			 			</div>
			 			<div className="syscontent">
				            {children}
				         </div>
				</div>
			)
		}else{
			return (
				<div>
					<span className="sysloginnow">
					please <a href="javascript:;" onClick={this.handleloginnow.bind(this)}>login</a>
					</span>
				</div>	
			)
		}
		
	}
}

function mapStateToProps(state) { 
    return {
        login: state.login,
        power: state.user.power,
        userlist: state.userlist,
        adminlist: state.adminlist,
        noticelist: state.noticelist,
        healthknowledgelist: state.healthknowledgelist,
        drugslist: state.drugslist,
        hospitallist: state.hospitallist
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
		handleuserlist: getUserListAction,
		handleadminlist: getAdminListAction,
		handlenoticelist: getNoticeListAction,
		handlehealthknowledgelist: getHealthKnowledgeListAction,
		handledrugslist: getDrugsListAction,
		handlehospitallist: getHospitalListAction
	}, dispatch)
}

let System = connect(
    mapStateToProps,
    mapDispatchToProps
)(rootSystem)

export default System