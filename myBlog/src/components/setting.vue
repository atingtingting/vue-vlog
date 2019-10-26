<template>
    <div id="setting">
      <el-tabs v-model="activeName" >
        <el-tab-pane label="修改密码" name="setting">
          <el-form class="inputBox">
            <el-form-item label="用户名：" prop="name">
                <el-input type="name" v-model="name" placeholder="请输入用户名"></el-input>
              </el-form-item>
              <el-form-item label="原密码：" prop="oldPas">
                <el-input type="password" v-model="oldPas" placeholder="请输入原密码"></el-input>
              </el-form-item>
              <el-form-item label="新密码：" prop="newPas">
                <el-input type="password" v-model="newPas" placeholder="请输入新密码"></el-input>
              </el-form-item>
            </el-form>
            <div class="buttonBox">
              <el-button type="primary">修改密码</el-button>
            </div>
        </el-tab-pane>
      </el-tabs>
    </div>
</template>

<script>
export default {
  data () {
    return {
      activeName: 'setting',
      name: '',
      oldPas: '',
      newPas: ''
    }
  },
  components: {
  }
}
</script>

<style scoped lang="scss">
.inputBox {
  height: auto;
  width: 600px;
  margin: 0 auto;
  margin-top: 50px;
  color: black;
  .el-input {
    margin: 15px 0 15px 0;
  }
}
.buttonBox {
  text-align: center;
}
</style>
