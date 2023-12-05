import { createStore } from 'vuex'

import products from './modules/products'
import suppliers from './modules/suppliers'

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: { products, suppliers },
})
