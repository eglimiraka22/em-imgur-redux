import axios from 'axios';

const url = 'https://api.imgur.com/3/gallery';
const clientId = '7c09ccc3d7c7fef';

const api = axios.create({
	baseURL: `${url}`,
	headers: {
		Authorization: `Client-ID ${clientId}`,
		"Content-Type": 'application/json'
	},
});

export default api
