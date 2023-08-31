import React from 'react';
import { Routes, Route } from 'react-router-dom';

import ROUTES from './utils/constants/Routes';

import Main from './pages/MainPage';
import IssueList from './pages/IssueListPage';
import IssueDetail from './pages/IssueDetailPage';
import NotFound from './pages/NotFoundPage';
import Layout from './components/Layout/Layout';

function App() {
	return (
		<Layout>
			<Routes>
				<Route path={ROUTES.MAIN} element={<Main />} />
				<Route path={ROUTES.ISSUELIST} element={<IssueList />} />
				<Route path={`${ROUTES.ISSUEDETAIL}/:id`} element={<IssueDetail />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</Layout>
	);
}

export default App;
