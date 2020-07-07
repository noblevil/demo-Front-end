<template>

  <div>
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="22"><div class="grid-content bg-purple"><h2>培训机构线上管理平台</h2></div></el-col>
      <el-col :span="2">
        <table  style="color: #e5e9f2" cellpadding="2px">
          <tr>
            <td rowspan="2">xxx老师</td>
            <td rowspan="2">
        <div class="grid-content bg-purple"><div class="el-icon-user-solid"></div></div>
            </td>
            <td ><el-button @click="gotoInfo(teacherId)">信息维护</el-button></td>
          </tr>
          <tr>
            <td><el-button @click="changePassword(teacherId)">修改密码</el-button></td>
          </tr>
        </table>
      </el-col>
    </el-row>


    <el-row type="flex" class="row-bg" justify="space-around">
      <el-col :span="10"><div class="grid-content bg-purple" style="padding: 50px;border: #e5e9f2 1px solid;" >
        <h3>家长（学生）的评价</h3>
        <el-card class="box-card" v-for="comment in comments" style="margin-top: 5px" >
          <table cellpadding="10px">
            <tr>
              <td>用户名:</td><td>{{comment.userName}}</td>
            </tr>
            <tr>
              <td>课程信息:</td><td>{{comment.courseDetail}}</td>
            </tr>
            <tr>
              <td>评分:</td>
              <td>
                <el-rate
                  v-model="comment.value"
                  disabled
                  show-score
                  text-color="#ff9900"
                  score-template="{value}">
                </el-rate>
              </td>
            </tr>



          </table>
          <div style="border: #e5e9f2 1px solid;width: 640px;margin: 10px">
            <el-card class="box-card"  >
              {{comment.content}}
            </el-card>
          </div>

        </el-card>






      </div></el-col>
      <el-col :span="10"><div class="grid-content bg-purple" style="padding: 50px;border: #e5e9f2 1px solid;">
        <h3>本人课程</h3>
        <el-button  style="width: 700px;margin-left: 0px;margin-top: 5px" v-for="course in courses" @click="gotoDetail(course.courseId)" >
        <el-card class="box-card" >
          <table cellpadding="10px">
            <tr>
              <td>课程名：</td>
              <td>{{course.courseName}}</td>
            </tr>
            <tr>
              <td>课程时间：</td>
              <td>{{course.courseDuration}}</td>
            </tr>
            <tr>
              <td>上课时间：</td>
              <td>{{course.classTime}}</td>
            </tr>
          </table>
        </el-card>
        </el-button>

      </div></el-col>
    </el-row>




  </div>
</template>

<script>
import {getTeacherAfterLoginTeacherHome} from '@/api/teacher_after_login/teacher_after_login'

  export default {

    data() {
      return{
        Id:1,
        teacherId:1,
        comments:[],
        courses:[],
      }



    },
    created() {
      getTeacherAfterLoginTeacherHome().then(res => {
        console.log(res)
        this.comments=res.data.data.comments;
        this.courses=res.data.data.courses;
        console.log(this.comments)
        console.log(this.courses)
      })
    },



    methods: {
      gotoDetail(Id) {
        this.$router.push({
          path: "/teacher-after-login/teacher-course-detail",
          //name: "information-course-detail",
          query: {
            id: Id

          }
        });
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
      }

      }



  };
</script>

<style scoped>
  .el-row {
    margin-bottom: 20px;
  &:last-child {
     margin-bottom: 0;
   }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #20222a;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
    text-align: center;
    color: #e5e9f2;
    padding-top: 10px;

  }
  .row-bg {
    padding: 10px 0;
    background-color: #20222a;
  }

</style>

