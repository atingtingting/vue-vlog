<template>
    <div id="header">
        <el-avatar class="userHead">user</el-avatar>
        <div class="loginMsg">{{msg}}</div>
        <div class="searchBox">
          <el-input size="small" placeholder="输入搜索内容" v-model="input" prefix-icon="el-icon-search"></el-input>
          <el-button type="primary" size="mini" @click="handleIconClick" class="searchBut">搜索</el-button>
        </div>
        <div class="buts">
          <router-link to='/login'>
            <el-button type="text">登录</el-button>
          </router-link>
          <router-link to='/reg'>
            <el-button type="text">注册</el-button>
          </router-link>
        </div>
    </div>
</template>

<script>
export default {
  name: 'v-header',
  data () {
    return {
      msg: '未登录',
      input: ''
    }
  },
  methods: {
    handleIconClick () {
      console.log(this.input)
    }
  }
}
</script>

<style scoped lang="scss">
#header {
  position: relative;
  height: 50px;
  // width: 100%;
  min-width: 1150px;
  color: #58B7FF;
  background: #e8f3ff;
}
.userHead {
  position: absolute;
  top: 50%;
  margin-top: -20px;
  margin-left: 3%;
  border-radius: 50%;
}
.loginMsg {
  display: inline-block;
  margin-left: 7%;
  line-height: 50px;
  width: auto;
}
.searchBox {
  display: inline-block;
  margin-left: 50%;
}
.searchBut {
  height: auto;
}
.el-input {
  width: 200px;
}
.buts {
  display: inline-block;
  margin-left: 30px;
  .el-button {
    margin-left: 30px;
  }
}
</style>
