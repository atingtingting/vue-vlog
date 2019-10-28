<template>
    <div id="reg">
        <div class="inputBox">
          <el-form status-icon :rules="rules" ref="form" :model="form">
            <el-form-item label="用户名：" prop="userName">
              <el-input type="text" v-model="form.userName" placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item label="密码：" prop="password1">
              <el-input type="password" v-model="form.password1" placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-form-item label="再次输入密码：" prop="password2">
              <el-input type="password" v-model="form.password2" placeholder="请再次输入密码"></el-input>
            </el-form-item>
          </el-form>
          <div class="buttonBox">
            <el-checkbox v-model="checked">我无条件同意网页设计者的所有条例</el-checkbox>
            <br>
            <el-button type="primary" id="loginBut" @click="reg('form')">注册</el-button>
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
    const cPass1 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else if (value.length < 8 || value.length > 16) {
        callback(new Error('密码长度不能少于八位或者大于十六位'))
      } else {
        callback()
      }
    }
    const cPass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.form.password1) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    var re = /^\w+@[a-z0-9]+\.[a-z]{2,4}$/
    var cName = (rule, value, callback) => {
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
        password1: '',
        password2: ''
      },
      checked: false,
      rules: {
        userName: [
          { validator: cName, trigger: 'blur' }
        ],
        password1: [
          { validator: cPass1, trigger: 'blur' }
        ],
        password2: [
          { validator: cPass2, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    reg (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid && this.checked) {
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

</style>
