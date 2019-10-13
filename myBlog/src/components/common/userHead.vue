<template>
    <div id="userHead">
      <div class="square2"></div>
      <div class="square">
        <div class="buts">
          <router-link to='/userPage/userData'>
            <el-button type="text" icon="el-icon-user-solid"></el-button>
          </router-link>
          <router-link to='/userPage/setting'>
            <el-button type="text" icon="el-icon-s-tools"></el-button>
          </router-link>
        </div>
        <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
        <div class="userMsg">
          <h2>名字</h2>
          <p>。。。。。。。。。。。。</p>
        </div>
      </div>
      <div class="userData">
          <div><i class="el-icon-tickets"></i>博客：88</div>
          <div><i class="el-icon-chat-line-square"></i>评论：88</div>
          <div><i class="el-icon-collection"></i>收藏：88</div>
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
}
.square {
  position: relative;
  left: -20px;
  width: 70%;
  height: 260px;
  background: #e8f3ff;
  .userMsg {
    position: absolute;
    left: 35%;
    top: 30%;
  }
}
.square2 {
  position: absolute;
  top: 0;
  left: -100px;
  width: 80px;
  height: 400px;
  background: #e8f3ff;
}
.el-avatar {
  position: absolute;
  top: 50%;
  width: 200px;
  height: 200px;
  margin: -100px 0 0 30px;
  float: left;
}
.userData {
  position: absolute;
  top: 0;
  margin-left: 750px;
  color: #e8f3ff;
  div {
    font-size: 50px;
    margin-bottom: 30px;
  }
}
.buts {
  position: absolute;
  left: -60px;
  top: 0;
  width: 50px;
  .el-button {
    font-size: 25px;
  }
}
</style>
