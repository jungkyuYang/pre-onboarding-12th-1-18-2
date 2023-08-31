import axiosInstance from './axiosInstance';
import { API_ENDPOINTS } from '../utils/constants/ApiEndPoint';

export const issueApi = {
	getIssue: async (pageNumber: number) => {
		const response = await axiosInstance.get(API_ENDPOINTS.ISSUE_GET(pageNumber));
		return response.data;
	},
	getIssueDetail: async (issueNumber: number) => {
		const response = await axiosInstance.get(API_ENDPOINTS.ISSUEDETAIL_GET(issueNumber));
		return response.data;
	},
};
