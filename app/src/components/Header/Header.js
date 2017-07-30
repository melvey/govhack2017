import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './Header.scss';
import {Link} from 'react-router';
import config from '../../config/general';

class Header extends Component {
	
	static propTypes = {
		title: PropTypes.string,
		newMessageCount: PropTypes.number,
		user: PropTypes.string
	};

	constructor(props) {
		super();

		this.props = props;
	}

  render() {
		let userControls = null;
		console.log(this.props);
		if(this.props.user) {
			userControls = (<div className={styles.userControls}>
				<Link className={styles.messageBtn} to={`${config.basePath}messages`}>Messages</Link>
				<Link className={styles.profileBtn} to={`${config.basePath}profile`}>Profile</Link>
			</div>);
		}
		console.log(userControls);

		return (
				<div className={styles.root}>
					<div className={styles.container}>
						<button className={styles.backBtn}>Back</button>
						{this.props.title ? <h1 className={styles.mainTitle}>{this.props.title}</h1> : null}
						{userControls}
					</div>
				</div>
		);
  }

}

export default Header;
