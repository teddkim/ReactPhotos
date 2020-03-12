import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID fGbTHGK_gBxvoXKN9kU34LFFkT01p2i8SgJacOgH96Y'
  }
})
