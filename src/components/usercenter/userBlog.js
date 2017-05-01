import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addUserBlogAction } from '../../actions/action.js'
import { browserHistory } from 'react-router'
import { Button, Form, Input, Icon, Checkbox } from 'antd';

const FormItem = Form.Item;

class rootUserBlog extends Component {
	constructor(props) {
		super(props)
		var defaultState = {
			userBlog: {
				title: "",
				content: "",
				author: "",
				date: "",
				comment: "",
				commenter: ""
			}
		}
		this.state = defaultState
	}

	componentWillMount(){

	}

	onTextChange(key) {
        return e => {
            var userBlog = this.state.userBlog
            userBlog[key] = e.target.value 
            this.setState({ userBlog })
            console.log(userBlog)
        }
    }

    handleAddUserBlog(userBlog) {
    	const { user, handleUserBlog } = this.props
    	var userBlog = this.state.userBlog
    	var _date = new Date
    	userBlog.date = _date.toLocaleDateString()
    	userBlog.author = user.username
    	console.log(userBlog)
    	handleUserBlog(userBlog)
    	browserHistory.push("/user")
    }

	render(){
		var userBlog = this.state.userBlog
		const { user } = this.props
		return (
			<div>
				<p>发表动态</p>
				<Form className="login-form login-formp">
					<FormItem>
					标题:&nbsp;<Input type="text" 
					value={userBlog.title} 
					onChange={this.onTextChange('title').bind(this)} 
					placeholder="title" 
					style={{width:"550px"}}/>
					</FormItem>

					<FormItem>
					<div style={{display:"inline-block", height:"380px", lineHight:"380px"}}>
					内容:&nbsp;
					</div>
					<Input type="textarea" rows={20}
					value={userBlog.content}  
					onChange={this.onTextChange('content').bind(this)} 
					placeholder="userBlog" 
					style={{width:"550px"}}/>
					</FormItem>

					<FormItem>
					<Button type="primary" onClick={this.handleAddUserBlog.bind(this, userBlog)}>submit</Button>
					</FormItem>
				</Form>
				<p> userBlog Document @Laurant 2017</p>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		user: state.user
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({
		handleUserBlog: addUserBlogAction
	}, dispatch)
}

let userBlog = connect(
	mapStateToProps,
	mapDispatchToProps
)(rootUserBlog)

export default userBlog