<template>
    <div id="userData">
      <el-tabs v-model="activeName" >
        <el-tab-pane label="修改资料" name="setData">
          <div class="desBox">
            <el-form >
              <el-form-item label="个人简介：" prop="userDescription">
                <el-input type="textarea" v-model="userDescription" placeholder="描述..." maxlength="18"
  show-word-limit></el-input>
              </el-form-item>
            </el-form>
            <el-button type="primary">确认修改</el-button>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
</template>

<script>
export default {
  data () {
    return {
      activeName: 'setData',
      userDescription: ''
    }
  },
  components: {
  }
}
</script>

<style scoped lang="scss">
.el-form {
  margin-bottom: 30px;
}
.desBox {
  margin: 20px 20px 30px 20px;
}
</style>
