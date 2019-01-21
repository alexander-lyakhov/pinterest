import axios from 'axios';

axios.defaults.baseURL = 'https://api.pinterest.com/v1/';

let AUTH_URL = 'https://api.pinterest.com/oauth/'
let access_token = 'Qxe8XRY_LX93HNcFXvhWeI3AApFewW3ccBXHAaiQDAAAChyRXsOeLxgaW8AAAAA';

export const getPins = () =>
  axios.get('me/pins/', {
    params: {
      access_token,
      fields: 'image',
      limit: 24
    }
  })

export const getAuthorizationCode = () => {
  console.log('api => getAuthorizationCode')

  return axios.get(
    'https://api.pinterest.com/oauth/?response_type=code&client_id=5006601696198022940&scope=read_public&redirect_uri=https://localhost:8080'
    /*
    params: {
      response_type: 'code',
      state: '768uyFys',
      redirect_uri: 'localhost',
      client_id: '5006601696198022940',
      scope: 'read_public,write_public'
    }
    */
  )
}
