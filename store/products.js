export const state = () => ({
  products: [],
  newProducts: [],
  bestProducts: [],
  salesProducts: [],
  product: [],
  productByBrand: []
});

export const mutations = {
  setProducts(state, products){
    state.products = products;
  },
  setProduct(state, product){
    state.product = product;
  },
  setNewProducts(state, newProducts){
    state.newProducts = newProducts;
  },
  setBestProducts(state, bestProducts){
    state.bestProducts = bestProducts;
  },
  setSalesProducts(state, salesProducts){
    state.salesProducts = salesProducts;
  },
  setProductByBrand(state, productByBrand){
    state.productByBrand = productByBrand;
  }
}

export const actions = {
  async fetch({commit}) {
    const products = await this.$axios.$get('http://apidavmar.neoteric-software.com/api/product/get');
    commit('setProducts', products);
  },
  async getProduct({commit}, [id]){
    const product = await this.$axios.$get(`http://apidavmar.neoteric-software.com/api/product/get/${id}`);
    commit('setProduct', product)
  },
  async getProductByBrandId({commit}, [id, page]){
    const products = await this.$axios.$get(`http://apidavmar.neoteric-software.com/api/product/getByBrandId/${id}?page=${page}`);
    commit('setProductByBrand', products)
  },
  async filterAsType({commit}, [type]){
    const filterAsTypeProduct = await this.$axios.$get(`http://apidavmar.neoteric-software.com/api/product/fiterAsType/${type}`);
    if(type === 'new') {
      commit('setNewProducts', filterAsTypeProduct)
    }else if(type === 'best') {
      commit('setBestProducts', filterAsTypeProduct)
    }else if(type === 'sales'){
      commit('setSalesProducts', filterAsTypeProduct)
    }
  },
  async updateProduct({commit}, [id, name, category, price, selectedImages, selectedColors,  selectedSizes, selectedBrand, sex, isNew, discountType, discount, description]){
    await this.$axios.$put(`http://apidavmar.neoteric-software.com/api/product/update/${id}`, {'name': name, 'category': category, 'price': price, 'selectedImages': selectedImages, 'selectedColors': selectedColors, 'sizes': selectedSizes, 'selectedBrand': selectedBrand, 'sex': sex, 'isNew': isNew, 'discountType': discountType, 'discount': discount, 'description': description});
  },
  async delete({commit}, [id]){
    await this.$axios.$delete(`http://apidavmar.neoteric-software.com/api/product/delete/${id}`);
  },
  async addProduct(ctx, [name, category, price, selectedImages, selectedColors,  selectedSizes, selectedBrand, sex, isNew, discountType, discount, description])  {
    await this.$axios.$post('http://apidavmar.neoteric-software.com/api/product/add', {'name': name, 'category': category, 'price': price, 'selectedImages': selectedImages, 'selectedColors': selectedColors, 'sizes': selectedSizes, 'selectedBrand': selectedBrand, 'sex': sex, 'isNew': isNew, 'discountType': discountType, 'discount': discount, 'description': description});
  }
}

export const getters = {
  products: s => s.products,
  product:  s => s.product,
  newProducts: s => s.newProducts,
  bestProducts: s => s.bestProducts,
  salesProducts: s => s.salesProducts,
  productByBrand: s => s.productByBrand,
}
