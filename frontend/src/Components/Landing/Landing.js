import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Landing.css';

const Landing = () => {
	const [ searchBar, setSearchBar ] = useState({
		search: '',
		moviesArray: []
	});

	const onClick = async (e) => {
		try {
			const btn = document.querySelector('#btn');
			btn.classList.toggle('is-active');
			const movies = await axios.get(`/searchMovies/${searchBar.search}`);
			setSearchBar({ ...searchBar, moviesArray: movies.data.results });
			console.log(searchBar);
		} catch (err) {
			console.log(err.message);
		}
	};

	return (
		<Fragment>
			<section className='hero is-fullheight font1'>
				<div className='hero-body'>
					<div className='container'>
						<div className='herotext'>
							{searchBar.moviesArray.map((movie, index) => <p key={index}>{movie.title}</p>)}
							<h1 className='title'>Welcome to MovieInfo</h1>
							<h2 className='subtitle'>Search for your favorite Movies and TV shows</h2>
							<div className='field has-addons columns is-centered is-mobile'>
								<div className='control has-icons-left'>
									<input
										className='input landing-input is-rounded searchbar'
										type='text'
										placeholder='Search for titles'
										onChange={(e) =>
											setSearchBar({ ...searchBar, [e.target.name]: e.target.value })}
										name='search'
										value={searchBar.search}
									/>
									<span className='icon is-left'>
										<i className='fas fa-theater-masks' />
									</span>
								</div>
								<div className='control'>
									<Link to='/' className='button is-primary is-rounded' id='btn' onClick={onClick}>
										Search
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</Fragment>
	);
};

export default Landing;
