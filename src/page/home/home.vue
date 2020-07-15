
<template>
  <div>
    <!-- <div class="myMap">
      <my-map></my-map>
    </div>-->
    <div>
      <my-header></my-header>
    </div>

    <el-row>
      <el-carousel indicator-position="outside">
        <el-carousel-item v-for="item in dataimg" :key="item">
          <img :src="item.src" />
        </el-carousel-item>
      </el-carousel>
    </el-row>

    <div class="orgQueryForm">
      <el-form :inline="true" ref="queryForm" :model="queryForm" :rules="rules" label-width="100px">
        <el-form-item label="机构名称：" prop="orgName">
          <el-input style="width: 140px" placeholder="请输入机构名称" v-model="queryForm.orgName" clearable></el-input>
        </el-form-item>

        <el-form-item label="选择区域：" prop="address">
          <el-cascader
            style="width: 100px"
            size="large"
            :options="regionOptions"
            v-model="selectedOptions"
            @change="handleChange"
          ></el-cascader>
        </el-form-item>

        <el-form-item label="培训类别：" prop="trainType">
          <el-select style="width: 110px" v-model="queryForm.trainType" clearable placeholder="请选择">
            <el-option
              v-for="item in trainTypeOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="培训科目：" prop="trainSubject">
          <el-select
            style="width: 110px"
            v-model="queryForm.trainSubject"
            clearable
            placeholder="请选择"
          >
            <el-option
              v-for="item in trainSubjectOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="培训形式：" prop="trainForm">
          <el-select style="width: 110px" v-model="queryForm.trainForm" clearable placeholder="请选择">
            <el-option
              v-for="item in trainFormOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>

        <el-button style="width: 100px; margin-top: 20px" type="primary" @click="query">查询</el-button>
        <el-button style="width: 100px" type="info" @click="reset">重置</el-button>
      </el-form>
    </div>

    <div class="orgList" style="height: 190px">
      <el-table
        :data="orgList.slice((currentPage-1)*pagesize,currentPage*pagesize)"
        stripe
        style="width: 100%"
        @selection-change="handleCurrentChange"
      >
        <el-table-column type="index" :index="indexMethod" label="序号" width="100"></el-table-column>
        <el-table-column prop="orgName" label="机构名称" width="180"></el-table-column>
        <el-table-column prop="listType" label="信用等级" width="180"></el-table-column>
        <el-table-column prop="unifiedCode" label="统一社会信用代码" width="180"></el-table-column>
        <el-table-column prop="address" label="区域地址" width="180"></el-table-column>
        <el-table-column prop="trainType" label="培训类别" width="180"></el-table-column>
        <el-table-column prop="trainSubject" label="培训科目" width="180"></el-table-column>
        <el-table-column prop="trainForm" label="培训形式" width="180"></el-table-column>
        <el-table-column prop="orgId" label="详情">
          <template slot-scope="scope">
            <el-button @click="gotolink(scope.row)" type="text" size="small">查看机构详情</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <div class="pagination">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage"
        :page-size="pagesize"
        layout="total, prev, pager, next"
        :total="this.orgList.length"
      ></el-pagination>
    </div>

    <el-footer>版权所有 &copy; xxxxxxxx &nbsp;&nbsp; 24小时客户服务热线：400-8879-597</el-footer>

  </div>
</template>

<script>

import { regionData, CodeToText } from "element-china-area-data";
//自定义组件
import myHeader from "@/components/home/my-header";

import myMap from "@/components/home/my-map";
//f
import { getAllOrgList } from "@/api/home/home";
import { queryOrgList } from "@/api/home/home";

export default {
  components: {
    myHeader,
    myMap
  },
  data() {
    return {
      dataimg: [
        {
          src: require("../../../public/img/home/img1.jpg")
        },
        {
          src: require("../../../public/img/home/img2.jpg")
        }
      ],

      total: 0, //总条数
      pagesize: 5, //每页的条数
      currentPage: 1, //默认开始页面

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

      orgId: ""
    };
  },

  created() {
    getAllOrgList().then(res => {
      this.orgList = res.data.data;

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
    reset() {
      this.$refs["queryForm"].resetFields();
    },
    handleChange() {
      var loc = "";
      for (let i = 0; i < this.selectedOptions.length; i++) {
        loc += CodeToText[this.selectedOptions[i]];
      }

      this.queryForm.address = loc;
    },
    indexMethod(index) {
      return index + 1;
    },
    handleCurrentChange: function(currentPage) {
      this.currentPage = currentPage;
    },
    query() {
      queryOrgList(
        this.queryForm.orgName,
        this.queryForm.address,
        this.queryForm.trainType,
        this.queryForm.trainSubject,
        this.queryForm.trainForm
      ).then(res => {
        this.orgList = res.data.data;
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

    gotolink(row) {
      //点击跳转至上次浏览页面
      // this.$router.go(-1)
      //指定跳转地址
      //.replace("/orgDetail");

      this.$router.push({
        //path: "/orgDetail",
        name: "orgDetail",
        params: {
          orgId: row.orgId
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

.pagination {
  text-align: center;
}

.el-form-item {
  width: 250px;
}

.el-footer {
  text-align: center;
  font-size: 13px;
  width: 100%;
  height: 70px;
  background-color: rgb(204, 204, 204);
}
.el-carousel {
  text-align: center;
}

.el-carousel__item img {
  line-height: 400px;
  margin: 0;
}

.el-footer {
  height: 100px;
  line-height: 60px;
  margin-top: 100px;
  text-align: center;
}

.orgQueryForm {
  padding-bottom: 5px;
  padding-top: 10px;
}

.orgList {
  padding-right: 20px;
  padding-left: 20px;
}
</style>
