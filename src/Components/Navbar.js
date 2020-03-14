import React, { Fragment } from 'react';

const Navbar = () => (
	<Fragment>
		<nav className='navbar is-dark is-fixed-top' role='navigation' aria-label='main navigation'>
			<div className='navbar-brand'>
				<a className='navbar-item' href='https://bulma.io'>
					<img
						src='https://bulma.io/images/bulma-logo.png'
						width='112'
						height='28'
						alt='Search for your favorite Movies an TV shows'
					/>
				</a>
			</div>
			<div className='navbar-end'>
				<div className='navbar-item'>
					<input className='input' type='text' placeholder='Search for titles' />
				</div>
			</div>
		</nav>
	</Fragment>
);

export default Navbar;
