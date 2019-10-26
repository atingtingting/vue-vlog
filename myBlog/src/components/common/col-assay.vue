<template>
    <div id="col-assay">
      <div class="content">
        <h1>111</h1>
        <p>dahsidjaofja</p>
      </div>
      <div class="writer">
        <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
        <span>123</span>
      </div>
      <div class="col-com">
          <el-button type="text" icon="el-icon-collection-tag">101</el-button>
          <el-button type="text" icon="el-icon-chat-dot-square">101</el-button>
      </div>
      <el-button type="text" class="detail" icon="el-icon-more"></el-button>
    </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  components: {
  }
}
</script>

<style scoped lang="scss">
#col-assay {
  position: relative;
  width: 93%;
  height: 150px;
  border: 1px solid #58B7FF;
  float: left;
  margin: 10px;
  padding: 15px;
  color: #357;
  h1 {
    margin: 0;
  }
  p {
    margin: 0;
  }
}
.writer {
  position: absolute;
  bottom: 10px;
  left: 10px;
  span {
    vertical-align: middle;
  }
}
.detail {
  position: absolute;
  right: 15px;
  bottom: -5px;
  font-size: 30px;
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
</style>
