<template>
  <div id="App">
    <v-header></v-header>
    <router-view></router-view>
    <v-footer></v-footer>
  </div>
</template>
<script>
import Header from './components/common/header'
import Footer from './components/common/footer'
export default {
  name: 'App',
  components: {
    'v-header': Header,
    'v-footer': Footer
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>
