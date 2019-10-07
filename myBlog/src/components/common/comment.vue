<template>
    <div id="comment">
      <el-image
      src='https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg'>
      </el-image>
      <div class="commentMsg">
        <h5>用户 xxx 在 xxxxxxxxxxxxx 评论给你的博客 xxxxxx 评论了</h5>
        <p>。。。。。。。。</p>
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
#comment {
  position: relative;
  width: 99%;
  height: 100px;
  box-shadow: 2px 2px 0 #58B7FF;
  border: 1px solid #58B7FF;
  margin-bottom: 20px;
}
.el-image {
  position: absolute;
  top: 50%;
  width: 60px;
  height: 60px;
  margin: -30px 0 0 20px;
  float: left;
}
.commentMsg {
  margin-left: 120px;
  h5 {
    margin-bottom: 0;
  }
  p {
    margin-top: 0;
  }
}
</style>
