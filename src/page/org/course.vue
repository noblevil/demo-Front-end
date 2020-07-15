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
            <el-button
              size="mini"
              type=""
              @click="handleEdit(scope.row)">修改
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

    <el-dialog :title="dialogTitle" width="600px" :visible.sync="formVisable" @close="resetFields" center>
      <el-form :model="blogForm" :rules="rules" ref="blogForm">
        <el-form-item label="课程名称" prop="courseName" label-width="100px" >
          <el-input v-model="addList.courseName" auto-complete="off" style="width:400px"></el-input>
        </el-form-item>
        <el-form-item label="课程学科" prop="courseSubject" label-width="100px" >
          <el-input v-model="addList.courseSubject" auto-complete="off" style="width:400px"></el-input>
        </el-form-item>
        <el-form-item label="课程级别" prop="courseLevel" label-width="100px" >
          <el-input v-model="addList.courseLevel" auto-complete="off" style="width:400px"></el-input>
        </el-form-item>
        <el-form-item label="课程链接" prop="courseLink" label-width="100px" >
          <el-input v-model="addList.courseLink" auto-complete="off" style="width:400px"></el-input>
        </el-form-item>
        <el-form-item label="课程介绍" prop="courseIntro" label-width="100px" >
          <el-input v-model="addList.contentIntro" auto-complete="off" style="width:400px"></el-input>
        </el-form-item>
        <el-form-item label="课程有效期" prop="validPeriod" label-width="100px" >
          <el-input v-model="addList.validPeriod" auto-complete="off" style="width:400px"></el-input>
        </el-form-item>
        <el-form-item label="招生学段" prop="studentRank" label-width="100px" >
          <el-input v-model="addList.studentRank" auto-complete="off" style="width:400px"></el-input>
        </el-form-item>
        <el-form-item label="招生年级" prop="studentGrade" label-width="100px" >
          <el-input v-model="addList.studentGrade" auto-complete="off" style="width:400px"></el-input>
        </el-form-item>
        <el-form-item label="教材" prop="textBook" label-width="100px" >
          <el-input v-model="addList.textBook" auto-complete="off" style="width:400px"></el-input>
        </el-form-item>
        <el-form-item label="出版社" prop="publishCompany" label-width="100px" >
          <el-input v-model="addList.publishCompany" auto-complete="off" style="width:400px"></el-input>
        </el-form-item>
        <el-form-item label="发行号" prop="isbnNum" label-width="100px" >
          <el-input v-model="addList.isbnNum" auto-complete="off" style="width:400px"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitBlog">确定</el-button>
        <el-button @click="formVisable=false">取消</el-button>
      </div>
    </el-dialog>
    <el-dialog :title="editForm" width="600px" :visible.sync="editFormVisable" @close="resetFields" center>
      <el-form :model="editForm" :rules="editrules" ref="editForm">
        <el-form-item label="课程名称" prop="courseName" label-width="100px" >
          <el-input v-model="editList.courseName" auto-complete="off" style="width:400px"></el-input>
        </el-form-item>
        <el-form-item label="课程学科" prop="courseSubject" label-width="100px" >
          <el-input v-model="editList.courseSubject" auto-complete="off" style="width:400px"></el-input>
        </el-form-item>
        <el-form-item label="课程级别" prop="courseLevel" label-width="100px" >
          <el-input v-model="editList.courseLevel" auto-complete="off" style="width:400px"></el-input>
        </el-form-item>
        <el-form-item label="课程链接" prop="courseLink" label-width="100px" >
          <el-input v-model="editList.courseLink" auto-complete="off" style="width:400px"></el-input>
        </el-form-item>
        <el-form-item label="课程介绍" prop="courseIntro" label-width="100px" >
          <el-input v-model="editList.contentIntro" auto-complete="off" style="width:400px"></el-input>
        </el-form-item>
        <el-form-item label="课程有效期" prop="validPeriod" label-width="100px" >
          <el-input v-model="editList.validPeriod" auto-complete="off" style="width:400px"></el-input>
        </el-form-item>
        <el-form-item label="招生学段" prop="studentRank" label-width="100px" >
          <el-input v-model="editList.studentRank" auto-complete="off" style="width:400px"></el-input>
        </el-form-item>
        <el-form-item label="招生年级" prop="studentGrade" label-width="100px" >
          <el-input v-model="editList.studentGrade" auto-complete="off" style="width:400px"></el-input>
        </el-form-item>
        <el-form-item label="教材" prop="textBook" label-width="100px" >
          <el-input v-model="editList.textBook" auto-complete="off" style="width:400px"></el-input>
        </el-form-item>
        <el-form-item label="出版社" prop="publishCompany" label-width="100px" >
          <el-input v-model="editList.publishCompany" auto-complete="off" style="width:400px"></el-input>
        </el-form-item>
        <el-form-item label="发行号" prop="isbnNum" label-width="100px" >
          <el-input v-model="editList.isbnNum" auto-complete="off" style="width:400px"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="editBlog">确定</el-button>
        <el-button @click="editFormVisable=false">取消</el-button>
      </div>
    </el-dialog>

  </basic-container>
</template>

<script>
  import {getOrgCourse,addCourse,deleteCourse,updateCourseInfo} from "../../api/org/org";
  export default {
    name:"course",
    data() {
      return {
        formVisable:false,
        editFormVisable:false,
        addList: {
          orgAccount: '1101234561',
          courseName:'',
          courseSubject:'',
          courseLevel:'',
          courseLink:'',
          contentIntro:'',
          validPeriod:'',
          studentRank:'',
          studentGrade:'',
          textbook:'',
          publishCompany:'',
          isbnNum:''
        },
        editList:{
          courseId:'',
          courseName:'',
          courseSubject:'',
          courseLevel:'',
          courseLink:'',
          contentIntro:'',
          validPeriod:'',
          studentRank:'',
          studentGrade:'',
          textbook:'',
          publishCompany:'',
          isbnNum:''
        },
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
        "test":{
          "orgAccount":"1101234561",
          "courseName":"英语",
          "courseSubject":"文科"
      }


      }
    },
    created(){
      getOrgCourse(1101234561).then(res=>{
        this.courseList = res.data.data;
        this.page.total=res.data.data.length;

      })
    },
    methods:{
      handleDelete(index,row){
        console.log(row);
        deleteCourse(1101234561,row.courseId).then(res=>{
            getOrgCourse(1101234561).then(res=>{
              this.courseList = res.data.data;})
        })
      },

      handleEdit(row){
        this.editTitle="编辑课程";
        this.editFormVisable=true;
        this.editList=row;
        console.log(JSON.stringify(this.editList));
      },
      editBlog(){
        updateCourseInfo(JSON.stringify(this.editList)).then(res=>{
          console.log("success");
          getOrgCourse(1101234561).then(res=>{
            this.courseList=res.data.data;
            this.editFormVisable=false;
            console.log(res.data.data);

          })
        })
      },
      cancelBlog(){
        this.resetFields(this.blogForm)
      },
      handleAdd(){
        this.dialogTitle="新增课程";
        this.formVisable=true;
        console.log("add")
      },

      resetForm(formName){
        this.$refs[formName].resetFields();
      },
      submitBlog(){
        let str = JSON.stringify(this.addList);
        console.log(str);
        this.formVisable=false;
        addCourse(JSON.stringify(this.addList)).then(
          res=>{
          console.log('success');
            getOrgCourse(1101234561).then(res=>{
              this.courseList = res.data.data;
            })
        }
        )}
    }
  }
</script>
<style lang="scss" scoped>
  .el-pagination {
    margin-top: 20px;
  }
</style>
