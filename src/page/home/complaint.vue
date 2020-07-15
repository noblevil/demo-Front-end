<template>
  <div>
  <div>
    <my-header></my-header>
  </div>
   <div class="complaintQueryForm" style="text-align: center;margin-top:50px;">
    <el-form :inline="true" ref="form" :model="queryForm" label-width="100px">
      <!-- <el-row>
        <el-col :span="12">网上投诉</el-col>
      </el-row> -->

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
        :data="complaintList.slice((currentPage-1)*pagesize,currentPage*pagesize)"
        @selection-change='handleCurrentChange'
        style="width: 100%; padding-right:50px;padding-left:50px;">

        <el-table-column
          prop="orgId"
          label="投诉机构ID"
          width="100">
        </el-table-column>

        <el-table-column
          prop="complaintOrgName"
          label="投诉机构名">
        </el-table-column>

        <el-table-column
          prop="complaintType"
          label="投诉类别">
        </el-table-column>

        <el-table-column
          prop="content"
          label="投诉内容">
        </el-table-column>

        <el-table-column
          prop="suggest"
          label="改进意见">
        </el-table-column>

        <el-table-column prop="complaintId" >
          <template slot-scope="scope">
            <el-button @click="gotolink(scope.row)" type="text" >点击查看详情</el-button>
          </template>
        </el-table-column>

      </el-table>
      <el-pagination
           align="center"
          layout="prev, pager, next"
          :total="this.complaintList.length"
          @current-change = 'handleCurrentChange'
          :page-size="pagesize">
      </el-pagination>

</div>
</div>
</template>

<script>
import { regionData, CodeToText } from "element-china-area-data";

import myHeader from "@/components/home/my-header";

import { getAllComplaintList } from "@/api/home/home";
import { queryComplaintList } from "@/api/home/home";

export default {
  components: {
    myHeader
  },
  created() {
    getAllComplaintList().then(res => {
      this.complaintList = res.data.data.complaintList;
    });
  },
  data() {

    return {

      //分页信息
      total: 0,
      pagesize: 10,
      currentPage: 1,

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
        queryForm: {
        address: "",
        complaintType: "",
        complaintOrgName: "",
      },
        complaintList: [],
        
  };
  },

  methods:{
    handleChange() {
      var loc = "";
      for (let i = 0; i < this.selectedOptions.length; i++) {
        loc += CodeToText[this.selectedOptions[i]];
      }

      this.queryForm.address = loc;
      //this.queryForm.address = this.queryForm.address.replace(/\s*/g,"");
    },


     handleCurrentChange:function(currentPage){
                this.currentPage = currentPage;
            },

    query() {
      //console.log(this.queryForm.complaintOrgName,),
      queryComplaintList(
        this.queryForm.address,
        this.queryForm.complaintType,
        this.queryForm.complaintOrgName.replace(/\s*/g,""),
      ).then(res => {
        this.complaintList = res.data.data.complaintList;
        console.log(this.complaintList);
      })
    },
    gotolink(row) {
      console.log(row.complaintId);
      this.$router.push({
        name: "complaintDetail",
        params: {
          complaintId: row.complaintId
        }
      });
    }
  },
  }

</script>
