import axios from "axios";

const api = axios.create({
  baseURL: 'https://api.thecatapi.com/v1',
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': '0ff2b11e-e949-4619-aa46-e6ea2514d9bd',
  },
})

export const catsApi = {
  getCats() {
    return api.get('/images/search?limit=15&order=Rand')
  },
}