import React, {PropTypes, Component} from 'react'

export default class User extends Component {
	render() {
		const {name, last_name, age} = this.props.user
		return <div>
					<p>Привет из моей App, {name} {last_name}!</p>
					<p>Вам уже {age}!</p>
				</div>
	}
}

User.propTypes = {
	user: PropTypes.object.isRequired
}