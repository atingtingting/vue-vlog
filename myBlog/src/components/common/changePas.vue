<template>
    <div id="changePas">
      <div class="inputBox">
        <el-form status-icon  ref="form" :model="form" :rules="rules">
          <el-form-item label="用户名：" prop="userName">
            <el-input type="text" v-model="form.userName" placeholder="请输入用户名" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="验证码：" prop="code">
            <el-input type="text" v-model="form.code" placeholder="请输入验证码" autocomplete="off"></el-input>
            <el-button @click="recCode()" :disabled = "openIsDisabled">{{ codeText }}</el-button>
          </el-form-item>
          <el-form-item label="新密码：" prop="password">
            <el-input type="password" v-model="form.password" placeholder="请输入新密码" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div class="confirmBut" >
          <el-button type="primary" @click="comfirmChange('form')">确认修改</el-button>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data () {
    const cPass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else if (value.length < 8 || value.length > 16) {
        callback(new Error('密码长度不能少于八位或者大于十六位'))
      } else {
        callback()
      }
    }
    const cCode = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入验证码'))
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
        code: '',
        password: ''
      },
      openIsDisabled: false,
      codeText: '发送验证码',
      time: 10,
      rules: {
        userName: [
          { validator: cName, trigger: 'blur' }
        ],
        code: [
          { validator: cCode, trigger: 'blur' }
        ],
        password: [
          { validator: cPass, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    recCode () {
      this.openIsDisabled = true
      this.sendCode()
    },
    sendCode () {
      this.time--
      this.codeText = this.time + 's后重发'
      if (this.time > 0) {
        setTimeout(this.sendCode, 1000)
      } else {
        this.codeText = '发送验证码'
        this.openIsDisabled = false
        this.time = 10
      }
    },
    comfirmChange (formName) {
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
.confirmBut {
  text-align: center;
  .el-button {
    width: 200px;
  }
}
</style>
