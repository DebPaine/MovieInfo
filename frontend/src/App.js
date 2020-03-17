import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Landing from './Components/Landing/Landing';
import 'bulma/css/bulma.min.css';
import './App.css';

const App = () => {
	return (
		<Router>
			<Fragment>
				<Navbar />
				<Switch>
					<Route exact path='/' component={Landing} />
				</Switch>
			</Fragment>
		</Router>
	);
};

export default App;
