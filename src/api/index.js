import axios from 'axios';

axios.defaults.baseURL = 'https://api.pinterest.com/v1/';

let access_token = 'AjhqQG7ZUM0g1-hygENl5tD8_p9gFXIOZ4lFmCVFewW3ccBXHAaiQDAAAChyRXsOeLxgaW8AAAAA';

export const getPins = () =>
	axios.get('me/pins/', {
		params: {
			access_token,
			fields: 'image',
			limit: 24
		}
	})
