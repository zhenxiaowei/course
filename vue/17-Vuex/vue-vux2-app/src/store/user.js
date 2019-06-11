import {INCREASE, DECREASE} from './mutations-types'

const user = {
  //全局状态
  state: {
    name: 'zxw',
    count:"vv"
  },
  getters: {
    myname (state) {
      return '123' + state.name
    }
  },
  mutations: {},
  actions: {}
}
export default user
