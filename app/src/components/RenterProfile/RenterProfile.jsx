import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './RenterProfile.scss';

class RenterProfile extends Component {

	static propTypes = {
		user: PropTypes.shape({
			name: PropTypes.string,
			image: PropTypes.string,
			aboutMe: PropTypes.string,
			campus: PropTypes.number
		}).isRequired,
		campuses: PropTypes.arrayOf(PropTypes.shape({
			id: PropTypes.number,
			name: PropTypes.string
		})).isRequired,
		setName: PropTypes.func.isRequired,
		setAbout: PropTypes.func.isRequired,
		setCampus: PropTypes.func.isRequired
	};

	constructor(props) {
		super();

		this.props = props;
	}

	setName = (evt) => {
		this.props.setName(evt.target.value);
	};

	setAbout = (evt) => {
		this.props.setAbout(evt.target.value);
	};

	setCampus = (evt) => {
		this.props.setCampus(evt.target.value);
	};

	render() {
		const ids = {
			name: 'renter-profile-name',
			about: 'renter-profile-about'
		};

		const image = this.props.user.image || 'http://via.placeholder.com/400x400';

		return (
			<div className={styles.content}>
				<form>
					<div className={styles.inputGroupName}>
						<label htmlFor={ids.name}>Name</label>
						<input type="text" id={ids.name} value={this.props.user.name} placeholder="Jane Doe" onChange={this.setName} />
					</div>

					<div className={styles.inputGroupImage}>
						<img src={image} />
						<button className={styles.uploadPhotoBtn}>Upload photo</button>
					</div>

					<div className={styles.inputGroupAbout}>
						<label htmlFor={ids.about}>Describe myself</label>
						<textarea id={ids.about} value={this.props.user.aboutMe} onChange={this.setAbout} />
					</div>

					<div className={styles.inputGroupCampus}>
						<label htmlFor={ids.about}>My Campus</label>
						<select value={this.props.user.campus} onChange={this.setCampus}>
							<option value="">Select campus</option>
							{this.props.campuses.map((campus) => (<option value={campus.value}>{campus.name}</option>))}
						</select>
					</div>

					<div className={styles.nextBtn}>
						<button>Next</button>
					</div>

				</form>
			</div>
		);
	}

}

export default RenterProfile;
