<template>
  <div>
    <div>
      <my-header></my-header>
    </div>
    <div class="registerForm">
      <el-form :inline="true" ref="form" :model="cregisterForm" label-width="100px">
        <el-row>
          <el-form-item label="选择角色：">
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-row>

        <el-button style="margin:0 auto" type="primary" @click="query">注册</el-button>
      </el-form>
    </div>
  </div>
</template>
<script>
import myHeader from "@/components/home/my-header";

export default {
  components: {
    myHeader
  }
};
</script>

<style>
.registerForm {
  padding-top: 100px;
  text-align: center;
}
</style>
