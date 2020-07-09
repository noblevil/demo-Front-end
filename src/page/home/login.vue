<template>
  <div>
    <div>
      <my-header></my-header>
    </div>
    <div class="loginForm">
      <el-form :inline="true" ref="form" :model="complaintQueryForm" label-width="100px">
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

        <el-row>
          <el-form-item label="账号">
            <el-input style="width:360px" placeholder="Email" clearable></el-input>
          </el-form-item>
        </el-row>

        <el-row>
          <el-form-item label="密码">
            <el-input style="width:360px" placeholder="请输入密码" clearable show-password></el-input>
          </el-form-item>
        </el-row>

        <el-button style="margin:20 auto" type="primary" @click="query">登录</el-button>
      </el-form>
    </div>
  </div>
</template>
<script>
import myHeader from "@/components/home/my-header";

export default {
  components: {
    myHeader
  },
  data() {
    return {
      options: [
        {
          value: "学生",
          label: "学生"
        },
        {
          value: "机构",
          label: "机构"
        },
        {
          value: "教师",
          label: "教师"
        }
      ],
      value: ""
    };
  }
};
</script>

<style>
.loginForm {
  padding-top: 100px;
  text-align: center;
}

.el-form-item {
  padding-top: 20px;
}
</style>
