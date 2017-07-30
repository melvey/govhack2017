import {connect} from 'react-redux';
import RenterProfile from '../components/RenterProfile';
import store from '../redux/store';
import setUserAction from '../redux/actions/SetUserAction';

const baseUser = {
	name: '',
	image: null,
	aboutMe: ''
};

const campuses = [
	{
		id: 1,
		name: 'Casuarina'
	},
	{
		id: 2,
		name: 'Waterfront'
	},
	{
		id: 3,
		name: 'Plamerston'
	}
];

const setName = (name) => {
	const currUser = store.getState().user;
	store.dispatch(setUserAction(currUser.set('name', name)));
};

const setCampus= (campus) => {
	const currUser = store.getState().user;
	store.dispatch(setUserAction(currUser.set('campus', campus)));
};

const setAbout= (about) => {
	const currUser = store.getState().user;
	store.dispatch(setUserAction(currUser.set('aboutMe', about)));
};

const mapStateToProps = (state) => ({
	user: state.user.toJS(),
	campuses,
	setName,
	setAbout,
	setCampus
});


const ReduxContainer = connect(mapStateToProps)(RenterProfile);

export default ReduxContainer;
