export const state = () => ({
  wishList: [],
  cart: [],
  wishListLength: 0,
  cartLength: 0
});

export const mutations = {
  setWishList(state, wishList){
    state.wishList = wishList;
  },
  setCart(state, cart){
    state.cart = cart;
  },
  setWishListLength(state, wishList){
    state.wishListLength = wishList;
  },
  setCartLength(state, cart){
    state.cartLength = cart;
  }
}

export const actions = {
  async fetch({commit}){
    let cookieResWishList = this.$cookies.get('armmall_wishlist');
    if(cookieResWishList === undefined){
      commit('setWishList', []);
      commit('setWishListLength', 0);
    }else{
      commit('setWishList', cookieResWishList);
      commit('setWishListLength', cookieResWishList.length);
    }

    let cookieRes = this.$cookies.get('armmall_cart');
    if(cookieRes === undefined){
      commit('setCart', []);
      commit('setCartLength', 0);
    }else{
      commit('setCart', cookieRes);
      commit('setCartLength', cookieRes.length);
    }
  },
  async setWishList({commit}, [id]) {
    let cookieRes = this.$cookies.get('armmall_wishlist');
    if(cookieRes === undefined){
      this.$cookies.set('armmall_wishlist', [id], {
        path: '/',
        maxAge: 10 * 365 * 24 * 60 * 60
      })
      cookieRes = [id]
    }else{
      cookieRes.push(id)
      this.$cookies.set('armmall_wishlist', cookieRes, {
        path: '/',
        maxAge: 10 * 365 * 24 * 60 * 60
      })
    }
    commit('setWishList', cookieRes);
    commit('setWishListLength', cookieRes.length);
  },
  async setCArt({commit}, [id]){
    let cookieRes = this.$cookies.get('armmall_cart');
    if(cookieRes === undefined){
      this.$cookies.set('armmall_cart', [id], {
        path: '/',
        maxAge: 10 * 365 * 24 * 60 * 60
      })
      cookieRes = [id]
    }else{
      cookieRes.push(id)
      this.$cookies.set('armmall_cart', cookieRes, {
        path: '/',
        maxAge: 10 * 365 * 24 * 60 * 60
      })
    }
    commit('setCart', cookieRes);
    commit('setCartLength', cookieRes.length);
  },
}

export const getters = {
  wishList: s => s.wishList,
  cart:  s => s.cart,
  wishListLength: s => s.wishListLength,
  cartLength:  s => s.cartLength,
}
