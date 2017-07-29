import React, { Component } from 'react';
import styles from './Header.scss';
import {Link} from 'react-router';

class Header extends Component {
	
	static propTypes = {
		title: PropTypes.string,
		messageCount: PropTypes.number,
		user: PropTypes.string
	};

  render() {
		return (
				<div className={styles.root}>
					<div className={styles.container}>
						<Link to="/" className={styles.brand}>
							<span className={styles.brandTxt}>Your Company</span>
						</Link>
						<div className={styles.banner}>
							<h1 className={styles.bannerTitle}>React</h1>
							<p className={styles.bannerDesc}>Complex web apps made easy</p>
						</div>
					</div>
				</div>
		);
  }

}

export default Header;
