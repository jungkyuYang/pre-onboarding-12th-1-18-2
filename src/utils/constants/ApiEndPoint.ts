export const BASE_URL = 'https://api.github.com';
const BASE_OWNER = 'facebook';
const BASE_REPO = 'react';

export const API_ENDPOINTS = {
	ISSUE_GET: (pageNumber: number) =>
		`/repos/${BASE_OWNER}/${BASE_REPO}/issues?per_page=30&page=${pageNumber}&sort=comments`,
	ISSUEDETAIL_GET: (issueNumber: number) =>
		`/repos/${BASE_OWNER}/${BASE_REPO}/issues/${issueNumber}`,
};
