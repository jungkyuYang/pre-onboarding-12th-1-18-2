import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import { ROUTE_PATH } from './utils/constants/constants';

import LoadingSpinner from './components/common/LoadingSpinner';
const Main = lazy(() => import('./pages/MainPage'));
const IssueList = lazy(() => import('./pages/IssueListPage'));
const IssueDetail = lazy(() => import('./pages/IssueDetailPage'));
const NotFound = lazy(() => import('./pages/NotFoundPage'));
const Layout = lazy(() => import('./components/Layout/Layout'));

function App() {
	return (
		<Suspense fallback={<LoadingSpinner />}>
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
