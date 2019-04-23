import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
const store = new Vuex.Store({
  //全局状态
  state: {
    count: 0
  },
  getters: {
    myCount(state){
     // console.log(state.count);
      return 'zzzz'+ state.count
    }
  },
  mutations: {
    aaa(state,n) {
      state.count += n
    },
    bbb(state,n) {
      state.count -= n
    }
  },
  actions: {
    async myaaa(context,obj) {
      //myaaa执行后自动提交commit，执行mutations中的aaa方法，并传递参数n,改变state中的count的值
      console.log(obj);
      context.commit('aaa',2)
      const data=[1,2,3,4]//await axios.get();
      return data;
    },
    mybbb(context) {
      context.commit('bbb',1)
    }
  }
})
export default store
