<template>

  <div>
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="22"><div class="grid-content bg-purple"><h2>培训机构线上管理平台</h2></div></el-col>
      <el-col :span="2">
        <table   cellpadding="2px">
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
        <el-card class="box-card" v-for="comment in comments" :key='comment' style="margin-top: 5px" >
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
        <el-button  style="width: 700px;margin-left: 0px;margin-top: 5px" v-for="course in courseList" :key='course' @click="gotoDetail(course.courseId)" >
        <el-card class="box-card" >
          <table cellpadding="10px">
            <tr>
              <td>课程名：</td>
              <td>{{course.courseName}}</td>
            </tr>
            <tr>
              <td>课程级别：</td>
              <td>{{course.courseLevel}}</td>
            </tr>
            <tr>
              <td>课程所属学科：</td>
              <td>{{course.courseSubject}}</td>
            </tr>
            <tr>
              <td>课程有效期：</td>
              <td>{{course.validPeriod}}</td>
            </tr>
            <tr>
              <td>课程内容介绍：</td>
              <td>{{course.courseIntro}}</td>
            </tr>
          </table>
        </el-card>
        </el-button>

      </div></el-col>
    </el-row>




  </div>
</template>

<script>

import {getTeachCourseByTeachAccount} from '@/api/teacher/teacher_after_login/teacher_after_login'

  export default {

    data() {
      return{
        courseList:[],



        Id:1,
        teacherId:1,
        comments:[],
        courses:[],
      }



    },
    

     created(){
        getTeachCourseByTeachAccount('110').then(res => {
          //console.log(res)
          this.courseList=res.data.data
          console.log(this.courseList)
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

<style lang="less" scoped>
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

