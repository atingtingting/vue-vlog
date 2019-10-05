<template>
    <div id="assay">
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
    </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style scoped lang="scss">
.essayBox {
  position: relative;
  width: 95%;
  height: auto;
  margin: 10px auto;
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
</style>
