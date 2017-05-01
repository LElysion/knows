import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addDiagnosisAction } from '../../actions/action.js'
import { Button, Form, Input, Icon, Select } from 'antd';

const FormItem = Form.Item;

class rootnewDiagnosis extends Component {
	constructor(props) {
		super(props)
		var defaultState = {
			diagnosisdata: {
				username: "",
				sickcontent: "",
				drugsneed:"",
				drugscontent: "",
				doctercontent: "",
				docter: "",
				date:""
			}
		}
		this.state = defaultState
	}

	componentWillMount(){

	}

	onTextChange(key) {
        return e => {
            var diagnosisdata = this.state.diagnosisdata
            diagnosisdata[key] = e.target.value 
            this.setState({ diagnosisdata })
            console.log(diagnosisdata)
        }
    }

	handleChange(value) {
		console.log(`selected ${value}`)
		this.state.diagnosisdata.drugsneed = value
		console.log(this.state.diagnosisdata)

	}

	handleAddDiagnosis(diagnosisdata) {
    	const { user, handleDiagnosis } = this.props
    	var diagnosisdata = this.state.diagnosisdata
    	var _date = new Date
    	diagnosisdata.date = _date.toLocaleDateString()
    	diagnosisdata.docter = user.username
    	console.log(diagnosisdata)
    	handleDiagnosis(diagnosisdata)
    }

	render(){
		var diagnosisdata = this.state.diagnosisdata
		const { drugslist, user } = this.props
		return (
			<div>
			<p>新建看诊表</p>
				<Form className="" 
				style={{ width:950 }}
				labelCol={{span:3, offset:12}}>
				<FormItem>
					就诊人:&nbsp;&#12288;<Input type="text"  prefix={<Icon type="" style={{ fontSize: 13 }} />}
						value={diagnosisdata.username} 
						onChange={this.onTextChange('username').bind(this)} 
						placeholder="username" 
						style={{width:"560px"}}/>
				</FormItem>
				<FormItem>
					<div style={{ display: "inline-block",height:"75px",lineHight:"75px"}}>
					病情:&nbsp;&#12288;&#12288;
					</div>
					<Input type="textarea" rows={3}  prefix={<Icon type="" style={{ fontSize: 13 }} />}
						value={diagnosisdata.sickcontent} 
						onChange={this.onTextChange('sickcontent').bind(this)} 
						placeholder="注意事项" 
						style={{width:"560px"}}/>
				</FormItem>
				<FormItem>
					药品:&nbsp;&#12288;&#12288;<Select defaultValue="" style={{ width: 560 }} onChange={this.handleChange.bind(this)}>
									{
										drugslist.list.map( t=>{
											return (
												<Option value={t.title} key={t._id} >{t.title}</Option>
											)
										})
									}
							    </Select>
				</FormItem>
				<FormItem>
					<div style={{ display: "inline-block",height:"75px",lineHight:"75px"}}>
					药品用法:&nbsp; 
					</div>
					<Input type="textarea" rows={3}  prefix={<Icon type="" style={{ fontSize: 13 }} />}
						value={diagnosisdata.drugscontent} 
						onChange={this.onTextChange('drugscontent').bind(this)} 
						placeholder="注意事项" 
						style={{width:"560px"}}/>
				</FormItem>
				<FormItem>
					<div style={{ display: "inline-block",height:"75px",lineHight:"75px"}}>
					医生建议:&nbsp; 
					</div><Input type="textarea" rows={3}  prefix={<Icon type="" style={{ fontSize: 13 }} />}
						value={diagnosisdata.doctercontent} 
						onChange={this.onTextChange('doctercontent').bind(this)} 
						placeholder="注意事项" 
						style={{width:"560px"}}/>
				</FormItem>
				<FormItem>
						诊治医生: <Input type="text"  prefix={<Icon type="" style={{ fontSize: 13 }} />}
						value={user.username}
						disabled={true}
						onChange={this.onTextChange('docter').bind(this)} 
						placeholder="" 
						style={{width:"560px"}}/>
					</FormItem>
					<FormItem>
						<Button type="primary" onClick={this.handleAddDiagnosis.bind(this, diagnosisdata)}>add</Button>
					</FormItem>
				</Form>
				<p> newDiagnosis Document @Laurant 2017</p>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		drugslist: state.drugslist,
		user: state.user
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({
		handleDiagnosis: addDiagnosisAction
	}, dispatch)}

let newDiagnosis = connect(
	mapStateToProps,
	mapDispatchToProps
)(rootnewDiagnosis)

export default newDiagnosis