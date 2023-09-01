import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import { ROUTE_PATH } from './utils/constants/constants';

import Main from './pages/MainPage';
import IssueList from './pages/IssueListPage';
import IssueDetail from './pages/IssueDetailPage';
import NotFound from './pages/NotFoundPage';
import Layout from './components/Layout/Layout';

function App() {
	return (
		<Suspense fallback={<div>Loading</div>}>
			<Routes>
				<Route path={ROUTE_PATH.MAIN} element={<Main />} />
				<Route element={<Layout />}>
					<Route path={ROUTE_PATH.ISSUELIST} element={<IssueList />} />
					<Route path={`${ROUTE_PATH.ISSUEDETAIL}/:id`} element={<IssueDetail />} />
				</Route>
				<Route path="*" element={<NotFound />} />
			</Routes>
		</Suspense>
	);
}

export default App;
