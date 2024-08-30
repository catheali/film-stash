import axios, {AxiosInstance} from "axios";

const api: AxiosInstance = axios.create({
	baseURL: "https://api.themoviedb.org/3/movie/",
})