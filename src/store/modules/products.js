export default {
  namespaced: true,
  state: {
    productsList: [
      {
        id: 1,
        imgSrc: 'https://chumak.com/data/product/card/cae66aa79e7a486fbad45e31f11547bb_450x450.jpg',
        title: 'Макарони',
        price: 40,
      },
      {
        id: 2,
        imgSrc:
          'https://cdn1.ozonusercontent.com/s3/club-storage/images/article_image_1632x1000/68/f5417e4f-70d5-4c8e-891c-591448bc5cfa.jpeg',
        title: 'Вареники',
        price: 200,
      },
      {
        id: 3,
        imgSrc: 'https://img2.zakaz.ua/upload.version_1.0.1af86bd90b11a101b325d7ea3ed0fa1e.1350x1350.jpeg',
        title: 'Молоко',
        price: 40,
      },
      {
        id: 4,
        imgSrc: 'https://produkty24.com.ua/db_pic/products/original/img_2393360_[1630676872.2597].jpg',
        title: 'Хліб',
        price: 20,
      },
    ],

    inputValue: null,
  },
  getters: {
    productsList: (state) => state.productsList,

    filteredProductsList: (state) =>
      !state.inputValue
        ? state.productsList
        : state.productsList.filter((product) => product.title.toLowerCase().includes(state.inputValue.toLowerCase())),

    inputValue: (state) => state.inputValue,
  },
  mutations: {
    setInputValue(state, newValue) {
      state.inputValue = newValue
    },

    addProduct(state, newProduct) {
      state.productsList.push(newProduct)
    },
  },
  actions: {
    setInputValue({ commit }, newValue) {
      commit('setInputValue', newValue)
    },

    addProduct({ commit }, newProduct) {
      commit('addProduct', { id: new Date().getTime(), ...newProduct })
    },
  },
}
