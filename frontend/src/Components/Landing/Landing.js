import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';

const Landing = () => (
	<Fragment>
		<section className='hero is-fullheight font1'>
			<div className='hero-body'>
				<div className='container'>
					<div className='herotext'>
						<h1 className='title'>Welcome to MovieInfo</h1>
						<h2 className='subtitle'>Search for your favorite Movies and TV shows</h2>
						<div className='field has-addons columns is-centered is-mobile'>
							<div className='control'>
								<input className='input landing-input' type='text' placeholder='Search for titles' />
							</div>
							<div className='control'>
								<Link to='' className='button is-primary'>
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

export default Landing;
