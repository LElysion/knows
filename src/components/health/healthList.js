import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import style from '../../public/css/healthlist.css'
import { Input, Icon, Button } from 'antd'
import { Pagination } from 'antd';

class rootHealthList extends Component {
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

	handleClick(t){
		console.log(t)
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
		const { healthknowledgelist, searchword, page, pageSize } = this.props
		var showhealthknowledgelist = healthknowledgelist.list.slice(this.state.showlist*4-4,this.state.showlist*4)
		return (
			<div>
			<Input type="text" prefix={<Icon type="search" style={{ fontSize: 13 }} />}
					value={this.state.searchword}
					onChange={this.onSearchWordChange('searchword').bind(this)}
					placeholder="搜索健康信息" 
					style={{width:"220px"}}/>
				{
								showhealthknowledgelist.map( t=>{
									var issearch = this.state.searchword
									if(issearch==""){
									return (
										<div key={t._id} style={
											{
												padding: "5px",
												margin: "5px",
												border: "1px solid #CCC",
												width: "1200px"
											}
										}>
										<h3 onClick={this.showthedata.bind(this, t._id)}
											style={{
												cursor:"pointer",
												border: "1px dotted #6A5ACD",
												boxShadow: "-3px 0 5px #E1FFFF",
												background: "#F0F8FF",
												padding: "5px"
											}}
										>{t.title}</h3>
										<p style={
											{
												color:"black",
												margin: "5px",
												border: "1px solid #000080",
												padding: "5px",
												background: "white"
											}
										} className={ this.state.map[t._id]?"show":"hide" }>{t.content}</p>
										<div style={
											{	
												textAlign: "right" ,
											}
										}>
										<p>{t.author}</p>
										<p>{t.date}</p>
										</div>
										<p>{t.comment}</p>
										</div>
									)}else {
										return (
										<div key={t._id} style={
											{
												padding: "5px",
												margin: "5px",
												border: "1px solid #CCC",
												width: "1200px"
											}
										} className={ issearch==t.title?"show":"hide"}>
										<h3 onClick={this.showthedata.bind(this, t._id)}
											style={{
												cursor:"pointer",
												border: "1px dotted #6A5ACD",
												boxShadow: "-3px 0 5px #E1FFFF",
												background: "#F0F8FF",
												padding: "5px"
											}}
										>{t.title}</h3>
										<p style={
											{
												color:"black",
												margin: "5px",
												border: "1px solid #000080",
												padding: "5px",
												background: "white"
											}
										} className={ this.state.map[t._id]?"show":"hide" }>{t.content}</p>
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
									)}
								})
						}
						<Pagination total={healthknowledgelist.list.length} 
						current = {this.state.showlist}
						onChange={ this.onPageChange.bind(this)} 
						pageSize={4}/>
				<p> healthList Document @Laurant 2017</p>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		user: state.user,
		healthknowledgelist: state.healthknowledgelist
	}
}

function mapDispatchToProps(dispatch){
	return {

	}
}

let healthList = connect (
	mapStateToProps,
	mapDispatchToProps
)(rootHealthList)

export default healthList