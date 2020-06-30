<template>
  <div>
    <h3>区块链智能教育平台</h3>
    <div class="menu">
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
      </el-menu>
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