import React, {Component, PropTypes} from 'react';
import styles from './ViewNest.scss';

class ViewNest extends Component {

	static propTypes = {
		className: PropTypes.string
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
			</div>
		);
	}

}

export default ViewNest;
