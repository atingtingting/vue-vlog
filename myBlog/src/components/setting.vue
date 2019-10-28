<template>
    <div id="setting">
      <el-tabs v-model="activeName" >
        <el-tab-pane label="修改密码" name="setting">
          <changePas></changePas>
        </el-tab-pane>
      </el-tabs>
    </div>
</template>

<script>
import ChangePas from './common/changePas'
export default {
  components: {
    'changePas': ChangePas
  },
  data () {
    return {
      activeName: 'setting'
    }
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
