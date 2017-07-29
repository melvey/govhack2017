import React, {Component, PropTypes} from 'react';
import styles from './ListHomes.scss';

class ListHomes extends Component {

	static propTypes = {
		nests: PropTypes.arrayOfType(PropTypes.shape({
			hostId: PropTypes.number,
			hostName: PropTypes.string,
			address: PropTypes.string,
			campusDist: PropTypes.string,
			price: PropTypes.number,
			minStay: PropTypes.number,
			photo: PropTypes.string
		}))
	};

	constructor(props) {
		super();

		this.props = props;
		this.state = {};
	}

	render() {
		const className = this.props.className ? `${styles.content} ${this.props.className}` : styles.content;
		return (
			<div className={className}>
				<div className={styles.list}>
					{this.props.nests.map((nest) => (<div className={styles.houseItem}>
						<img src={nest.photo} className={styles.nestPhoto} />
						<div className={styles.nestDetails}>
							<div className={styles.price}>{`\$${nest.price}}/week`}</div>
							<div className={styles.host}>{nest.hostName}</div>
							<div className={styles.address}>{nest.address}</div>
							<div className={styles.campusDist}>{nest.campusDist}</div>
						</div>
					</div>))};

				</div>
			</div>
		);
	}

}

export default ListHomes;
