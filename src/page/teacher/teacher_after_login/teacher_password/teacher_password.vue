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


    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="8"><div class="grid-content bg-purple">

        <el-form

          :rules="teacherDetailRules"
          ref="teacherDetail"
          :model="teacherDetail"
          id="teacherDetail"
          label-width="0">
        <table cellpadding="10" >
          <tr>
            <td style="padding-top: 2px">选择验证方式：</td>
            <td colspan="2">
              <el-form-item prop="qualification">
                <el-radio  label="1">手机号</el-radio><el-radio  label="2">邮箱</el-radio>
              </el-form-item>
            </td>

          </tr>
          <tr>
            <td></td>
            <td>手机号码：</td>
            <td>xxx</td>
            <td><el-button  @click="submitForm('teacherDetail')" >发送验证码</el-button></td>
          </tr>
          <tr>
            <td></td>
            <td style="padding-top: 2px">验证码：</td>
            <td>
              <el-form-item prop="institutionWithQualification">
                <el-input v-model="teacherDetail.institutionWithQualification" id="institutionWithQualification" @change="saveForm('institutionWithQualification')" placeholder="请输入内容"></el-input>
              </el-form-item>
            </td>

          </tr>
          <tr>
            <td style="padding-top: 2px">旧密码：</td>
            <td>
              <el-form-item prop="institutionWithQualification">
              <el-input v-model="teacherDetail.institutionWithQualification" id="institutionWithQualification" @change="saveForm('institutionWithQualification')" placeholder="请输入内容"></el-input>
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td style="padding-top: 2px">新密码：</td>
            <td>
              <el-form-item prop="institutionWithQualification">
                <el-input v-model="teacherDetail.institutionWithQualification" id="institutionWithQualification" @change="saveForm('institutionWithQualification')" placeholder="请输入内容"></el-input>
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td style="padding-top: 2px">确认密码：</td>
            <td>
              <el-form-item prop="institutionWithQualification">
                <el-input v-model="teacherDetail.institutionWithQualification" id="institutionWithQualification" @change="saveForm('institutionWithQualification')" placeholder="请输入内容"></el-input>
              </el-form-item>
            </td>
          </tr>

        </table>
        </el-form>

        <el-button  @click="submitForm('teacherDetail')" type="primary">提交</el-button>
        <el-button  @click="submitForm('teacherDetail')" type="info">返回</el-button>




      </div></el-col>

    </el-row>


  </div>
</template>

<script>
  export default {
    data() {
      return {
        teacherDetail:{
          qualification: '',
          major: '',
          institutionWithQualification: '',
          graduatedDate: '',
          degree: '',
          title: '',
          institutionWithDegree: '',
        },
        teacherDetailRules:{
          qualification: [
            {required: true, message: "请输入最高学历", trigger: "blur"},
          ],
          major: [
            {required: true, message: "请输入所学专业", trigger: "blur"},
          ],
          institutionWithQualification: [
            {required: true, message: "请输入学历获得院校或机构", trigger: "blur"},
          ],
          graduatedDate: [
            {required: true, message: "请输入毕业时间", trigger: "blur"},
          ],
          degree: [
            {required: true, message: "请输入最高学位", trigger: "blur"},
          ],
          title: [
            {required: true, message: "请输入专业技术职称", trigger: "blur"},
          ],
          institutionWithDegree: [
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
    mounted() {
      this.teacherDetail.qualification=sessionStorage.getItem("qualification")
      this.teacherDetail.institutionWithQualification=sessionStorage.getItem("institutionWithQualification")
      this.teacherDetail.institutionWithDegree=sessionStorage.getItem("institutionWithDegree")
      this.teacherDetail.title=sessionStorage.getItem("title")
      this.teacherDetail.degree=sessionStorage.getItem("degree")
      this.teacherDetail.graduatedDate=sessionStorage.getItem("graduatedDate")
      this.teacherDetail.major=sessionStorage.getItem("major")

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


      nextStep(){
        this.$router.push({path: "/experience"});
      },
      lastStep(){
        this.$router.push({path: "/institution"});
      },

      saveForm(string){
        let sessionItem=document.getElementById(string).value;
        sessionStorage.setItem(string, sessionItem);

      },



      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log('error submit!!');
            alert('submit!');
          } else {
            console.log('error submit!!');
            //return callback(new Error('格式错误'));
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
        sessionStorage.removeItem("qualification")
        sessionStorage.removeItem("institutionWithQualification")
        sessionStorage.removeItem("institutionWithDegree")
        sessionStorage.removeItem("title")
        sessionStorage.removeItem("degree")
        sessionStorage.removeItem("graduatedDate")
        sessionStorage.removeItem("major")
      },


    }
  };
</script>

<style scoped>
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

