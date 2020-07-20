<template>
  <basic-container>
    <el-row>
      <el-col :span="4">
        <div class="tool-box">
          <el-button type="primary" icon="el-icon-circle-plus-outline" size="small" @click="handleAdd">添加</el-button>
<!--          <el-button type="danger" icon="el-icon-delete" size="small" @click="handleMultiDelete">批量删除</el-button>-->
        </div>
      </el-col>

      <div class="orgQueryForm">
        <el-form :inline="true" >
          <el-form-item label="教师姓名：" prop="teacherName">
            <el-input
              placeholder="请输入姓名"
              v-model="queryTeacher.name"
              size="small"
              style="width: 120px;margin-top: 60px"
              clearable>
            </el-input>
          </el-form-item>
          <el-form-item label="教师性别：">
            <el-select v-model="queryTeacher.sex"
                       placeholder="请选择"
                       size="small"
                       style="width: 100px;
                       margin-top: 60px"
                       clearable
            ><el-option label="男" value="男"></el-option>
              <el-option label="女" value="女"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="培训科目：" prop="trainSubject">
            <el-select
              style="width: 100px;
              margin-top: 60px"
              size="small"
              v-model="queryTeacher.trainSubject"
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
          <el-button size="small" style="width: 100px" icon="el-icon-search" type="primary" @click="queryteachers">查询</el-button>
        </el-form>
      </div>
    </el-row>

    <el-row>
      <el-table
        :data="this.teacherList.slice((this.page.currentPage-1)*this.page.size,this.page.currentPage*this.page.pageSize)"
        @selection-change="selectChange"
        style="width: 100%">
        <el-table-column
          prop="id"
          type="selection"
          width="55"
        ></el-table-column>
        <el-table-column
          prop="teachId"
          label="教师ID"
          width="100"
        ></el-table-column>
        <el-table-column
          prop="teachName"
          label="教师姓名"
          width="100"
        ></el-table-column>
        <el-table-column
          prop="sex"
          label="教师性别"
          width="100"
        ></el-table-column>
        <el-table-column
          prop="teachBirth"
          label="出生日期"
          width="100"
        ></el-table-column>
        <el-table-column
          prop="teachingSubject"
          label="学科"
          width="180"
        ></el-table-column>
        <el-table-column
          prop="workType"
          label="工作类型"
          width="180">
        </el-table-column
        ><el-table-column
          prop="isTeachQualifCert"
          label="是否有教师资格证"
          width="180">
        </el-table-column
        ><el-table-column
          prop="professionalTitle"
          label="专业职称"
          width="180"
      ></el-table-column>
        <el-table-column
          label="操作"
          width="250"
        ><template slot-scope="scope">
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
            >删除
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


    <el-dialog :title="dialogTitle" width="600px" :visible.sync="formVisable" center>
      <el-form :model="blog" :rules="addRules" ref="blog">
        <el-form-item label="教师邮箱" prop="email" label-width="80px">
          <el-input v-model="blog.email" auto-complete="off" style="width:400px"></el-input>
        </el-form-item>
        <el-form-item label="教师账号" prop="account" label-width="80px">
          <el-input v-model="blog.account"  auto-complete="off" style="width: 400px"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitBlog()">确定</el-button>
        <el-button @click="formVisable=false">取消</el-button>
      </div>
    </el-dialog>


  </basic-container>

</template>

<script>
  import {getOrgCourse, getOrgTeacher, orgAddTeach, orgRemoveTeach,queryTeachList} from "../../api/org/org";

  export default {
    name:"teachermanager",
    data() {
      return {
        formVisable:false,

        dilogTitle:'',

        addRules:{
          email:[
            {required: true, message: '请输入邮箱地址', trigger: 'blur' },,
            {type:'email',message: '请输入正确的邮箱格式',trigger: ['blur','change']}
          ],
          account:{required: true, message: '请输入邮箱地址', trigger: 'blur'}
        },
        blog:{
          id:'',
          email: '',
          account: ''
        },
        queryTeacher:{
          name:'',
          sex:'',
          trainSubject: '',
        },

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
        console.log(this.teacherList.slice((this.page.currentPage-1)*this.page.size,this.page.currentPage*this.page.pageSize))
        this.page.total=res.data.data.length;

      })
    },
    methods: {
      queryteachers() {
        queryTeachList(1101234561,this.queryTeacher.name,this.queryTeacher.sex,this.queryTeacher.trainSubject
        ).then(res => {
          this.teacherList = res.data.data;
          console.log(res.data.data);
        });
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
        this.dialogTitle="添加教师";
        this.formVisable=true;
        console.log("add")
      },
      resetForm(formName){
        this.$refs[formName].clearValidate()
      },
      submitBlog(){
        orgAddTeach(this.blog.email,this.blog.account,1101234561).then(
          res=>{
            console.log(this.blog.email);
            getOrgTeacher(1101234561).then(res=>{
              this.teacherList = res.data.data;
              this.formVisable=false;
              this.blog.email='';
              this.blog.account='';
              this.$message({
                type:'success',
                message:'添加成功！'
              })
            })
          }
        )},
      handleView(index, row) {
        console.log("view");
        console.log(index);
        console.log(row);
      },
      handleEdit(index, row) {
        console.log("edit");
        console.log(row);
      },
      handleDelete(index, row) {
        this.$confirm('确认删除？','提示',{
          confirmButtonText:'确定',
          cancelButtonText:'取消',
          type:'warning',
          center:true
        })
          .then(()=>{
          orgRemoveTeach(1101234561,row.teachId)
            .then(res=>{
              getOrgTeacher(1101234561)
                .then(res=>{
                this.teacherList=res.data.data;
                this.$message({
                  type:'success',
                  message:'删除成功！'
                })
              })
            })
        })
        .catch(()=>{
          this.$message({
            type:'info',
            message:'取消删除'
          })
          }
        )

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
