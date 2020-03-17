import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Components/Navbar';
import 'bulma/css/bulma.min.css';
import './App.css';

const App = () => {
	return (
		<Router>
			<Navbar />
		</Router>
	);
};

export default App;
