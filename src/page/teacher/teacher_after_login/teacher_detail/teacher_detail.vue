<template>
  <div>
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="22"><div class="grid-content bg-purple"><h2>培训机构线上管理平台</h2></div></el-col>
      <el-col :span="2">
        <table   cellpadding="2px">
          <tr>
            <td rowspan="2">{{teachInfo.teachName}}老师</td>
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
    <el-row type="flex" class="row-bg" justify="center">
      <div class="line"></div>
      <el-menu
        default-active="3"
        class="el-menu-demo"
        mode="horizontal"

        text-color="#000000"
        active-text-color="#409EFF">
        <el-menu-item index="1" @click="profile">基本信息</el-menu-item>
        <el-menu-item index="2" @click="institution">所在培训机构</el-menu-item>
        <el-menu-item index="3" @click="detail">学历专业技术职称</el-menu-item>
        <el-menu-item index="4" @click="experience">工作经历</el-menu-item>
        <el-menu-item index="5" @click="other">其他</el-menu-item>

      </el-menu>
    </el-row>

    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="12"><div class="grid-content bg-purple">
        <el-form

          :rules="teachInfoRules"
          ref="teachInfo"
          :model="teachInfo"
          id="teachInfo"
          label-width="0">
        <table cellpadding="20">
          <tr>
            <td style="padding-top: 2px">最高学历：</td>
            <td>
              <el-form-item prop="highestEducation">
              <el-input v-model="teachInfo.highestEducation"   :placeholder="teachInfo.highestEducation"></el-input>
              </el-form-item>
            </td>
            <td width="100px"></td>
            <td style="padding-top: 2px">所学专业：</td>
            <td>
              <el-form-item prop="major">
              <el-input v-model="teachInfo.major"  :placeholder="teachInfo.major"></el-input>
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td style="padding-top: 2px">学历获得院校或机构：</td>
            <td>
              <el-form-item prop="educationalInstitution">
              <el-input v-model="teachInfo.educationalInstitution"  :placeholder="teachInfo.educationalInstitution"></el-input>
              </el-form-item>
            </td>
            <td></td>
            <td style="padding-top: 2px">毕业时间：</td><td>
            <div style="width: 200px">

              <el-form-item prop="graduationDate">
              <el-date-picker
                style="width: 200px"
                v-model="teachInfo.graduationDate"
                value-format="yyyy-MM-dd"
                id="graduatedDate"
                align="right"
                type="date"
                :placeholder="teachInfo.graduationDate"
                :picker-options="pickerOptions">
              </el-date-picker>
              </el-form-item>
            </div>
          </td>
          </tr>
          <tr>
            <td style="padding-top: 2px">最高学位：</td>
            <td>
              <el-form-item prop="highestDegree">
              <el-input v-model="teachInfo.highestDegree"  :placeholder="teachInfo.highestDegree"></el-input>
              </el-form-item>
            </td>
            <td></td>
            <td style="padding-top: 2px">专业技术职称：</td>
            <td>
              <el-form-item prop="professionalTitle">
              <el-input v-model="teachInfo.professionalTitle"   :placeholder="teachInfo.professionalTitle"></el-input>
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td style="padding-top: 2px">学位获得院校或机构：</td>
            <td>
              <el-form-item prop="degreeObtainedInstitution">
              <el-input v-model="teachInfo.degreeObtainedInstitution"  :placeholder="teachInfo.degreeObtainedInstitution"></el-input>
              </el-form-item>
            </td>
            <td></td><td style="padding-top: 2px">工作类型：</td><td><template>
            <el-form-item prop="workType" >
              <el-select v-model="teachInfo.workType"  :placeholder="teachInfo.workType">
                <el-option
                  v-for="item in workType"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </template>
          </td>
          </tr>
        </table>
        </el-form>
      </div></el-col>

    </el-row>

    <el-row type="flex" class="row-bg" justify="end">


      <el-col :span="2" style="margin-top: 20px">
        <el-row>
          <el-button @click="resetForm('teachInfo')" type="info">重置</el-button>
        </el-row>
      </el-col>

      <el-col :span="2" style="margin-top: 20px">
        <el-row>
          <el-button @click="nextStep" type="info">下一步</el-button>
        </el-row>
      </el-col>
      <el-col :span="2" style="margin-top: 20px">
        <el-row>
          <el-button type="primary" @click="submitForm('teachInfo')">提交</el-button>
        </el-row>
      </el-col>
      <el-col :span="2" style="margin-top: 20px">
        <el-row>
          <el-button @click="lastStep" type="info">返回</el-button>
        </el-row>
      </el-col>
    </el-row>


  </div>
</template>

<script>
  //import {getDetail} from "@/api/teacher/teacher_after_login/teacher_after_login";
  import {getProfile} from "@/api/teacher/teacher_after_login/teacher_after_login";
  import {changeTeachByTeachId} from "@/api/teacher/teacher_after_login/teacher_after_login";

  export default {
    data() {
      return {
        teachInfo:{},
        teachAccount:{},


        workType:[
          {
            value:'兼职',
            label:'兼职'
          },
          {
            value:'全职',
            label:'全职'
          },

        ],




        teachInfoRules:{
          highestEducation: [
            {required: true, message: "请输入最高学历", trigger: "blur"},
          ],
          major: [
            {required: true, message: "请输入所学专业", trigger: "blur"},
          ],
          educationalInstitution: [
            {required: true, message: "请输入学历获得院校或机构", trigger: "blur"},
          ],
          graduationDate: [
            {required: true, message: "请输入毕业时间", trigger: "blur"},
          ],
          highestDegree: [
            {required: true, message: "请输入最高学位", trigger: "blur"},
          ],
          professionalTitle: [
            {required: true, message: "请输入专业技术职称", trigger: "blur"},
          ],
          degreeObtainedInstitution: [
            {required: true, message: "请输入学位获得院校或机构", trigger: "blur"},
          ],

        },

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


      }


    },
    created(){
      getProfile('110').then(res => {
        console.log(res)
        this.teachAccount=res.data.data.teachAccount
        this.teachInfo=res.data.data.teachInfo
      })


    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
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



      nextStep(){
        this.$router.push({path: "/teacher-after-login/teacher-experience"});
      },
      lastStep(){
        this.$router.push({path: "/teacher-after-login/teacher-institution"});
      },





       submitForm(formName) {
            this.$refs[formName].validate((valid) => {
              if (valid) {


                this.$confirm("是否确认提交信息？", '确认提交信息', {
                  confirmButtonText: '确定',
                  cancelButtonText: '取消',
                  dangerouslyUseHTMLString:true,
                  type: 'warning'
                }).then(() => {
                  console.log(this.teachInfo)
                  changeTeachByTeachId(this.teachInfo.teachId,this.teachAccount,this.teachInfo).then(res =>{
                    if(res){
                        this.$router.push({path: "/teacher-after-login/empty",query:{name:'detail'}});
                    }
                  })
                  this.$message({
                    type: 'success',
                    message: '提交成功!'
                  });
                  //this.$router.push({path: "/teacher-after-login/empty",query:{name:'detail'}});
                })
                //.catch(() => {
                 // this.$message({
                 //   type: 'info',
                  //  message: '取消提交'
                  //});
                //});
              } else {
                console.log('error submit!!');
                this.$message({
                  type: 'error',
                  message: '格式错误!'
                });
                return false;
              }
            });
          },
      resetForm(formName) {
        this.$refs[formName].resetFields();

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

