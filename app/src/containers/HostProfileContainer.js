import {connect} from 'react-redux';
import HostProfile from '../components/HostProfile';

const mapStateToProps = (state) => ({
	// Modify this to only include the required properties
	...state
});


const ReduxContainer = connect(mapStateToProps)(HostProfile);

export default ReduxContainer;
