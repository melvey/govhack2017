import {connect} from 'react-redux';
import ListHomes from '../components/ListHomes';

const mapStateToProps = (state) => ({
	// Modify this to only include the required properties
	...state
});


const ReduxContainer = connect(mapStateToProps)(ListHomes);

export default ReduxContainer;
