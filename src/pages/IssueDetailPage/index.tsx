import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

import { issueApi } from '../../api/issueApi';
import Issue from '../../components/IssueList/Issue';
import styles from '../../utils/styles/IssueDetail.module.scss';

export default function IssueDetail() {
	const { id } = useParams();
	const [issue, setIssue] = useState<any>([]);

	useEffect(() => {
		const axiosIssue = async () => {
			const data = await issueApi.getIssueDetail(Number(id));
			setIssue(data);
		};
		axiosIssue();
	}, [id]);

	return (
		<>
			<div className={styles.external_link_container}>
				<img
					className={styles.profile_image}
					src={issue.user?.avatar_url}
					alt="프로필 이미지"
				></img>
				<Issue data={issue}></Issue>
			</div>
			<div>
				<ReactMarkdown>{issue.body}</ReactMarkdown>
			</div>
		</>
	);
}
