<template>
  <div id="App">
    <v-header></v-header>
    <router-view></router-view>
  </div>
</template>
<script>
import Header from './components/common/header'
export default {
  name: 'App',
  components: {
    'v-header': Header
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>
