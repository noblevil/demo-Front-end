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
      <el-col :span="22"><div class="grid-content bg-purple">
       <table cellpadding="20">
            <tr>
              <td>课程名：</td>
              <td>{{courseList[0].courseName}}</td>
            </tr>
            <tr>
              <td>课程类别：</td>
              <td>{{courseList[0].courseSubject}}</td>
            </tr>
            <tr>
              <td>课程年级：</td>
              <td>{{courseList[0].courseLevel}}</td>
              
            </tr>
            <tr>
              <td>课程时长：</td>
              <td>{{courseList[0].totalLessons}}</td>
            </tr>
          <tr>
            <td>学员名单：</td>
            <td>
              <template >
                <el-table
                  :data="tableData"

                  height="250">
                  <el-table-column
                    fixed
                    prop="date"
                    label="日期"
                    width="150">
                  </el-table-column>
                  <el-table-column
                    prop="name"
                    label="姓名"
                    width="120">
                  </el-table-column>
                  <el-table-column
                    prop="province"
                    label="省份"
                    width="120">
                  </el-table-column>
                  <el-table-column
                    prop="city"
                    label="市区"
                    width="120">
                  </el-table-column>
                  <el-table-column
                    prop="address"
                    label="地址"
                    width="300">
                  </el-table-column>
                  <el-table-column
                    prop="zip"
                    label="邮编"
                    width="120">
                  </el-table-column>
                </el-table>
              </template>
            </td>
          </tr>
          <tr>
            <td>学员评价：</td>
            <td><div style="padding: 30px;border: #e5e9f2 1px solid;">

              <el-card class="box-card">
                <div slot="header" class="clearfix">
                  <table>
                    <tr>
                      <td>用户名：</td>
                      <td>xxx</td>
                    </tr>
                    <tr>
                      <td>评分：</td>
                      <td>
                        <el-rate
                          v-model="value"
                          disabled
                          show-score
                          text-color="#ff9900"
                          score-template="{value}">
                        </el-rate>
                      </td>
                    </tr>
                  </table>
                </div>
                <div >
                  评价内容
                </div>
              </el-card>

              <el-card class="box-card">
                <div slot="header" class="clearfix">
                  <table>
                    <tr>
                      <td>用户名：</td>
                      <td>xxx</td>
                    </tr>
                    <tr>
                      <td>评分：</td>
                      <td>
                        <el-rate
                          v-model="value"
                          disabled
                          show-score
                          text-color="#ff9900"
                          score-template="{value}">
                        </el-rate>
                      </td>
                    </tr>
                  </table>
                </div>
                <div >
                  评价内容
                </div>
              </el-card>
              <el-card class="box-card">
                <div slot="header" class="clearfix">
                  <table>
                    <tr>
                      <td>用户名：</td>
                      <td>xxx</td>
                    </tr>
                    <tr>
                      <td>评分：</td>
                      <td>
                        <el-rate
                          v-model="value"
                          disabled
                          show-score
                          text-color="#ff9900"
                          score-template="{value}">
                        </el-rate>
                      </td>
                    </tr>
                  </table>
                </div>
                <div >
                  评价内容
                </div>
              </el-card>



              <div style="clear: both"></div>









            </div></td>
          </tr>
        </table>

      </div></el-col>

    </el-row>

    <el-row type="flex" class="row-bg" justify="end">

      <el-col :span="2" style="margin-top: 20px">
        <el-row>
          <el-button>返回</el-button>
        </el-row>
      </el-col>
    </el-row>


  </div>
</template>

<script>
  import {getCourse} from "@/api/teacher/teacher_after_login/teacher_after_login";
  
  export default {
    name: "course" ,
    props:{
      values:{
        type: Array ,
        default: function(){
          return []
        }
      }
    },

    data() {
      return {
        courseList:[],

        value:3.7,
        activeName: 'second',
        pickerOptions: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        value1: '',
        value2: '',


        tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-08',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-06',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-07',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }]

      }


    },
    created() {
      //console.log(this.$route.query.id)
      
      getCourse('110').then(res => {
          console.log(res)
          this.courseList=res.data.data
      })
    },

  
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
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


  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;
    float: left;
    margin: 10px;
  }

</style>
