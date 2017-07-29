import React, {Component, PropTypes} from 'react';
import styles from './RenterProfile.scss';

class RenterProfile extends Component {

	static propTypes = {
		className: PropTypes.string
	};

	constructor(props) {
		super();

		this.props = props;
		this.state = {
			profileImg: 'dummy.png'
		};
	}

	render() {
		const ids = {
			name: 'renter-profile-name',
			about: 'renter-profile-about'
		};

		const className = this.props.className ? `${styles.content} ${this.props.className}` : styles.content;
		return (
			<div className={className}>
				<form>
					<div className={styles.inputGroupName}>
						<label htmlFor={ids.name}>Name</label>
						<input type="text" id={ids.name} />
					</div>

					<div className={styles.inputGroupImage}>
						<img src={this.state.profileImg} />
						<button className={styles.uploadPhotoBtn}>Upload photo</button>
					</div>

					<div className={styles.inputGroupAbout}>
						<label htmlFor={ids.about}>About Me</label>
						<textarea id={ids.about} />
					</div>

					<div className={styles.nextBtn}>
						<button>Update Profile</button>
					</div>

				</form>
			</div>
		);
	}

}

export default RenterProfile;
