import React from 'react';
import { Outlet } from 'react-router-dom';

function Layout(props: { children: React.ReactNode }) {
	return (
		<>
			<header>
				<h1>Organization Name / Repository Name</h1>
			</header>
			{props.children}
			<Outlet />
		</>
	);
}

export default Layout;
