import React from 'react';

function Layout(props: { children: React.ReactNode }) {
	//TODO: return 부분에 공통 헤더 구현
	return (
		<>
			<header></header>
			{props.children}
		</>
	);
}

export default Layout;
