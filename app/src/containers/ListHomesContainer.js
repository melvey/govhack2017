import {connect} from 'react-redux';
import ListHomes from '../components/ListHomes';
import store from '../redux/store';
import setUserAction from '../redux/actions/SetRentalListAction';

const mapStateToProps = (state) => ({
	nests: state.rentals.toJS()
});


const ReduxContainer = connect(mapStateToProps)(ListHomes);

export default ReduxContainer;
