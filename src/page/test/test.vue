<template>
  <basic-container>
    <el-form ref="form" :model="queryForm" label-width="80px">
      <el-row>
        <el-col :span="12">校外机构查询</el-col>
        <el-col :span="12">
          <el-button type="primary" @click="filteredOrgList">查询</el-button>
          <el-button type="info">重置</el-button>
        </el-col>
      </el-row>

      <el-form-item label="请选择区域：">
        <el-cascader
          size="large"
          :options="regionOptions"
          v-model="selectedOptions"
          @change="handleChange"
        ></el-cascader>
      </el-form-item>

      <el-form-item label="机构名称：">
        <el-input placeholder="请输入" v-model="queryForm.orgName" clearable></el-input>
      </el-form-item>

      <el-form-item label="培训层次：">
        <el-select v-model="queryForm.trainLevel" clearable placeholder="请选择">
          <el-option
            v-for="item in trainLevelOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="培训科目：">
        <el-select v-model="queryForm.trainSubject" clearable placeholder="请选择">
          <el-option
            v-for="item in trainSubjectOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="培训形式：">
        <el-select v-model="queryForm.trainForm" clearable placeholder="请选择">
          <el-option
            v-for="item in trainFormOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
    </el-form>

    <el-row>
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="白名单" name="whiteList">
          <el-table
            :data="whiteList.slice((whiteCurrentPage-1)*pagesize,whiteCurrentPage*pagesize)"
            stripe
            style="width: 100%"
          >
            <el-table-column prop="orgName" label="机构名称" width="180"></el-table-column>
            <el-table-column prop="code" label="统一社会信用代码" width="180"></el-table-column>
            <el-table-column prop="number" label="办学许可证号" width="180"></el-table-column>
            <el-table-column prop="department" label="办学许可证审批部门"></el-table-column>
          </el-table>
          <div style="text-align: center;margin-top: 30px;">
            <el-pagination
              background
              layout="prev, pager, next"
              :total="this.whiteList.length"
              @current-change="current_change1"
            ></el-pagination>
          </div>
        </el-tab-pane>
        <el-tab-pane label="黑名单" name="blackList">
          <el-table
            :data="blackList.slice((blackCurrentPage-1)*pagesize,blackCurrentPage*pagesize)"
            stripe
            style="width: 100%"
          >
            <el-table-column prop="orgName" label="机构名称" width="180"></el-table-column>
            <el-table-column prop="code" label="统一社会信用代码" width="180"></el-table-column>
            <el-table-column prop="number" label="办学许可证号" width="180"></el-table-column>
            <el-table-column prop="department" label="办学许可证审批部门"></el-table-column>
          </el-table>
          <div style="text-align: center;margin-top: 30px;">
            <el-pagination
              background
              layout="prev, pager, next"
              :total="this.blackList.length"
              @current-change="current_change2"
            ></el-pagination>
          </div>
        </el-tab-pane>
        <el-tab-pane label="灰名单" name="grayList">
          <el-table
            :data="grayList.slice((grayCurrentPage-1)*pagesize,grayCurrentPage*pagesize)"
            stripe
            style="width: 100%"
          >
            <el-table-column prop="orgName" label="机构名称" width="180"></el-table-column>
            <el-table-column prop="code" label="统一社会信用代码" width="180"></el-table-column>
            <el-table-column prop="number" label="办学许可证号" width="180"></el-table-column>
            <el-table-column prop="department" label="办学许可证审批部门"></el-table-column>
          </el-table>
          <div style="text-align: center;margin-top: 30px;">
            <el-pagination
              background
              layout="prev, pager, next"
              :total="this.grayList.length"
              @current-change="current_change3"
            ></el-pagination>
          </div>
        </el-tab-pane>
      </el-tabs>
    </el-row>
  </basic-container>
</template>


<script>
import { regionData, CodeToText } from "element-china-area-data";
import { getOrgList } from "@/api/home/home";

export default {
  data() {
    return {
      //分页信息
      total: 0,
      pagesize: 10,
      whiteCurrentPage: 1,
      blackCurrentPage: 1,
      grayCurrentPage: 1,

      //下拉列表
      regionOptions: regionData,
      trainLevelOptions: [
        {
          value: 0,
          label: "中小学科类"
        },
        {
          value: 1,
          label: "艺术类"
        },
        {
          value: 2,
          label: "体育类"
        },
        {
          value: 3,
          label: "科技类"
        },
        {
          value: 4,
          label: "语言能力类"
        },
        {
          value: 5,
          label: "研学类"
        },
        {
          value: 6,
          label: "其他类"
        }
      ],
      trainSubjectOptions: [
        {
          value: 0,
          label: "语文"
        },
        {
          value: 1,
          label: "数学"
        },
        {
          value: 2,
          label: "英语"
        },
        {
          value: 3,
          label: "物理"
        },
        {
          value: 4,
          label: "化学"
        },
        {
          value: 5,
          label: "生物"
        },
        {
          value: 6,
          label: "历史"
        },
        {
          value: 7,
          label: "地理"
        },

        {
          value: 8,
          label: "政治"
        }
      ],
      trainFormOptions: [
        {
          value: 0,
          label: "面授"
        },
        {
          value: 1,
          label: "在线培训"
        }
      ],
      selectedOptions: [],

      //查询表单
      queryForm: {
        address: "",
        orgName: "",
        unifiedCode: "",
        number: "",
        department: "",
        listType: "",
        trainLevel: "",
        trainSubject: "",
        trainForm: "",
      },

      orgList: [],
      initialList:[],

      whiteList: [],
      blackList: [],
      grayList: [],

      //激活哪个名单的标签页 默认激活白名单
      activeName: "whiteList"
    };
  },
  created() {

    //加载白名单 黑名单数据 灰名单数据 没有筛选条件
    getOrgList().then(res => {
      console.log(res);
      this.orgList = res.data.data.orgList;
      this.initialList=res.data.data.orgList;
      this.whiteList = this.orgList.filter(item => item.listType === 0);
      this.blackList = this.orgList.filter(item => item.listType === 1);
      this.grayList = this.orgList.filter(item => item.listType === 2);
    });
  },

  methods: {
    handleChange() {
      var loc = "";
      for (let i = 0; i < this.selectedOptions.length; i++) {
        loc += CodeToText[this.selectedOptions[i]];
      }

      this.queryForm.address = loc;
      console.log(this.queryForm.address);
    },

    current_change1: function(currentPage) {
      this.whiteCurrentPage = currentPage;
    },

    current_change2: function(currentPage) {
      this.blackCurrentPage = currentPage;
    },

    current_change3: function(currentPage) {
      this.grayCurrentPage = currentPage;
    },


    filteredOrgList () {

      let filteredList=[];

      //浅层比较
      function shallowEqual(object1, object2) {

        const keys1 = Object.keys(object1);
        const keys2 = Object.keys(object2);

        if (keys1.length !== keys2.length) {
          return false;
        }

        for (let index = 0; index < keys1.length; index++) {
          const val1 = object1[keys1[index]];
          const val2 = object2[keys2[index]];
          if (val1 !== "") {
            if (val1 !== val2) {
              return false;
            }
          }
        }
        return true;
      }

      for(let i=0; i<this.initialList.length; i++){
        if (shallowEqual(this.queryForm,this.initialList[i])){
          filteredList.push(this.initialList[i])
        }
      }
      /*
      self.orgList.filter(function (org) {
        console.log(shallowEqual(self.queryForm,org))
        if (shallowEqual(self.queryForm,org)){
          filteredList.push(org)
        }
      })
      */


      this.orgList = filteredList;

      this.whiteList = this.orgList.filter(item => item.listType === 0);
      this.blackList = this.orgList.filter(item => item.listType === 1);
      this.grayList = this.orgList.filter(item => item.listType === 2);
    },




  }
};
</script>

<style>
.el-row {
  margin-bottom: 20px;
}
.el-col {
  border-radius: 4px;
}
</style>

