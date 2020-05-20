export const state = () => ({
  brands: [],
  brand: []
});

export const mutations = {
  setBrands(state, brands){
    state.brands = brands;
  },
  setBrand(state, brand){
    state.brand = brand;
  }
}

export const actions = {
  async fetch({commit}) {
    const brands = await this.$axios.$get('http://apidavmar.neoteric-software.com/api/brand/get');
    commit('setBrands', brands);
  },
  async getBrand({commit}, [id]){
    const brand = await this.$axios.$get(`http://apidavmar.neoteric-software.com/api/brand/get/${id}`);
    commit('setBrand', brand)
  },
  async updateBrand({commit}, [id, name, order, image, color]){
    const brand = await this.$axios.$put(`http://apidavmar.neoteric-software.com/api/brand/update/${id}`, {'name': name, 'order': order, 'image': image, 'color': color});
  },
  async delete({commit}, [id]){
    const brand = await this.$axios.$delete(`http://apidavmar.neoteric-software.com/api/brand/delete/${id}`);
  },
  async addBrand(ctx, [name, order, image, color]){
   await this.$axios.$post('http://apidavmar.neoteric-software.com/api/brand/add', {'name': name, 'order': order, 'image': image, 'color': color});
  }
}

export const getters = {
    brands: s => s.brands,
    brand:  s => s.brand
}
