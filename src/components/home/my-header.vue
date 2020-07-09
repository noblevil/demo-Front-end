<template>
  <div>
    <h2 class="title">区块链智能教育平台</h2>
    <div class="menu">
      <el-row>
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
        >
          <el-menu-item index="1">
            <a href="http://localhost:1888/#/home">首页</a>
          </el-menu-item>
          <el-menu-item index="2">
            <a href="http://localhost:1888/#/complaint">校外投诉</a>
          </el-menu-item>
          <el-menu-item index="3">
            <a href="http://localhost:1888/#/policy">政策解读</a>
          </el-menu-item>
          <el-menu index="4" style=" position:absolute;right:50px;top:45px">
            <i class="el-icon-user"></i>
            <el-link href="http://localhost:1888/#/userlogin">登录</el-link>|
            <el-link href="http://localhost:1888/#/register">注册</el-link>
          </el-menu>
        </el-menu>

        <!-- <div style=" position:absolute;right:50px;top:45px">
        <i class="el-icon-user"></i>
        <el-link href="http://localhost:1888/#/userlogin" >登录</el-link>|
        <el-link href="http://localhost:1888/#/register" >注册</el-link>
        </div>-->
      </el-row>
      <div class="line"></div>
      <el-divider content-position="right"></el-divider>
    </div>
  </div>
</template>

<script>
export default {
  name: "my-header"
};
</script>

<style scoped>
.title {
  text-align: center;

  font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica,
    "Nimbus Sans L", Arial, "Liberation Sans", "Hiragino Sans GB",
    "Source Han Sans CN Normal", "Microsoft YaHei", "微软雅黑",
    "Wenquanyi Micro Hei", "WenQuanYi Zen Hei", "ST Heiti", SimHei,
    "WenQuanYi Zen Hei Sharp", sans-serif;
}
</style>
