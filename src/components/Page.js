import React, {PropTypes, Component} from 'react'

export default class Page extends Component {
	onYbtnClick(e) {
		this.props.setYear(+e.target.innerText)
	}
	render() {
		const {year, photos} = this.props.page
		return <div>
					<p>
						<button onClick={::this.onYbtnClick}>2016</button>
						<button onClick={::this.onYbtnClick}>2015</button>
						<button onClick={::this.onYbtnClick}>2014</button>
					</p>
					<h3>Год: {year}</h3>
					<p>У вас {photos.length} фотографий.</p>
				</div>
	}
}

Page.propTypes = {
  page: PropTypes.object.isRequired,
  setYear: PropTypes.func.isRequired
}