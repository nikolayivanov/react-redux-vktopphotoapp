import React, {PropTypes, Component} from 'react'

export default class Page extends Component {
	onYbtnClick(e) {
		this.props.getPhotos(+e.target.innerText)
	}
	render() {
		const {year, photos, fetching} = this.props.page
		return <div className='ib page'>
					<p>
						<button className='btn' onClick={::this.onYbtnClick}>2016</button>
						<button className='btn' onClick={::this.onYbtnClick}>2015</button>
						<button className='btn' onClick={::this.onYbtnClick}>2014</button>
					</p>
					<h3>Год: {year}</h3>
					{
						fetching ? <p>Закгрузка...</p> :
						<p>У вас {photos.length} фотографий.</p>
					}
				</div>
	}
}

Page.propTypes = {
  page: PropTypes.object.isRequired,
  getPhotos: PropTypes.func.isRequired
}