import React from 'react';
import logo from '../assets/images/logo-bernizan.png'


const Header = () => {
	return (
		<div className='container mx-auto flex justify-around items-center pb-8'>
			<h1 className='text-4xl font-bold'>Mise à conformité de crosse</h1>
			<img className='logo' src={logo} alt="logo bernizan" />
			
		</div>
	);
};

export default Header;