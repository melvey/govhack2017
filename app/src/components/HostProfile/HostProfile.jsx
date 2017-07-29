import React, {Component, PropTypes} from 'react';
import styles from './HostProfile.scss';

const ids = {
	aboutMe: 'host-profile-about-host',
	aboutNest: 'host-profile-about-nest'
};

class HostProfile extends Component {

	static propTypes = {
		className: PropTypes.string,
		userId: PropTypes.number,
		aboutMe: PropTypes.string,
		price: PropTypes.number,
		address: PropTypes.string,
		aboutNest: PropTypes.string,
		minStay: PropTypes.string
	};

	constructor(props) {
		super();

		this.props = props;
		this.state = {
			page: 1
		};
	}

	getAboutMe = () => (<div className={styles.aboutMe}>
			<label htmlFor={ids.aboutMe}>About Me</label>
			<textarea id={ids.aboutMe} />
			<button>Next</button>
	</div>);

	getAboutNest = () => (<div className={styles.aboutNest}>
		<div className={styles.inputGroupAddress}>
			<label htmlFor={ids.inputGroupAddress}>Address</label>
			<input type="text" id={ids.inputGroupAddress} />
		</div>

		<div className={styles.inputGroupAmenities}>
			<label htmlFor={ids.amenities}>Amenities</label>
			<textarea id={ids.amenities} />
		</div>

		// mininum stay
		<div className={styles.inputGroupMinStay}>
			<label htmlFor={ids.minStay}>Minimum Stay</label>
			<textarea id={ids.minStay} />
		</div>

		// preferred gender
	</div>);



	render() {
		let page = null;
		switch(page) {
			case 1:
				page = this.getAboutMe();
				break;
			case 2:
				page = this.getAboutNest();
				break;
		};

		return (
			<div className={styles.content}>
				{page}
			</div>
		);
	}

}

export default HostProfile;
