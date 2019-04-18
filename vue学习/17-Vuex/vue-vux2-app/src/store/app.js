import {INCREASE, DECREASE} from './mutations-types'

const app = {
  //全局状态
  state: {
    count: 0,
    name:"www"
  },
  getters: {
    myCount (state) {
      return 'aaa' + state.count
    }
  },
  mutations: {
    [INCREASE] (state, n = 1) {
      state.count += n
    },
    [DECREASE] (state, n = 1) {
      state.count -= n
    }
  },
  actions: {
    async myIncrease (context, obj) {
      context.commit(INCREASE, 1)
      console.log(obj)
      const data = [1, 2, 3, 4]//await axios.get()
      return data
    },
    myDecrease (context) {
      context.commit(DECREASE, 1)
    }
  }
}
export default app
