import axios from 'axios';

import { BASE_URL } from '../utils/constants/ApiEndPoint';

const axiosInstance = axios.create({ baseURL: BASE_URL });

axiosInstance.interceptors.request.use(
	config => {
		const token = process.env.REACT_APP_GITHUB_TOKEN;
		if (token) {
			config.headers.Authorization = token;
		}
		return config;
	},
	error => Promise.reject(error),
);

axiosInstance.interceptors.response.use(
	response => {
		if (response.status === 404) {
			console.log('404 페이지');
		}
		return response;
	},
	async error => {
		if (error.response?.status === 401) {
			const response = await axios.request(error.config);
			return response;
		}
		return Promise.reject(error);
	},
);

export default axiosInstance;
