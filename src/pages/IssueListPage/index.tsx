import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import { issueApi } from '../../api/issueApi';
import Issue from '../../components/IssueList/Issue';
import { AdBanner } from '../../components/IssueList/AdBanner';
import LoadingSpinner from '../../components/common/LoadingSpinner';

export default function IssueListPage() {
	const [issue, setIssue] = useState<any>([]);
	const [pageNumber, setPageNumber] = useState<number>(1);
	const [loading, setLoading] = useState(false);
	const pageEnd = useRef<any>();
	const loadMore = () => {
		setPageNumber(prev => prev + 1);
	};

	useEffect(() => {
		const axiosIssue = async () => {
			const data = await issueApi.getIssue(pageNumber);
			setIssue((prevIssue: any) => [...prevIssue, ...data]);
			setLoading(true);
		};
		axiosIssue();
	}, [pageNumber]);

	useEffect(() => {
		if (loading) {
			const observer = new IntersectionObserver(
				entries => {
					if (entries[0].isIntersecting) {
						loadMore();
					}
				},
				{ threshold: 1 },
			);

			observer.observe(pageEnd.current);
		}
	}, [loading]);

	return (
		<div>
			{issue.map((element: any, index: any) => {
				if ((index + 1) % 5 === 0) {
					return (
						<>
							<Link to={`/issuedetail/${element.number}`}>
								<Issue key={element.id} data={element}></Issue>
							</Link>
							<AdBanner
								data={{
									link: 'https://www.wanted.co.kr',
									src: 'https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100',
									alt: 'wanted 메인로고',
								}}
							/>
						</>
					);
				}
				return (
					<Link to={`/issuedetail/${element.number}`}>
						<Issue key={element.id} data={element}></Issue>
					</Link>
				);
			})}
			<div ref={pageEnd}>
				<LoadingSpinner scroll />
			</div>
		</div>
	);
}
