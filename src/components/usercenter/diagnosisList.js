import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getDiagnosisDataListAction } from '../../actions/action.js'
import style from '../../public/css/physicallist.css'
import { Input, Icon, Button } from 'antd'

class rootDiagnosisList extends Component {
	constructor(props) {
		super(props)
		var defaultState = {
			show: false,
			map: {},
			searchword: ""
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

	render(){
		const { diagnosisdatalist, showed } = this.props
		var map = this.state.map 
		return (
			<div>
			<Input type="text" prefix={<Icon type="search" style={{ fontSize: 13 }} />}
					value={this.state.searchword}
					onChange={this.onSearchWordChange('searchword').bind(this)}
					placeholder="搜索用户看诊单" 
					style={{width:"220px"}}/>
							{
								diagnosisdatalist.list.map( t=>{
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

										<h3>{t.username}于{t.date}的看诊单</h3>
										<div className={ this.state.map[t._id]?"show":"hide" }>
											show
										</div>
										<div style={
											{	
												marginTop: "25px",
												textAlign: "right" 
											}
										}>
										<p>诊治医生:{t.docter}</p>
										</div>
										<p onClick={this.showthedata.bind(this, t._id)} style={{
											cursor: "pointer"
										}}>显示全文</p>
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
										} className={ issearch==t.username?"show":"hide"}>

										<h3>{t.username}于{t.date}的看诊单</h3>
										<div className={ this.state.map[t._id]?"show":"hide" }>
											show
										</div>
										<div style={
											{	
												marginTop: "25px",
												textAlign: "right" 
											}
										}>
										<p>诊治医生:{t.docter}</p>
										</div>
										<p onClick={this.showthedata.bind(this, t._id)} style={{
											cursor: "pointer"
										}}>显示全文</p>
										</div>
										)
								 	}
								})
							}
				<p> diagnosisList Document @Laurant 2017</p>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		user: state.user,
		diagnosisdatalist: state.diagnosisdatalist
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({
		getdiagnosisdatalist: getDiagnosisDataListAction
	}, dispatch)
}

let diagnosisList = connect (
	mapStateToProps,
	mapDispatchToProps
)(rootDiagnosisList)

export default diagnosisList