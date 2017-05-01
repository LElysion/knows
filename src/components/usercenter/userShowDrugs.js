import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getDrugsListAction } from '../../actions/action.js'
import style from '../../public/css/physicallist.css'
import { Input, Icon, Button } from 'antd'
import { Pagination } from 'antd';

class rootUserShowDrugs extends Component {
	constructor(props) {
		super(props)
		var defaultState = {
			show: false,
			map: {},
			searchword: "",
			showlist: 1
		}
		this.state = defaultState
	}

	componentWillMount(){

	}

	handleonclick(physicaldatalist) {
		console.log(physicaldatalist)
	}

	onSearchWordChange(key) {
        return e => {
            var searchword = this.state.searchword
            searchword = e.target.value 
            this.setState({ searchword })
            console.log(searchword)
        }
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

	handleSearchClick(searchword) {
		console.log(searchword)
	}

	onPageChange(page){
		console.log('Page: ', page);
		//console.log('this: ' + this)
		console.log("nochange: "+this.state.showlist)
		this.state.showlist = page
		console.log("change: "+this.state.showlist)
		this.setState({showlist: page})
		console.log("setState: "+this.state.showlist)
	}

	render(){
		const { drugslist, showed, searchword } = this.props
		//var show = this.state.show
		var map = this.state.map 
		var showdrugslist = drugslist.list.slice(this.state.showlist*6-6,this.state.showlist*6)
		return (
			<div>
				<Input type="text" prefix={<Icon type="search" style={{ fontSize: 13 }} />}
					value={this.state.searchword}
					onChange={this.onSearchWordChange('searchword').bind(this)}
					placeholder="搜索药品名称" 
					style={{width:"220px"}}/>
				{
								showdrugslist.map( t=>{
									var issearch = this.state.searchword
									if(issearch==""){
										return (
										<div key={t._id} style={
											{
												padding: "5px",
												margin: "5px",
												border: "1px solid #CCC",
												width: "980px"
											}
										}>
										<h3>药品名称: {t.title}</h3>
										<div className={ this.state.map[t._id]?"show":"hide" }>
											{t.content}
										</div>
										<div style={
											{	
												marginTop: "25px",
												textAlign: "right" 
											}
										}>
										</div>
										<p onClick={this.showthedata.bind(this, t._id)} style={{
											cursor: "pointer"
										}}>查看药品详情</p>
										</div>
										)
									}else{
										return (
											<div key={t._id} style={
											{
												padding: "5px",
												margin: "5px",
												border: "1px solid #CCC",
												width: "980px"
											}
											} className={ issearch==t.title?"show":"hide"}>
											<h3>药品名称: {t.title}</h3>
											<div className={ this.state.map[t._id]?"show":"hide" }>
												{t.content}
											</div>
											<div style={
												{	
													marginTop: "25px",
													textAlign: "right" 
												}
											}>
											</div>
											<p onClick={this.showthedata.bind(this, t._id)} style={{
												cursor: "pointer"
											}}>查看药品详情</p>
											</div>
										)
									}
									
								})
							}
							<Pagination total={drugslist.list.length} 
							current = {this.state.showlist}
							onChange={ this.onPageChange.bind(this)} 
							pageSize={6}/>
				<p  onClick={this.handleonclick.bind(this, drugslist)}> drugslist Document @Laurant 2017</p>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		user: state.user,
		drugslist: state.drugslist,
		showed: state.showed
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({
		getdrugslist: getDrugsListAction
	}, dispatch)
}

let userShowDrugs = connect (
	mapStateToProps,
	mapDispatchToProps
)(rootUserShowDrugs)

export default userShowDrugs