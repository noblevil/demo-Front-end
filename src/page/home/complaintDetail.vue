<template>
  <div>
  <div>
    <my-header></my-header>
  </div>
  <div class="complaintDetail">
    <table border="1" width="80%" align="center" >
      <tr>
        <td width="25%">投诉类型：</td>
        <td width="25%">{{complaintList[0].complaintType}}</td>
        <td width="25%">投诉机构：</td>
        <td width="25%">{{complaintList[0].complaintOrgName}}</td>
      </tr>
      <tr >
        <td width="25%">投诉标题：</td>
        <td width="75%" colspan="3">{{complaintList[0].content}}</td>
      </tr>
      <tr>
        <td width="25%">投诉内容：</td>
        <td width="75%" colspan="3">{{complaintList[0].contentDetail}}</td>
      </tr>
      <tr>
        <td width="25%">回复：</td>
        <td width="75%" colspan="3">{{complaintList[0].suggest}}</td>
      </tr>
    </table>
	    <!-- <el-row>
        <el-col :span="6" border="1">投诉类型：</el-col>
        <el-col :span="6" border="1">{{complaintList[0].complaintType}}</el-col>
        <el-col :span="6" >投诉机构：</el-col>
        <el-col :span="6">{{complaintList[0].complaintOrgName}}</el-col>
      </el-row> -->
      </div>
  </div>
</template>
<script>
import myHeader from "@/components/home/my-header";
import { getComplaintDetailById } from "@/api/home/home";

export default {
  components: {
    myHeader
  },
  data() {
        return {
          complaintList:[
          ],
        }
      },
   created() {
       this.complaintId = this.$route.params.complaintId;
       console.log("dddddd"+this.complaintId);
       getComplaintDetailById(this.complaintId).then(res => {
         this.complaintList = res.data.data.complaintList;
       },
       );


     },
};
</script>
