<template>
  <div>
  <div>
    <my-header></my-header>
  </div>
   <div class="complaintDetail">
   <table border="1" width="50%" align="center" >
     <tr>
        <td width="25%">投诉机构：</td>
        <td width="75%">{{complaintList.orgName}}</td>
      </tr>
      <tr>
        <td width="25%">投诉标题：</td>
        <td width="75%" >{{complaintList.title}}</td>
      </tr>
      <tr>
        <td width="25%">投诉内容：</td>
        <td width="75%" >{{complaintList.content}}</td>
      </tr>
      <tr>
        <td width="25%">回复：</td>
        <td width="75%" >{{complaintList.suggest}}</td>
      </tr>
    </table>
    <!-- <el-row>
      <el-col :span="8"><div></div></el-col>
      <el-col :span="8"><div>投诉机构：{{complaintList.orgName}}</div></el-col>
      <el-col :span="8"><div ></div></el-col>
    </el-row>
    <el-row>
      <el-col :span="8"><div></div></el-col>
      <el-col :span="8"><div>投诉标题：{{complaintList.title}}</div></el-col>
      <el-col :span="8"><div ></div></el-col>
    </el-row>
    <el-row>
      <el-col :span="6"><div></div></el-col>
      <el-col :span="18"><div>投诉内容：{{complaintList.content}}</div></el-col>

    </el-row>
    <el-row>
      <el-col :span="6"><div></div></el-col>
      <el-col :span="18"><div>回复：{{complaintList.suggest}}</div></el-col>

    </el-row>
 -->
      </div>
      <div> <el-footer>版权所有 &copy; xxxxxxxx &nbsp;&nbsp; 24小时客户服务热线：400-8879-597</el-footer></div>

  </div>
</template>
<script>
import myHeader from "@/components/home/my-header";
import { getComplaintDetailById } from "../../api/complaint/complaint";

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
       console.log("参数为："+this.complaintId);
       getComplaintDetailById(this.complaintId).then(res => {
         this.complaintList = res.data.data;
         console.log(res);
         console.log("############################################");
         console.log(this.complaintList);
       },
       );


     },
};
</script>
<style>
table, th, td
  {
  border: 1px solid #8d8d8d;
  }
 td
   {
     text-align:center;
     font-size: smaller;
     padding:15px;
   }
  .el-footer {
    position:fixed;
        bottom:0px;
    text-align: center;
    font-size: 13px;
    width: 100%;
    height: 70px;
    background-color: rgb(204, 204, 204);
  }
</style>
