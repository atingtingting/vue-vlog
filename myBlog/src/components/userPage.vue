<template>
    <div id="userPage">
        <userHead></userHead>
        <router-view></router-view>
    </div>
</template>

<script>
import UserHead from './common/userHead'
export default {
  data () {
    return {
    }
  },
  methods: {
  },
  components: {
    'userHead': UserHead
  }
}
</script>

<style scoped lang="scss">

</style>
