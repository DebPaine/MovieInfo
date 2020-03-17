import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';

const Landing = () => {
	const [ searchBar, setSearchBar ] = useState('');

	const onClick = (e) => {
		const btn = document.querySelector('#btn');
		btn.className = 'button is-primary is-rounded is-loading';
	};

	return (
		<Fragment>
			<section className='hero is-fullheight font1'>
				<div className='hero-body'>
					<div className='container'>
						<div className='herotext'>
							<h1 className='title'>Welcome to MovieInfo</h1>
							<h2 className='subtitle'>Search for your favorite Movies and TV shows</h2>
							<div className='field has-addons columns is-centered is-mobile'>
								<div className='control has-icons-left'>
									<input
										className='input landing-input is-rounded searchbar'
										type='text'
										placeholder='Search for titles'
										onChange={(e) => setSearchBar(e.target.value)}
										value={searchBar}
									/>
									<span className='icon is-left'>
										<i className='fas fa-theater-masks' />
									</span>
								</div>
								<div className='control'>
									<Link to='' className='button is-primary is-rounded' id='btn' onClick={onClick}>
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
