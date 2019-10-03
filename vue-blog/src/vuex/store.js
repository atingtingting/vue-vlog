import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

var state = {
  count: 0,
  list: []
}

export default new Vuex.Store({
  state
})
