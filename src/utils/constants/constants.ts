export const ROUTE_PATH = {
	MAIN: '/',
	ISSUELIST: '/issuelist',
	ISSUEDETAIL: '/issuedetail',
};

export const URL_INFO = {
	URL: 'https://api.github.com',
	OWNER: 'facebook',
	REPO: 'react',
};
export const API_PATH = {
	ISSUE_GET: (pageNumber: number) =>
		`/repos/${URL_INFO.OWNER}/${URL_INFO.REPO}/issues?per_page=30&page=${pageNumber}&sort=comments`,
	ISSUEDETAIL_GET: (issueNumber: number) =>
		`/repos/${URL_INFO.OWNER}/${URL_INFO.REPO}/issues/${issueNumber}`,
};
