<template>
    <div id="userHome">
        <el-tabs v-model="activeName">
          <el-tab-pane label="已发表博客" name="first">
            <assay></assay>
            <assay></assay>
          </el-tab-pane>
          <el-tab-pane label="收藏夹" name="second">
            <el-tabs tab-position="left" class="colTab">
              <el-tab-pane label="收藏夹1">1</el-tab-pane>
              <el-tab-pane label="收藏夹2">2</el-tab-pane>
              <el-tab-pane label="收藏夹3">3</el-tab-pane>
            </el-tabs>
          </el-tab-pane>
          <el-tab-pane label="收到的评论" name="third">
            <comment></comment>
            <comment></comment>
          </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
import Assay from './common/assay'
import Comment from './common/comment'
export default {
  data () {
    return {
      activeName: 'second'
    }
  },
  components: {
    'assay': Assay,
    'comment': Comment
  }
}
</script>

<style lang="scss">
.el-tabs {
  width: 75%;
  margin: 0 auto;
  .el-tabs__item {
    font-size: 20px;
  }
}
.colTab {
  margin: 20px 0 0 0 ;
  .el-tabs__item {
    font-size: 15px;
  }
}
</style>
