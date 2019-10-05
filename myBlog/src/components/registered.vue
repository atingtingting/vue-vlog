<template>
    <div id="reg">
        <div class="inputBox">
          <el-form>
            <el-form-item label="用户名：" prop="userName">
              <el-input type="text" v-model="userName" placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item label="密码：" prop="password1">
              <el-input type="password" v-model="password1" placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-form-item label="再次输入密码：" prop="password2">
              <el-input type="password" v-model="password2" placeholder="请再次输入密码"></el-input>
            </el-form-item>
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
      userName: '',
      password1: '',
      password2: '',
      checked: false
    }
  },
  methods: {
  }
}
</script>

<style lang="scss">

</style>
