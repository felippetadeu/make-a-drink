import axios from 'axios';

const http = axios.create({
  baseURL: 'https://www.thecocktaildb.com/api'
})

const service = {
  searchByName: async (drinkName: string) => {
    return await http.get(`/json/v1/1/search.php?s=${drinkName}`)
  },
  searchByIngredient: async (ingredientName: string) => {
    return await http.get(`/json/v1/1/search.php?i=${ingredientName}`)
  },
  listCategories: async () => {
    return await http.get(`/json/v1/1/list.php?c=list`)
  },
  listByCategory: async (category: string) => {
    return await http.get(`/json/v1/1/filter.php?c=${category}`)
  },
  getRandomDrink: async () => {
    return await http.get(`/json/v1/1/random.php`)
  }
}

export default service;