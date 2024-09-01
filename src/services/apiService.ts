import { ApiResponse } from '@/types';
import axios from 'axios';
import type { AxiosInstance } from 'axios';

const apiBearer = import.meta.env.VITE_APP_API_BEARER;
const apiClient: AxiosInstance = axios.create({
	baseURL: "https://api.themoviedb.org/3/movie/",
	headers: {
		'Content-Type': 'application/json',
		'Authorization': 'Bearer '+ apiBearer
	  },
})

export default {
	getData(endpoint: string) {
		return apiClient.get(endpoint);
	}
}