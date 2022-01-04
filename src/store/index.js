import {
  createStore
} from 'vuex'

export default createStore({
  /**
   *
   */
  state: {
    nick: 'china', // 昵称
    age: 18, // 年龄
  },
  /**
   *
   */
  getters: {
    /**
     * 昵称
     */
    nick: (state) => {
      return state.nick;
    },
    /**
     * 年龄
     */
    age: (state) => {
      return state.age;
    },
  },
  /**
   *
   */
  mutations: {
    /**
     * 设置年龄
     */
    setAge(state, payload) {
      console.log(state)
      console.log(payload)
      state.age = payload.age
    },
  },
  /**
   *
   */
  actions: {
    /**
     * 设置年龄
     */
    setAge(context, payload) {
      console.log(context)
      console.log(payload)
      context.commit('setAge', {
        age: payload.age
      })
    },
  },
  /**
   *
   */
  modules: {

  }
})
