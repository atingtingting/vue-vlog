<template>
    <div id="login">
        <div class="inputBox">
          <el-form>
            用户名：
            <el-input type="text" v-model="userName" placeholder="请输入用户名"></el-input>
            密码：
            <el-input type="password" v-model="password" placeholder="请输入密码"></el-input>
          </el-form>
          <div class="buttonBox">
            <el-checkbox v-model="checked">记住密码</el-checkbox>
            <br>
            <el-button type="primary" id="loginBut" @click="aaa()">登录</el-button>
            <br>
            <el-button type="text" size="mini">忘记密码</el-button>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'login',
  components: {
  },
  data () {
    return {
      userName: '',
      password: '',
      checked: false
    }
  },
  methods: {
    aaa () {
      console.log(this.userName)
      console.log(this.password)
    }
  }
}
</script>

<style lang="scss">
.inputBox {
  height: auto;
  width: 600px;
  margin: 0 auto;
  margin-top: 150px;
  color: black;
  .el-input {
    margin: 15px 0 15px 0;
  }
}
.buttonBox {
  text-align: center;
  .el-checkbox {
    margin: 10px 0 15px 0;
  }
}
#loginBut {
  width: 200px;
}
</style>
