<template>
    <div id="userData">
      <el-tabs v-model="activeName" >
        <el-tab-pane label="修改资料" name="setData">
          <el-form class="inputBox">
              <el-form-item label="个人简介：" prop="userDescription">
                <el-input type="textarea" v-model="userDescription" placeholder="描述..."></el-input>
              </el-form-item>
          </el-form>
          <el-button type="primary">确认修改</el-button>
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

</style>
