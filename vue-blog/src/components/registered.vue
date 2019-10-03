<template>
    <div id="reg">
        <div class="inputBox">
          <el-form>
            用户名：
            <el-input type="text" v-model="userName" placeholder="请输入用户名"></el-input>
            设置密码：
            <el-input type="password" v-model="password" placeholder="请输入密码"></el-input>
            再次确认密码：
            <el-input type="password" v-model="password" placeholder="请再次输入密码"></el-input>
          </el-form>
          <div class="buttonBox">
            <el-checkbox v-model="checked">我无条件同意网页设计者的所有条例</el-checkbox>
            <br>
            <el-button type="primary" id="loginBut" >注册</el-button>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'reg',
  components: {
  },
  data () {
    return {
      checked: false
    }
  },
  methods: {
  }
}
</script>

<style lang="scss">

</style>
