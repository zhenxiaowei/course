import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    products: [
      {name: "马云1", price: 200},
      {name: "马云2", price: 300},
      {name: "马云3", price: 400},
      {name: "马云4", price: 500}
    ]
  },
  getters:{//getters的使用
    saleProducts:(state)=>{
      var saleProducts = state.products.map(product => {//map遍历
        return {
          name: "**" + product.name + "**",
          price: product.price / 2
        }
      });
      return saleProducts
    }

  },
  mutations:{//更改 Vuex 的 store 中的状态的唯一方法是提交 mutation。
    reducePrice:(state,payload)=>{
      state.products.forEach(product => {
        product.price -= payload
      })
    }
  },
  actions:{
    reducePrice:(context,payload)=>{
      context.commit('reducePrice',payload)
    }
  }
});
export default store









