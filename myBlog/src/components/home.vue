<template>
  <div id="home">
    <div class="sortBut">
      <el-button type="text" icon="el-icon-s-flag">最新发布</el-button>
      <el-button type="text" icon="el-icon-star-on">最多收藏</el-button>
      <el-button type="text" icon="el-icon-s-comment">最多评论</el-button>
    </div>
    <assay></assay>
    <assay></assay>
    <div class="pageBox">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage3"
      :page-size="100"
      layout="prev, pager, next, jumper"
      :total="1000">
    </el-pagination>
    <router-link to='/editor'>
      <pulish></pulish>
    </router-link>
    <user></user>
  </div>
  </div>
</template>

<script >
import Assay from './common/assay'
import Pulish from './common/publish'
import User from './common/user'
export default {
  name: 'home',
  components: {
    'assay': Assay,
    'pulish': Pulish,
    'user': User
  },
  data () {
    return {
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4
    }
  },
  methods: {
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
    }
  }
}
</script>

<style lang="scss" scoped>
#home {
  margin: 0 auto;
  height: auto;
  width: 75%;
  min-width: 1150px;
}
.sortBut {
  margin: 50px 0 0 30px;
  .el-button {
    margin-right: 30px;
  }
}
.pageBox {
  margin: 60px 0 60px 0;
  text-align: center;
}
</style>
