import axios from 'axios';
const BASE_URL = '';
export const API = axios.create({
	baseURL: `${BASE_URL}/api`,
	headers: {},
});
export const UPLOAD = axios.create({
	baseURL: `${BASE_URL}`,
	headers: {},
});
