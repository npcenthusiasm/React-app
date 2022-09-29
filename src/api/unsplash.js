import axios from "axios"

const CLIENT_ID_KEY = process.env.REACT_APP_UNSPLASH_CLIENT_ID

const unsplashApi = axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: `Client-ID ${CLIENT_ID_KEY}`,
  }
})

const unsplashApiSearch = async (term) => {
  return unsplashApi.get('/search/photos', {
    params: {
      query: term
    }
  })

}

export default unsplashApiSearch