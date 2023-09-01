import axiosInstance from './axiosInstance';
import { API_PATH } from '../utils/constants/constants';

export const issueApi = {
	getIssue: async (pageNumber: number) => {
		const response = await axiosInstance.get(API_PATH.ISSUE_GET(pageNumber));
		return response.data;
	},
	getIssueDetail: async (issueNumber: number) => {
		const response = await axiosInstance.get(API_PATH.ISSUEDETAIL_GET(issueNumber));
		return response.data;
	},
};
