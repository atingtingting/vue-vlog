<template>
    <div id="assay">
      <el-avatar class="userAvatar" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
      <div class="contentBox">
        <div class="writerName">123</div>
        <div class="triangle triangle2"></div>
        <div class="triangle triangle1"></div>
        <h1>标题标题标题</h1>
        <p class="time">最新发布时间：xxxxxxxxxx</p>
        <el-image></el-image>
        <el-image></el-image>
        <el-image></el-image>
        <p>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</p>
        <p>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</p>
        <el-button type="text" class="detail" icon="el-icon-more"></el-button>
        <div class="col-com">
            <el-button type="text" icon="el-icon-collection-tag">101</el-button>
            <el-button type="text" icon="el-icon-chat-dot-square">101</el-button>
        </div>
        <div class="date">
          <div class="year">2019年</div>
          <div class="day">10月01日</div>
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
.contentBox {
  position: relative;
  width: 80%;
  height: auto;
  margin: 10px 0 30px 150px;
  padding: 0 0 40px 30px;
  box-sizing: border-box;
  border: 1px solid #58B7FF;
  box-shadow: 1px 1px 0 #58B7FF;
  color: #335577;
  .time {
    color: #858585;
    font-size: 10px;
  }
  p {
    margin: 5px 0 5px 0;
  }
  h1 {
    margin-top: 0;
  }
}
.el-image {
  width: 200px;
  height: 160px;
}
.col-com {
  position: absolute;
  top: 10px;
  right: 20px;
  .el-button {
    font-size: 18px;
    margin-left: 20px;
  }
}
.userAvatar {
  height: 100px;
  width: 100px;
  float: left;
}
.triangle {
  position: absolute;
  width: 0;
  height: 0;
  border-width: 0 20px 20px;
  border-style: solid;
  transform:rotate(45deg);
  -ms-transform:rotate(45deg);
  -moz-transform:rotate(45deg);
  -webkit-transform:rotate(45deg);
  -o-transform:rotate(45deg);
}
.triangle1 {
  top: -3px;
  left: -26px;
  border-color: transparent transparent white;
}
.triangle2 {
  top: -4px;
  left: -28px;
  border-color: transparent transparent #58B7FF;
}
.writerName {
  margin: 30px 0 0 0;
  color: #8f8f8f;
  font-size: 15px;
}
.detail {
  position: absolute;
  bottom: 0;
  right: 20px;
  font-size: 20px;
}
.date {
  color: #e8f3ff;
  .year {
    width: 200px;
    position: absolute;
    top: 70px;
    right: 0;
    font-size: 30px;
  }
  .day{
    width: 200px;
    position: absolute;
    top: 100px;
    right: 0;
    font-size: 80px;
    line-height: 75px;
  }
}
</style>
