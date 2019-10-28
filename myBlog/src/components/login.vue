<template>
    <div id="login">
      <div class="inputBox">
        <el-form status-icon :rules="rules" ref="form" :model="form">
          <el-form-item label="用户名：" prop="userName">
            <el-input type="text" v-model="form.userName" placeholder="请输入用户名" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="密码：" prop="password">
            <el-input type="password" v-model="form.password" placeholder="请输入密码" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div class="buttonBox">
          <el-checkbox v-model="checked">记住密码</el-checkbox>
          <br>
          <el-button type="primary" id="loginBut" @click="login('form')" >登录</el-button>
          <br>
          <router-link to='/findPas'>
            <el-button type="text" size="mini">忘记密码</el-button>
          </router-link>
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
    const cPass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        callback()
      }
    }
    var re = /^\w+@[a-z0-9]+\.[a-z]{2,4}$/
    const cName = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入用户名'))
      } else if (!re.test(value)) {
        callback(new Error('请输入正确的用户名'))
      } else {
        callback()
      }
    }
    return {
      form: {
        userName: '',
        password: ''
      },
      checked: false,
      rules: {
        userName: [
          { validator: cName, trigger: 'blur' }
        ],
        password: [
          { validator: cPass, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    login (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$router.push('/home')
        } else {
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss">
.inputBox {
  height: auto;
  width: 600px;
  margin: 0 auto;
  margin-top: 100px;
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
