<template>
  <div>
    <el-button type="primary" @click="handleSubmit">按钮点击</el-button>
  </div>
</template>

<script>
import { getDetail, getTestDetail } from "@/api/demo/demo";

export default {
  name: "x-button",
  methods: {
    async init() {
      const res = await getDetail();
      if (res.data.success) {
        console.log(res.data.data);
      } else {
        console.log(res.data.msg);
      }

      const resTest = await getTestDetail();
      if (resTest.data.success) {
        console.log(resTest.data.data);
      } else {
        console.log(resTest.data.msg);
      }
    },
    handleSubmit() {
      console.log("按钮点击了");
      const promise = this.init();
      console.log(promise);
    }
  }
};
</script>


<style scoped>
</style>