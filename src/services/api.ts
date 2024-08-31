import axios from 'axios';
import type { AxiosInstance } from 'axios';

const apiClient: AxiosInstance = axios.create({
	baseURL: "https://api.themoviedb.org/3/movie/",
	headers: {
		'Content-Type': 'application/json',
	  },
})
