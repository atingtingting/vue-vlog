<template>
  <div id="home">
    <div class="sortBut">
      <el-button type="text" icon="el-icon-s-flag">最新发布</el-button>
      <el-button type="text" icon="el-icon-star-on">最多收藏</el-button>
      <el-button type="text" icon="el-icon-s-comment">最多评论</el-button>
    </div>
    <div class="essayBox">
      <h2>标题标题标题</h2>
      <p class="time">最新发布时间：xxxxxxxxxx</p>
      <el-image></el-image>
      <el-image></el-image>
      <el-image></el-image>
      <p>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</p>
      <p>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</p>
      <p>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</p>
      <div class="userBox">
        <el-avatar size="small">匿</el-avatar>
        <div>匿名</div>
      </div>
      <div class="col-com">
        <el-button type="text" icon="el-icon-collection-tag"></el-button>
        <el-button type="text" icon="el-icon-chat-dot-square"></el-button>
      </div>
    </div>
    <div class="pageBox">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage3"
      :page-size="100"
      layout="prev, pager, next, jumper"
      :total="1000">
    </el-pagination>
  </div>
  </div>
</template>

<script >
export default {
  name: 'home',
  components: {
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
.essayBox {
  position: relative;
  width: 95%;
  height: auto;
  margin: 0 auto;
  padding: 1px 0 30px 20px;
  box-sizing: border-box;
  background: #fcfcfc;
  color: #335577;
  .time {
    color: #858585;
    font-size: 10px;
  }
  p {
    margin: 5px 0 5px 0;
  }
}
.el-image {
  width: 200px;
  height: 160px;
}
.userBox {
  position: relative;
  margin: 30px 0 0 0;
  div {
    position: absolute;
    top: 4px;
    left: 35px;
    font-size: 15px;
  }
}
.col-com {
  position: absolute;
  bottom: 10px;
  right: 20px;
  .el-button {
    font-size: 25px;
    margin-left: 20px;
  }
}
.pageBox {
  margin: 60px 0 0 0;
  text-align: center;
}
</style>
