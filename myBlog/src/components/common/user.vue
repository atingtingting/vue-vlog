<template>
    <div id="user">
        <el-button type="primary" icon="el-icon-user" circle></el-button>
    </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  components: {
  }
}
</script>

<style scoped lang="scss">
#user {
    position: fixed;
    bottom: 20%;
    right: 3%;
    .el-button {
        font-size: 50px;
    }
}
</style>
