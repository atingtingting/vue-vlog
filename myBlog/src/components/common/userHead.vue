<template>
    <div id="userHead">
      <div class="buts">
        <router-link to='/userPage/userData'>
          <el-button type="text" icon="el-icon-user-solid"></el-button>
        </router-link>
        <router-link to='/userPage/setting'>
          <el-button type="text" icon="el-icon-s-tools"></el-button>
        </router-link>
      </div>
      <el-image
      src='https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg'>
      </el-image>
      <div class="userMsg">
        <h2>名字</h2>
        <p>个人简介：。。。。。。。。。。。。。。。。。。。。。。。。。。。</p>
        <span>博客：88</span>
        <span>评论：88</span>
        <span>收藏：88</span>
      </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
  },
  components: {
  }
}
</script>

<style scoped lang="scss">
#userHead {
  position: relative;
  width: 75%;
  height: 250px;
  margin: 80px auto;
  margin-bottom: 30px;
  box-shadow: 2px 2px 0 #58B7FF;
  border: 1px solid #58B7FF;
}
.el-image {
  position: absolute;
  top: 50%;
  width: 200px;
  height: 200px;
  margin: -100px 0 0 30px;
  float: left;
}
.userMsg {
  margin-left: 280px;
  h2 {
    font-size: 30px;
  }
  p {
    margin-bottom: 45px;
  }
  span {
    font-size: 20px;
    margin-right: 30px;
  }
}
.buts {
  position: absolute;
  right: 10px;
  top: 0;
  .el-button {
    font-size: 25px;
  }
}
</style>
