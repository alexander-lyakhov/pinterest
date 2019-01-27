import axios from 'axios';

axios.defaults.baseURL = 'https://api.pinterest.com/v1/';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

axios.interceptors.response.use(
	res => res,
	err => Promise.reject(err)
)

const AUTH_URL = 'https://api.pinterest.com/oauth/';
const appID = '5006601696198022940';
const appSecret = '0090984c713e472d75ee28deb9f7d940e010fe54b3ef77e611cbbef7781dcf0b';

export const getPins = (token) =>
	axios.get('me/pins/', {
		params: {
			access_token: token,
			fields: 'image',
			limit: 24
		}
	})

export const getAccessToken = (code) =>
	axios.post(`oauth/token?grant_type=authorization_code&client_id=${appID}&client_secret=${appSecret}&code=${code}`)