import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addPhysicalAction } from '../../actions/action.js'
import { Button, Form, Input, Icon, Select } from 'antd';
import style from '../../public/css/newPhysical.css'

const FormItem = Form.Item;
const Option = Select.Option;

//新建体检表
class rootNewPhysical extends Component {
	constructor(props) {
		super(props)
		var defaultState = {
			physicaldata: {
				id: "",
				lastId: "",
				username: "",
				age: "",
				gender: "",
				height: "",
				weight: "",
				leftSight: "",
				rightSight: "",
				highPressure: "",
				lowPressure: "",
				heartBeat: "",
				color: "",
				liver: "",
				lung: "",
				teeth: "",
				remark: "",
				content: "",
				docter: "",
				date: ""
			}
		}
		this.state = defaultState
	}

	componentWillMount(){

	}

	onTextChange(key) {
        return e => {
            var physicaldata = this.state.physicaldata
            physicaldata[key] = e.target.value 
            this.setState({ physicaldata })
            console.log(physicaldata)
        }
    }

    onGenderChange(e) {
    	console.log('radio checked', e.targer.value)
    	this.setState ({
    		value: e.targer.value
    	})
    }

    handleClick(e) {
    	console.log("newPhysical")
    }

    handleAddPhysical(physicaldata) {
    	const { user, handlePhysical } = this.props
    	var physicaldata = this.state.physicaldata
    	var _date = new Date
    	physicaldata.date = _date.toLocaleDateString()
    	physicaldata.docter = user.username
    	console.log(physicaldata)
    	handlePhysical(physicaldata)
    }

    handleChange(value) {
		console.log(`selected ${value}`)
		this.state.physicaldata.username = value
		console.log(this.state.physicaldata)

	}

	// addItemToSelect(objSelect, objItemText, objItemValue) { //为下拉框添加选项
	// 	var varItem = new Option(objItemText, objItemValue) //有更好的方式可以添加选项, 该方法废弃
	// 	objSelect.options.add(varItem)
	// 	console.log("addItemToSelect Now")
	// }

	render(){
		var physicaldata = this.state.physicaldata
		const { userlist, user } = this.props
		console.log(userlist)
		return (
			<div>
				<p>新建体检表</p>
				<Form className="" 
				style={{ width:950 }}
				labelCol={{span:3, offset:12}}>
				
					<FormItem
					>
						姓名:&#12288;&#12288;<Select defaultValue="" style={{ width: 220 }} onChange={this.handleChange.bind(this)}>
									{
										userlist.list.map( t=>{
											return (
												<Option value={t.username} key={t._id} >{t.username}</Option>
											)
										})
									}
							    </Select>
				    </FormItem>
					<FormItem>
						性别:&nbsp;&#12288;&#12288;<Input type="text"  prefix={<Icon type="" style={{ fontSize: 13 }} />}
						value={physicaldata.gender} 
						onChange={this.onTextChange('gender').bind(this)} 
						placeholder="" 
						style={{width:"220px"}}/>
						&#12288;年龄:&nbsp;&#12288;&#12288;<Input type="text"  prefix={<Icon type="" style={{ fontSize: 13 }} />}
						value={physicaldata.age} 
						onChange={this.onTextChange('age').bind(this)} 
						placeholder="" 
						style={{width:"220px"}}/>
					</FormItem>
					<FormItem >
						身高:&nbsp;&#12288;&#12288;<Input type="text"  prefix={<Icon type="" style={{ fontSize: 13 }} />}
						value={physicaldata.height} 
						onChange={this.onTextChange('height').bind(this)} 
						placeholder="" 
						style={{width:"220px"}}/>
						&#12288;体重:&nbsp;&#12288;&#12288;<Input type="text"  prefix={<Icon type="" style={{ fontSize: 13 }} />}
						value={physicaldata.weight} 
						onChange={this.onTextChange('weight').bind(this)} 
						placeholder="" 
						style={{width:"220px"}}/>
					</FormItem>
					<FormItem>
						左眼视力: <Input type="text"  prefix={<Icon type="" style={{ fontSize: 13 }} />}
						value={physicaldata.leftSight} 
						onChange={this.onTextChange('leftSight').bind(this)} 
						placeholder="" 
						style={{width:"220px"}}/>
						&#12288;右眼视力: <Input type="text"  prefix={<Icon type="" style={{ fontSize: 13 }} />}
						value={physicaldata.rightSight} 
						onChange={this.onTextChange('rightSight').bind(this)} 
						placeholder="" 
						style={{width:"220px"}}/>
					</FormItem>
					<FormItem>
						高血压:&nbsp;&#12288;<Input type="text"  prefix={<Icon type="" style={{ fontSize: 13 }} />}
						value={physicaldata.highPressure} 
						onChange={this.onTextChange('highPressure').bind(this)} 
						placeholder="" 
						style={{width:"220px"}}/>
						&#12288;低血压:&nbsp;&#12288;<Input type="text"  prefix={<Icon type="" style={{ fontSize: 13 }} />}
						value={physicaldata.lowPressure} 
						onChange={this.onTextChange('lowPressure').bind(this)} 
						placeholder="" 
						style={{width:"220px"}}/>
					</FormItem>
					<FormItem>
						心率:&nbsp;&#12288;&#12288;<Input type="text"  prefix={<Icon type="" style={{ fontSize: 13 }} />}
						value={physicaldata.heartBeat} 
						onChange={this.onTextChange('heartBeat').bind(this)} 
						placeholder="" 
						style={{width:"220px"}}/>
						&#12288;色盲:&nbsp;&#12288;&#12288;<Input type="text"  prefix={<Icon type="" style={{ fontSize: 13 }} />}
						value={physicaldata.color} 
						onChange={this.onTextChange('color').bind(this)} 
						placeholder="" 
						style={{width:"220px"}}/>
					</FormItem>
					<FormItem>
						肝功能:&nbsp;&#12288;<Input type="text"  prefix={<Icon type="" style={{ fontSize: 13 }} />}
						value={physicaldata.liver} 
						onChange={this.onTextChange('liver').bind(this)} 
						placeholder="" 
						style={{width:"220px"}}/>
						&#12288;肺功能:&nbsp;&#12288;<Input type="text"  prefix={<Icon type="" style={{ fontSize: 13 }} />}
						value={physicaldata.lung} 
						onChange={this.onTextChange('lung').bind(this)} 
						placeholder="" 
						style={{width:"220px"}}/>
					</FormItem>					
					<FormItem>
						<div style={{ display: "inline-block",height:"50px",lineHight:"50px"}}>注意事项:</div>
						<Input type="textarea" rows={3}  prefix={<Icon type="" style={{ fontSize: 13 }} />}
						value={physicaldata.content} 
						onChange={this.onTextChange('content').bind(this)} 
						placeholder="" 
						style={{width:"560px"}}/>
					</FormItem>
					<FormItem>
						诊治医生: <Input type="text"  prefix={<Icon type="" style={{ fontSize: 13 }} />}
						value={user.username} 
						onChange={this.onTextChange('docter').bind(this)} 
						placeholder="" 
						disabled={true}
						style={{width:"220px"}}/>
					</FormItem>
					<FormItem>
						<Button type="primary" onClick={this.handleAddPhysical.bind(this, physicaldata)}>add</Button>
					</FormItem>
				</Form>
				<p> newPhysical Document @Laurant 2017</p>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		userlist: state.userlist,
		user: state.user
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({
		handlePhysical: addPhysicalAction
	}, dispatch)
}

let newPhysical = connect(
	mapStateToProps,
	mapDispatchToProps
)(rootNewPhysical)

export default newPhysical