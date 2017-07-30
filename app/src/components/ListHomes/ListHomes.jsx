import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import styles from './ListHomes.scss';
import config from '../../config/general';

class ListHomes extends Component {

	static propTypes = {
		nests: PropTypes.arrayOf(PropTypes.shape({
			hostId: PropTypes.number,
			hostName: PropTypes.string,
			suburb: PropTypes.string,
			campusDist: PropTypes.number,
			price: PropTypes.number,
			minStay: PropTypes.number,
			photo: PropTypes.string
		})).isRequired
	};

	constructor(props) {
		super();
		console.log(props);

		this.props = props;
		this.state = {
			search: ''
		};
	}

	search = (evt) => {
		this.setState({search: evt.target.value});
	};

	render() {
		const className = this.props.className ? `${styles.content} ${this.props.className}` : styles.content;
		let nests = this.props.nests;
		const searchTerm = this.state.search.toUpperCase();
		if(this.state.search.length) {
			nests = nests.filter((nest) => (
					nest.hostName.toUpperCase().indexOf(searchTerm) >= 0
					|| nest.suburb.toUpperCase().indexOf(searchTerm) >= 0
			));
		}

		return (
			<div className={className}>
				<div className={styles.searchContainer}>
					<div className={styles.searchBox}>
						<input type="text" onChange={this.search} />
					</div>
				</div>
				<div className={styles.list}>
					{nests.map((nest, index) => (<div className={styles.nestItem} key={index}>
						<div className={styles.nestDetails}>
							<img src={nest.photo} className={styles.nestPhoto} />
							<div className={styles.host}>{nest.hostName}</div>
							<div className={styles.campusDist}>{`${nest.campusDist}km from university`}</div>
						</div>
						<div className={styles.nestRight}>
							<div className={styles.price}>{`\$${nest.price}/week`}</div>
							<Link className={styles.viewBtn} to={`${config.basePath}view/${nest.id}`}>View</Link>
						</div>
					</div>))};

				</div>
			</div>
		);
	}

}

export default ListHomes;
