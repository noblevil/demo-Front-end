<template>
  <div>
  <div>
    <my-header></my-header>
  </div>
    <div class="complaintAddForm"  align="center">
    <el-form :inline="true" ref="form" :model="addComplaintForm" label-width="120px">

        <el-col >新增投诉</el-col>
       <!-- <el-row>
         <el-form-item label="投诉机构区域：">
        <el-cascader
          size="large"
          :options="regionOptions"
          v-model="selectedOptions"
          @change="handleChange"
        >
        </el-cascader>
      </el-form-item>
          </el-row> -->

    <el-row>
      <el-form-item label="投诉机构名称：" label-width="120px">
        <el-input style="width:360px" placeholder="请输入" v-model="addComplaintForm.orgName" clearable></el-input>
      </el-form-item>
     </el-row>

     <el-row>
       <el-form-item label="投诉标题：" label-width="120px">
         <el-input style="width:360px" placeholder="请输入" v-model="addComplaintForm.title" clearable></el-input>
       </el-form-item>
      </el-row>

      <el-row>
        <el-form-item label="投诉内容：" label-width="120px">
          <el-input style="width:360px"    type="textarea"  :autosize="{ minRows: 3}" placeholder="请输入" v-model="addComplaintForm.content" clearable></el-input>
        </el-form-item>
       </el-row>

       <el-row>
         <el-form-item label="修改意见：" label-width="120px">
           <el-input style="width:360px"    type="textarea"  :autosize="{ minRows: 3}" placeholder="请输入" v-model="addComplaintForm.suggest" clearable></el-input>
         </el-form-item>
        </el-row>

<el-button style="margin:0 auto" type="primary" @click="submit">提交</el-button>
    </el-form>
  
    </div>
     <el-footer>版权所有 &copy; xxxxxxxx &nbsp;&nbsp; 24小时客户服务热线：400-8879-597</el-footer>
     </div>
</template>

<script>
import { MessageBox } from 'element-ui';
import { regionData, CodeToText } from "element-china-area-data";
import { addComplaintList } from "../../api/complaint/complaint";
import myHeader from "@/components/home/my-header";

export default {
  components: {
    myHeader
  },
  data() {

    return {
      selectedOptions:'',
      regionOptions: regionData,

      //添加表单
      addComplaintForm: {
        //address: "",
        //complaintType: "",
        orgName: "",
        title:"",
        content:"",
        suggest:"",
      },
    }
  },

  methods:{
    handleChange() {
      var loc = "";
      for (let i = 0; i < this.selectedOptions.length; i++) {
        loc += CodeToText[this.selectedOptions[i]];
      }

      this.addComplaintForm.address = loc;
    },
  submit() {
    addComplaintList(
       //this.addComplaintForm.address,
       this.addComplaintForm.orgName.replace(/\s*/g,""),
       this.addComplaintForm.title,
       this.addComplaintForm.content,
       this.addComplaintForm.suggest,
    ).then
    (
    res=>{
      console.log(res);
      console.log(res.data.code);
      if(res.data.code===200) {
         MessageBox.alert('添加投诉成功', '新增投诉', {
          confirmButtonText: '确定',
          callback: action => {
             MessageBox.message({
              type: 'info',
              message: `action: ${ action }`
            });
          }
        });
        //alert("投诉成功");
        this.$router.push("/complaint");

        }
      else if(res.data.code===400) {
        MessageBox.alert('添加投诉失败，投诉机构名输入有误', '新增投诉', {
          confirmButtonText: '确定',
          callback: action => {
             MessageBox.message({
              type: 'info',
              message: `action: ${ action }`
            });
          }
        });
        //alert("投诉机构名输入有误");
        }
      }
    )
  },
}
}

</script>
<style>
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
