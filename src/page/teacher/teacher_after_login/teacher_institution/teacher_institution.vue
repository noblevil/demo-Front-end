<template>
  <div>
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="24"><div class="grid-content bg-purple"><h2>培训机构线上管理平台</h2></div></el-col>
      <el-col :span="2">
        <table   cellpadding="2px">
          <tr>
            <td rowspan="2">xxx老师</td>
            <td rowspan="2">
              <div class="grid-content bg-purple">
                <div class="el-icon-user-solid" style="height: 20px"></div>
              </div>
            </td>
            <td ><el-button @click="gotoInfo(teacherId)">信息维护</el-button></td>
          </tr>
          <tr>
            <td><el-button @click="changePassword(teacherId)">修改密码</el-button></td>
          </tr>
        </table>
      </el-col>
    </el-row>
    <el-row type="flex" class="row-bg" justify="center">
    <el-menu
      default-active="2"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#FFFFFF"
      text-color="#000000"
      active-text-color="#409EFF">
      <el-menu-item index="1" @click="profile">基本信息</el-menu-item>
      <el-menu-item index="2" @click="institution">所在培训机构</el-menu-item>
      <el-menu-item index="3" @click="detail">学历专业技术职称</el-menu-item>
      <el-menu-item index="4" @click="experience">工作经历</el-menu-item>
      <el-menu-item index="5" @click="other">其他</el-menu-item>
    </el-menu>
      <div class="line"></div>
    </el-row>



    <el-row type="flex" class="row-bg" justify="space-around">
      <el-col :span="14"><div class="grid-content bg-purple">
        <div style="margin-top: 15px;">
          <el-input placeholder="请输入内容" v-model="keyWords" class="input-with-select">

            <el-button @click="query" slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </div>

        <div style="margin-top: 50px;border: #e5e9f2 1px solid;padding: 50px">
          <el-checkbox-group v-model="selectedInstitution" >
            <el-checkbox-button v-for="(institution,index) in institutions"
                                
                                :value="institution"
                                :label="institution"
                                :key="institution"><div v-if="index<currentPage*pageSize&&index>=(currentPage-1)*pageSize">{{institution.orgName}}<br>{{institution.orgId}}</div></el-checkbox-button>
          </el-checkbox-group>
        </div>

        <el-pagination
          @prev-click="prevClick"
          @next-click="nextClick"
          @current-change="handleCurrentChange"
          @size-change="handleSizeChange"
          background
          layout=" total,sizes,prev, pager, next,jumper"
          :page-sizes="pageSizes"
          :total="institutions.length">
        </el-pagination>

      </div></el-col>
      <el-col :span="8"><div class="grid-content bg-purple">
        <el-table
          :data="myInstitution"
          height="250px"
          border
          style="width: 100%">
          <el-table-column
            fixed
            prop="orgName"
            label="机构名称"
            width="100">
          </el-table-column>
          <el-table-column
            prop="orgId"
            label="机构编号"
            width="150">
          </el-table-column>
          <el-table-column
            prop="teachingSubject"
            label="学科"
            width="150">
          </el-table-column>
          <el-table-column
            prop="orgTeachStatus"
            label="机构与教师的状态状态"
            width="150">
          </el-table-column>
          <el-table-column
            fixed="right"
            label="操作"
            width="100">
            <template slot-scope="scope">
              <el-button v-if="scope.row.orgTeachStatus==='入职状态1'" @click="handleClick(scope.row,e='确认入职')" type="text" size="small">确认入职</el-button>
              <el-button v-else-if="scope.row.orgTeachStatus==='在职状态2'" @click="handleClick(scope.row,e='申请离职')" type="text" size="small">申请离职</el-button>
            </template>
          </el-table-column>
        </el-table>



        <el-table
          :data="selectedInstitution"
          height="250px"
          border
          style="width: 100%">
          <el-table-column
            fixed
            prop="orgName"
            label="机构名称"
            width="150">
          </el-table-column>
          <el-table-column
            prop="orgId"
            label="机构编号"
            width="150">
          </el-table-column>

          <el-table-column
            label="学科"
            width="200">
            <template slot-scope="scope">
            <el-select v-model="scope.row.teachingSubject" placeholder="请选择">
              <el-option
                v-for="item in scope.row.courseSubject"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            </template>
          </el-table-column>
          <el-table-column
            fixed="right"
            label="操作"
            width="100">
            <template >
              <el-button  @click="applyInstitution" type="text" size="small">申请加入</el-button>

            </template>
          </el-table-column>

        </el-table>


      </div>

      </el-col>
    </el-row>



  </div>
</template>

<script>
  import {getProfile} from "@/api/teacher/teacher_after_login/teacher_after_login";
  import {getOrgList} from "@/api/teacher/teacher_after_login/teacher_after_login";
  import {seracrchOrg} from "@/api/teacher/teacher_after_login/teacher_after_login";


  import {getInstitution} from '@/api/teacher/teacher_register/teacher_register'
  import {searchInstitution} from "@/api/teacher/teacher_register/teacher_register";
  import {getMyInstitution} from "@/api/teacher/teacher_after_login/teacher_after_login";



  export default {

    data() {
      return {
        teachInfo:{},
        relOrgTeach:{},



        keyWords:'',

        pageSize: 3,
        pageSizes: [3, 6, 9],
        currentPage: 1,
        teachingSubject:'',

        selectedInstitution: [],
        myInstitution:[],
        institutions: [{orgId: '', orgName: '', courseSubject: '', teachingSubject: this.teachingSubject,}],
        //myInstitution:[{orgId:'',orgName:'',courseSubject:''}],



      }

    },
    created(){
      if(sessionStorage.getItem('myInstitution')) {
        this.selectedInstitution = JSON.parse(sessionStorage.getItem('myInstitution'))
      }
      getInstitution().then(res => {
        this.institutions=res.data.data.institutions
      })
      getMyInstitution(JSON.parse(sessionStorage.getItem('saber-tenantId')).content).then(res => {
        this.myInstitution=res.data.data.institutions
      })


      getProfile('110').then(res => {
        console.log(res)
        this.teachInfo=res.data.data.teachInfo
        this.relOrgTeach=res.data.data.relOrgTeach

      })
    },


    methods: {

      institution(){
        this.$router.push({path: "/teacher-after-login/teacher-institution"});
      },
      profile(){
        this.$router.push({path: "/teacher-after-login/teacher-profile"});
      },
      detail(){
        this.$router.push({path: "/teacher-after-login/teacher-detail"});
      },
      other(){
        this.$router.push({path: "/teacher-after-login/teacher-other"});
      },
      experience(){
        this.$router.push({path: "/teacher-after-login/teacher-experience"});
      },

      //搜索机构
      query(){
        searchInstitution(this.keyWords).then(res => {
          console.log(res)
          this.institutions=res.data.data.institutions
        })
      },



      gotoInfo(teacherId)
      {
        this.$router.push({
          path: "/teacher-after-login/teacher-profile",
          query: {
            id: teacherId

          }
        });
      },
      changePassword(teacherId){
        this.$router.push({
          path: "/teacher-after-login/teacher-password",
          query: {
            id: teacherId

          }
        });
      },


      //分页
      prevClick(){
        this.currentPage--;
      },
      nextClick(){
        this.currentPage++;
      },
      handleCurrentChange(val) {
        // 改变当前的页数
        this.currentPage=val
      },
      handleSizeChange(val) {
        // 改变每页数据个数
        this.pageSize=val;
        console.log(`每页 ${val} 条`);
      },


      handleClick(row,e) {
        console.log(row);
        console.log(e)
        if(e==='确认入职'){
          this.$confirm('是否确认入职?', '确认入职', {
            confirmButtonText: '确认',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            this.$message({
              type: 'success',
              message: '信息已提交!'
            });
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '已取消'
            });
          });

        }else {
          this.$confirm('提出离职申请?', '申请离职', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            this.$message({
              type: 'success',
              message: '信息已提交!'
            });
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '已取消'
            });
          });
        }

      },

      applyInstitution(){
        this.$prompt('请输入邮箱', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
          inputErrorMessage: '邮箱格式不正确'
        }).then(({ value }) => {
          this.$message({
            type: 'success',
            message: '邮箱' + value + '已发送'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });
        });

      },




      submit(){

      }

    }
  };
</script>

<style lang="less" scoped>
  .el-row {
    margin-bottom: 20px;
  
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #000000;
  }
  .bg-purple {
    background: #FFFFFF;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
    text-align: center;
    color: #000000;
    padding-top: 10px;

  }
  .row-bg {
    padding: 10px 0;
    background-color: #FFFFFF;
  }

</style>
