import { createStore } from 'vuex'

export default createStore({
  state: {
    cart: {
      items: [],
    },
    isAuthenticated: false,
    token: false,
    isLoading: false,
  },
  mutations: {
    initializeStore(state) {
      if (localStorage.getItem('cart')) {
        state.cart = JSON.parse(localStorage.getItem('cart'))
      }
      else {
        localStorage.setItem('cart', JSON.stringify(state.cart))
      }
    },
    addToCart(state, item) {
      const exists = state.cart.items.filter(i => item.product.id === item.product.id)
      if (exists.length) {
        console.log("index.js addToCart exist")

        exists[0].quantity = parseInt(exists[0].quantity) + parseInt(item.quantity)

      }
      else {
        console.log("index.js addToCart not exist", item)
        state.cart.items.push(item)
      }
      localStorage.setItem('cart', JSON.stringify(state.cart))
    }

  },
  actions: {
  },
  modules: {
  }
})
