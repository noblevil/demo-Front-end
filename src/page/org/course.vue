<template>
  <basic-container>
    <el-row>
      <el-col :span="4">
        <div class="tool-box">
          <el-button type="primary" icon="el-icon-circle-plus-outline" size="small" @click="handleAdd">添加</el-button>
          <el-button type="danger" icon="el-icon-delete" size="small" @click="handleMultiDelete">批量删除</el-button>
        </div>
      </el-col>
    </el-row>

    <el-row>
      <el-table
        :data="courseList"
        @selection-change="selectChange"
        style="width: 100%">
        <el-table-column
          prop="id"
          type="selection"
          width="55"
        ></el-table-column>
        <el-table-column
          prop="courseId"
          label="课程编号"
          width="100"
        ></el-table-column>
        <el-table-column
          prop="courseName"
          label="课程名称"
          width="100"
        ></el-table-column>
        <el-table-column
          prop="courseSubject"
          label="学科"
          width="100"
        ></el-table-column>
        <el-table-column
          prop="contentIntro"
          label="课程内容介绍"
          width="180">
        </el-table-column>
        <el-table-column
          prop="validPeriod"
          label="课程有效期"
          width="180">
        </el-table-column>
        <el-table-column
          prop="courseLink"
          label="课程链接"
          width="180">
        </el-table-column>

        <el-table-column label="操作"  width="250">
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
  import {getOrgCourse, getOrgTeacher} from "../../api/org/org";


  export default {
    name:"course",
    data() {
      return {
        courseList:[],
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
      }
    },
    created(){
      getOrgCourse(1101234561).then(res=>{
        this.courseList = res.data.data;
      })
    }
  }
</script>
<style lang="scss" scoped>
  .el-pagination {
    margin-top: 20px;
  }
</style>
