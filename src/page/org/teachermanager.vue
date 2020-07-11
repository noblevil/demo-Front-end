<template>
  <basic-container>
    <el-row>
      <el-col :span="4">
        <div class="tool-box">
          <el-button type="primary" icon="el-icon-circle-plus-outline" size="small" @click="handleAdd">添加</el-button>
          <el-button type="danger" icon="el-icon-delete" size="small" @click="handleMultiDelete">批量删除</el-button>

        </div>
      </el-col>
      <div class="orgQueryForm">
        <el-form :inline="true" >
          <el-form-item label="教师姓名：" prop="teacherName">
            <el-input
              placeholder="请输入姓名"
              v-model="teacherName"
              size="small"
              style="width: 120px;margin-top: 60px"
              clearable>
            </el-input>
          </el-form-item>

          <el-form-item label="教师性别：">
            <el-select v-model="teacherSex"
                       placeholder="请选择"
                       size="small"
                       style="width: 100px;
                       margin-top: 60px"
            ><el-option label="男" value="男"></el-option>
              <el-option label="女" value="女"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="培训科目：" prop="trainSubject">
            <el-select
              style="width: 100px;
              margin-top: 60px"
              size="small"
              v-model="trainSubject"
              clearable
              placeholder="请选择"
            ><el-option
              v-for="item in trainSubjectOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
            </el-select>
          </el-form-item>
          <el-button size="small" style="width: 100px" icon="el-icon-search" type="primary" @click="query">查询</el-button>
        </el-form>
      </div>
    </el-row>

    <el-row>
      <el-table
        :data="teacherList"
        @selection-change="selectChange"
        style="width: 100%">
        <el-table-column
          prop="id"
          type="selection"
          width="55">
        </el-table-column>

        <el-table-column
          prop="teachName"
          label="教师姓名"
          width="100">
        </el-table-column>

        <el-table-column
          prop="sex"
          label="教师性别"
          width="100"
        >

        </el-table-column>

        <el-table-column
          prop="teachBirth"
          label="出生日期"
          width="100">
        </el-table-column>

        <el-table-column
          prop="teachingSubject"
          label="学科"
          width="180">
        </el-table-column>
        <el-table-column
          prop="workType"
          label="工作类型"
          width="180">
        </el-table-column>
        <el-table-column
          prop="isTeachQualifCert"
          label="是否有教师资格证"
          width="180">
        </el-table-column>
        <el-table-column
          prop="professionalTitle"
          label="专业职称"
          width="180">
        </el-table-column>
        <el-table-column
          label="操作"
          width="250">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除
            </el-button>
          </template>
        </el-table-column>

      </el-table>
    </el-row>
    <el-row>
      <el-pagination
        background
        :page-sizes="[10, 20, 30, 50]"
        :page-size="10"
        layout="total, sizes, prev, pager, next, jumper"
        @size-change="sizeChange"
        @current-change="currentChange"
        :total="page.total">
      </el-pagination>
    </el-row>
  </basic-container>
</template>

<script>
  // import {getList} from '@/api/demo/blog'
  import { queryOrgList } from "@/api/home/home";
  import {getOrgTeacher} from "../../api/org/org";


  export default {
    name:"teachermanager",
    data() {
      return {
        teacherName:"",
        teacherSex: "",
        trainSubject:"",
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
        multiSelection: [],
        page: {
          pageSize: 10,
          currentPage: 1,
          total: 0
        },
        teacherList:[],
      }

    },
    created() {

      getOrgTeacher(1101234561).then(res=>{
        this.teacherList = res.data.data;
      })
    },
    methods: {
      onLoad() {
        getList().then(res => {
          this.data = res.data.data.records;
          this.page.total = res.data.data.total;
        })
      },
      selectChange(val) {
        this.multiSelection = val
      },
      currentChange(currentPage){
        this.page.currentPage = currentPage;
      },
      sizeChange(pageSize){
        this.page.pageSize = pageSize;
      },
      handleAdd() {
        console.log("add")
      },
      handleView(index, row) {
        console.log("view");
        console.log(index);
        console.log(row);
      },
      handleEdit(index, row) {
        console.log("edit");
        console.log(index);
        console.log(row);
      },
      handleDelete(index, row) {
        console.log("delete");
        console.log(index);
        console.log(row);
      },
      handleMultiDelete() {
        console.log("multi-delete")
      },
    }
  }
</script>
<style lang="scss" scoped>
  .el-pagination {
    margin-top: 20px;
  }
</style>
