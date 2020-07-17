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
        default-active="1"
        class="el-menu-demo"
        mode="horizontal"
        text-color="#000000"
        active-text-color="#409EFF">
        <el-menu-item index="1" @click="profile">基本信息</el-menu-item>
        <el-menu-item index="2" @click="institution()">所在培训机构</el-menu-item>
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
                 label-width="0">
        <table cellpadding="20" >
          <tr>
            <td style="padding-top: 2px">姓名：</td>
            <td >
              <el-form-item prop="name" >
            <el-input v-model="teachInfo.teachName"  :placeholder="teachInfo.name"></el-input>
            </el-form-item>
            
            <td width="200px">
            </td>
            <td style="padding-top: 2px">证件类型：</td><td><template>
            <el-form-item prop="idType" >
            <el-select v-model="teachInfo.idType"  :placeholder="teachInfo.idType">
              <el-option
                v-for="item in certificateType"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            </el-form-item>
          </template>
          </td>
          </tr>
          <tr>
            <td style="padding-top: 2px">性别：</td>
            <td>
              <el-form-item prop="sex">
              <el-radio v-model="teachInfo.sex"  label="男">男</el-radio><el-radio v-model="teachInfo.sex"  label="女">女</el-radio>
              </el-form-item>
            </td>
            <td >
            </td>
            <td style="padding-top: 2px">证件号码：</td>
            <td>
              <el-form-item prop="idNum">
              <el-input v-model.number="teachInfo.idNum" :placeholder="teachInfo.idNum"></el-input>
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td style="padding-top: 2px">手机号：</td>
            <td>
              <el-form-item prop="teachPhone">
              <el-input v-model.number="teachAccount.teachPhone" :placeholder="teachAccount.teachPhone"></el-input>
              </el-form-item>
            </td>
            <td >
            </td>
            <td style="padding-top: 2px">出生日期：</td>
            <td>
            <div style="width: 200px">
              <el-form-item prop="teachBirth">
              <el-date-picker style="width: 200px"
                              v-model="teachInfo.teachBirth"
                              align="right"
                              type="date"
                              :placeholder="teachBirth"
                              :picker-options="pickerOptions">
              </el-date-picker>
              </el-form-item>
            </div>
            </td>
          </tr>
          <tr>
            <td style="padding-top: 2px">邮箱：</td>
            <td>
              <el-form-item prop="teachEmail">
              <el-input v-model="teachAccount.teachEmail" :placeholder="teachAccount.teachEmail" :disabled="true"></el-input>
              </el-form-item>
            </td>
            <td >
            </td>
            <td style="padding-top: 2px">国家地区:</td>
            <td>
              
              
            <el-form-item prop="nationality">
               <select-country v-model="teachInfo.nationality" :placeholder="teachInfo.nationality"></select-country>
            </el-form-item>
            
          </td>


          </tr>
          <tr>
            <td style="padding-top: 2px">国籍性质：</td><td><template>
            <el-form-item prop="countryNature" >
              <el-select v-model="teachInfo.countryNature"  :placeholder="teachInfo.countryNature">
                <el-option
                  v-for="item in countryNature"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </template>
          </td>
            <td>
            </td>
            <td style="padding-top: 2px">籍贯：</td>
            <td>
              <el-form-item prop="nativePlace">
            <el-input v-model="teachInfo.nativePlace" :placeholder="teachInfo.nativePlace"></el-input>
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
            
            </td>
            <td>
            </td>
            <td style="padding-top: 2px">政治面貌：</td>
            <td>
              <el-form-item prop="politicalStatus">
              <el-input v-model="teachInfo.politicalStatus" :placeholder="teachInfo.politicalStatus"></el-input>
              </el-form-item>
            </td>
          </tr>
        </table>
        </el-form>

      </div></el-col>


    </el-row>
    <el-row type="flex" class="row-bg" justify="end">


      <el-col :span="2" style="margin-top: 20px">
        <el-row>
          <el-button @click="resetForm('teacher')" type="info">重置</el-button>
        </el-row>
      </el-col>

      <el-col :span="2" style="margin-top: 20px">
        <el-row>
          <el-button type="info" @click="nextStep">下一步</el-button>
        </el-row>
      </el-col>
      <el-col :span="2" style="margin-top: 20px">
        <el-row>
          <el-button type="primary" @click="submitForm('teachInfo')">提交</el-button>
        </el-row>
       </el-col>

    </el-row>

  </div>
</template>

<script>

import {getProfile} from "@/api/teacher/teacher_after_login/teacher_after_login";
import {changeTeachByTeachId} from "@/api/teacher/teacher_after_login/teacher_after_login";
import selectCountry from "./select-country"


export default {
        name: "profile",
        components:{
          selectCountry
        },
      data() {
        return {
          teachAccount:{},
          teachInfo:{},
          relOrgTeach:{},




          certificateType:[{
            value: 2,
            label: 2
          },],
          countryNature:[
            {
              value:'中国大陆',
              label:'中国大陆'
            },
            {
              value:'港澳台',
              label:'港澳台'
            },
            {
              value:'外国',
              label:'外国'
            },
          ],





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
        };
      },

      created(){
        getProfile('110').then(res => {
          //console.log(res)
          this.teachAccount=res.data.data.teachAccount
          this.teachInfo=res.data.data.teachInfo
          this.relOrgTeach=res.data.data.relOrgTeach
          console.log(this.teachInfo.teachId)
          console.log(this.teachAccount)
          console.log(this.teachInfo.nationality)
          
        })


      },




        methods:{
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
          nextStep(){
            this.$router.push({path: "/teacher-after-login/teacher-instituition"});
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




          submitForm(formName) {
            this.$refs[formName].validate((valid) => {
              if (valid) {


                this.$confirm("是否确认提交信息？", '确认提交信息', {
                  confirmButtonText: '确定',
                  cancelButtonText: '取消',
                  dangerouslyUseHTMLString:true,
                  type: 'warning'
                }).then(() => {
                  changeTeachByTeachId(this.teachInfo.teachId,this.teachAccount,this.teachInfo).then(res =>{
                    if(res){
                        this.$router.push({path: "/teacher-after-login/empty",query:{name:'profile'}});
                    }
                  })
                  this.$message({
                    type: 'success',
                    message: '提交成功!'
                  });
                  //this.$router.push({path: "/teacher-after-login/empty",query:{name:'profile'}});
                })
                //.catch(() => {
                 // this.$message({
                 //   type: 'info',
                //    message: '取消提交'
                //  });
               // });
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


          change (val) {
            this.$emit('input', val)
          }
        }
    }
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
