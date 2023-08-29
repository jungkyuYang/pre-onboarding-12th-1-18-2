import React from 'react';
import { Routes, Route } from 'react-router-dom';

import ROUTES from './utils/constants/Routes';

import Main from './pages/Main/Main';
import IssueList from './pages/IssueList/IssueList';
import IssueDetail from './pages/IssueDetail/IssueDetail';
import NotFound from './pages/NotFound/NotFound';
import Layout from './components/Layout/Layout';

function App() {
	return (
		<Layout>
			<Routes>
				<Route path={ROUTES.MAIN} element={<Main />} />
				<Route path={ROUTES.ISSUELIST} element={<IssueList />} />
				<Route path={ROUTES.ISSUEDETAIL} element={<IssueDetail />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</Layout>
	);
}

export default App;
