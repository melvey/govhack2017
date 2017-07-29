import {connect} from 'react-redux';
import RenterProfile from '../components/RenterProfile';

const mapStateToProps = (state) => ({
	// Modify this to only include the required properties
	...state
});


const ReduxContainer = connect(mapStateToProps)(RenterProfile);

export default ReduxContainer;
