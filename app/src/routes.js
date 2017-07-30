import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import Index from './components/Index';
import About from './components/About';
import ListHomes from './containers/ListHomesContainer';
import RenterProfile from './containers/RenterProfileContainer';
import HostProfile from './components/HostProfile';
import NotFound from './components/NotFound';

const router = (
	<Route path="/" component={App}>
		<IndexRoute component={Index} />
		<Route path="about" component={About} />
		<Route path="nests" component={ListHomes} />
		<Route path="renter-profile" component={RenterProfile} />
		<Route path="host-home" component={HostProfile} />
		<Route path="*" component={NotFound} />
	</Route>
);

export default router;
