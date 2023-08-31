import styles from '../../utils/styles/Issue.module.scss';

export default function Issue({ data }: any) {
	return (
		<div className={styles.ad_container}>
			<div>
				<span className={styles.ad_id}>#{data.number}</span>
				<h2 className={styles.ad_title}>{data.title}</h2>
			</div>
			<div className={styles.ad_meta}>
				<span className={styles.ad_user}>{data.user?.login}</span>
				<span className={styles.ad_date}>{data.updated_at}</span>
			</div>
			<div>{data.comments}</div>
		</div>
	);
}
