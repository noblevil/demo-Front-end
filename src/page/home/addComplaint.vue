<template>
  <div>
  <div>
    <my-header></my-header>
  </div>
   <div class="complaintQueryForm">
    <el-form :inline="true" ref="form" :model="queryForm" label-width="100px">


        <el-col >网上投诉</el-col>

       <el-row>
         <el-form-item label="请选择区域：">
        <el-cascader
          size="large"
          :options="regionOptions"
          v-model="selectedOptions"
          @change="handleChange"
        >
        </el-cascader>
      </el-form-item>

           <el-form-item label="投诉类别：">
           <el-select v-model="queryForm.complaintType" clearable placeholder="请选择">
             <el-option
               v-for="item in complaintTypeOptions"
               :key="item.value"
               :label="item.label"
               :value="item.value"
             ></el-option>
           </el-select>
         </el-form-item>
          </el-row>

    <el-row>
      <el-form-item label="投诉机构名称：" label-width="120px">
        <el-input style="width:360px" placeholder="请输入" v-model="allComplaintForm.complaintOrgName" clearable></el-input>
      </el-form-item>
     </el-row>

     <el-row>
       <el-form-item label="投诉标题：" label-width="120px">
         <el-input style="width:360px" placeholder="请输入" v-model="allComplaintForm.complaintTitle" clearable></el-input>
       </el-form-item>
      </el-row>

      <el-row>
        <el-form-item label="投诉内容：" label-width="120px">
          <el-input style="width:360px"    type="textarea"  :autosize="{ minRows: 3}" placeholder="请输入" v-model="allComplaintForm.complaintContent" clearable></el-input>
        </el-form-item>
       </el-row>

<el-button style="margin:0 auto" type="primary" @click="query">保存</el-button>
    </el-form>
  </div>


</div>
</template>

<script>
import { regionData, CodeToText } from "element-china-area-data";

import myHeader from "@/components/home/my-header";

export default {
  components: {
    myHeader
  },
  data() {

    return {
      selectedOptions:'',
      regionOptions: regionData,

      complaintTypeOptions: [
        {
          value: "违规办学",
          label: "违规办学"
        },
        {
          value: "违规招生",
          label: "违规招生"
        },
        {
          value: "其他",
          label: "其他"
        }
      ],

      //查询表单
      allComplaintForm: {
        address: "",
        complaintType: "",
        complaintOrgName: "",
      },
    }
  },

  methods:{
    handleChange() {
      var loc = "";
      for (let i = 0; i < this.selectedOptions.length; i++) {
        loc += CodeToText[this.selectedOptions[i]];
      }

      this.allComplaintForm.address = loc;
    }
  }
};

</script>
