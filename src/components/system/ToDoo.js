import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addTextAction } from '../../actions/action.js'


class RootToDoo extends Component {
	constructor(props){
		super(props)
		var defaultState ={
			text: ""
		}
		this.state = defaultState
	}

	onTextChange(e) {
		let value = e.target.value/*监听*/
		this.setState({text: value})
	}

	handleClick(text) {
		const { toDo } = this.props
		toDo(text)
	}

	render() {
		let text = this.state.text
		return (
			<header className="">
				<input 
					style={{width: 300}}
					type="text"
					value={text}
					onChange={this.onTextChange.bind(this)} />
				<button onClick={this.handleClick.bind(this, text)}>ToDoo</button>
			</header>
		)
	}
}

function mapStateToProps(state) {
	return {}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({
		toDo: addTextAction
	}, dispatch)
}

let ToDoo = connect (
	mapStateToProps,
	mapDispatchToProps
)(RootToDoo)
export default ToDoo
