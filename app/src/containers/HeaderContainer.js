import {connect} from 'react-redux';
import Header from '../components/Header';

const mapStateToProps = (state) => ({
	title: 'Page title',
	newMessageCount: 0,
	user: 'Elvey'
});

const ReduxContainer = connect(mapStateToProps)(Header);

export default ReduxContainer;
