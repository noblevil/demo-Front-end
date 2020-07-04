<template>
  <div>
  <div>
    <my-header></my-header>
  </div>
   <div class="complaintQueryForm">
    <el-form :inline="true" ref="form" :model="queryForm" label-width="100px">
      <el-row>
        <el-col :span="12">网上投诉</el-col>
      </el-row>

      <el-form-item label="请选择区域：">
        <el-cascader
          size="large"
          :options="regionOptions"
          v-model="selectedOptions"
          @change="handleChange"
        ></el-cascader>
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


       <el-form-item label="投诉机构名称：" label-width="120px">
        <el-input placeholder="请输入" v-model="queryForm.complaintOrgName" clearable></el-input>
      </el-form-item>

      <el-button type="primary" @click="query">查询</el-button>
      &nbsp;
      <a href="http://localhost:1888/#/addComplaint"> <el-button type="primary" >新增</el-button> </a>
    </el-form>
  </div>

 <div>
  <el-table
        :data="tableData"
        style="width: 100%">

        <el-table-column
          prop="complaint_id"
          label="序号"
          width="50">
        </el-table-column>

        <el-table-column
          prop="org_id"
          label="投诉机构ID"
          width="100">
        </el-table-column>

        <el-table-column
          prop="org_name"
          label="投诉机构名">
        </el-table-column>

        <el-table-column
          prop="content"
          label="投诉内容">
        </el-table-column>

        <el-table-column
          prop="suggest"
          label="改进意见">
        </el-table-column>

      </el-table>
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

      tableData: [{
        complaint_id: '1',
        org_id: '7886',
        org_name:'韦博开心豆',
        content:'欺诈学费，无证经营',
        suggest:'进入调查'
      }, {
        complaint_id: '2',
        org_id: '1234',
        org_name:'随便编的',
        content:'欺诈学费，无证经营',
        suggest:'进入调查'
      }],

      //查询表单
      queryForm: {
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

      this.queryForm.address = loc;
    }
  }
};

</script>
