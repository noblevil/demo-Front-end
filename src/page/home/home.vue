<template>
  <div>
    <!-- <div class="myMap">
      <my-map></my-map>
    </div>-->
    <div>
      <my-header></my-header>
    </div>

    <div class="orgQueryForm">
      <el-form :inline="true" ref="form" :model="queryForm" label-width="100px">
        <el-row>
          <el-col :span="12">校外机构查询</el-col>
          <el-col :span="12">
            <el-button type="primary" @click="query">查询</el-button>
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

        <el-form-item label="培训类别：">
          <el-select v-model="queryForm.trainType" clearable placeholder="请选择">
            <el-option
              v-for="item in trainTypeOptions"
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
    </div>

    <div class="orgList">
      <el-table
        :data="orgList.slice((currentPage-1)*pagesize,currentPage*pagesize)"
        stripe
        style="width: 100%"
      >
        <el-table-column prop="orgName" label="机构名称" width="180"></el-table-column>
        <el-table-column prop="listType" label="信用等级" width="180"></el-table-column>
        <el-table-column prop="unifiedCode" label="统一社会信用代码" width="180"></el-table-column>
        <el-table-column prop="address" label="区域地址" width="180"></el-table-column>
        <el-table-column prop="trainType" label="培训类别" width="180"></el-table-column>
        <el-table-column prop="trainSubject" label="培训科目" width="180"></el-table-column>
        <el-table-column prop="trainForm" label="培训形式" width="180"></el-table-column>
        <el-table-column prop="orgId" label="详情">
          <button @click="gotolink" class="btn btn-success">点击跳转页面</button>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { regionData, CodeToText } from "element-china-area-data";
//自定义组件
import myHeader from "@/components/home/my-header";

import myMap from "@/components/home/my-map";
//api
import { getAllOrgList } from "@/api/home/home";
import { queryOrgList } from "@/api/home/home";

export default {
  components: {
    myHeader,
    myMap
  },
  data() {
    return {
      //分页信息
      total: 0,
      pagesize: 10,
      currentPage: 1,

      //下拉列表选项 Options
      regionOptions: regionData,
      trainTypeOptions: [
        {
          value: "中小学科类",
          label: "中小学科类"
        },
        {
          value: "艺术类",
          label: "艺术类"
        },
        {
          value: "体育类",
          label: "体育类"
        },
        {
          value: "科技类",
          label: "科技类"
        },
        {
          value: "语言能力类",
          label: "语言能力类"
        },
        {
          value: "研学类",
          label: "研学类"
        },
        {
          value: "其他类",
          label: "其他类"
        }
      ],
      trainSubjectOptions: [
        {
          value: "语文",
          label: "语文"
        },
        {
          value: "数学",
          label: "数学"
        },
        {
          value: "英语",
          label: "英语"
        },
        {
          value: "物理",
          label: "物理"
        },
        {
          value: "化学",
          label: "化学"
        },
        {
          value: "生物",
          label: "生物"
        },
        {
          value: "历史",
          label: "历史"
        },
        {
          value: "地理",
          label: "地理"
        },

        {
          value: "政治",
          label: "政治"
        }
      ],
      trainFormOptions: [
        {
          value: "面授",
          label: "面授"
        },
        {
          value: "在线培训",
          label: "在线培训"
        }
      ],

      //查询表单
      queryForm: {
        address: "",
        orgName: "",
        trainType: "",
        trainSubject: "",
        trainForm: ""
      },

      orgList: [],

      orgId: 0
    };
  },

  created() {
    getAllOrgList().then(res => {
      this.orgList = res.data.data.orgList;
      this.orgList.forEach(element => {
        if (element.listType == 0) {
          element.listType = "白名单";
        } else if (element.listType == 1) {
          element.listType = "黑名单";
        } else {
          element.listType = "灰名单";
        }
      });
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
    query() {
      queryOrgList(
        this.queryForm.orgName,
        this.queryForm.address,
        this.queryForm.trainType,
        this.queryForm.trainSubject,
        this.queryForm.trainForm
      ).then(res => {
        this.orgList = res.data.data.orgList;
        this.orgList.forEach(element => {
          if (element.listType == 0) {
            element.listType = "白名单";
          } else if (element.listType == 1) {
            element.listType = "黑名单";
          } else {
            element.listType = "灰名单";
          }
        });
      });
    },
    gotolink() {
      //点击跳转至上次浏览页面
      // this.$router.go(-1)

      //指定跳转地址
      //.replace("/orgDetail");

      this.$router.push({
        path: "/orgDetail",
        name: "orgDetail",
        params: {
          orgId: this.orgId
        }
      });
    }
  }
};
</script>

<style scoped>
.mymap {
  height: 200px;
  width: 300px;
}
</style>