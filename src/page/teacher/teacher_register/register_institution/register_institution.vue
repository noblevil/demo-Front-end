<template>
  <div>
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="22"><div class="grid-content bg-purple"><h2>培训机构线上管理平台</h2></div></el-col>
    </el-row>
    <el-row type="flex" class="row-bg" justify="center">
    <div class="line"></div>
    <el-menu
      default-active="2"
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
                                v-if="index<currentPage*pageSize&&index>=(currentPage-1)*pageSize"

                                :value="institution"
                                :label="institution"
                                :key="institution"
                                style="padding: 50px;margin: 30px">{{institution.orgName}}<br>{{institution.orgId}}</el-checkbox-button>
          </el-checkbox-group>
          <!--
          <el-radio v-for="(institution,index) in institutions"
                    v-if="index<currentPage*pageSize&&index>=(currentPage-1)*pageSize"
                    v-model="selectedIndex"
                    :key="institution"
                    :value="index"
                    :label="index" border
                    style="width: 200px;height: 100px;padding-top: 40px;margin: 30px" @change="onChange">
            {{institution.name}}<br>{{institution.number}}
          </el-radio>
          -->
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
      <el-col :span="6"><div class="grid-content bg-purple">
        <div v-for="item in selectedInstitution" :key="item">
        <table cellpadding="20">
          <tr>
            <td>机构名称：</td><td>{{item.orgName}}</td>
          </tr>
          <tr>
            <td>机构编号：</td><td>{{item.orgId}}</td>
          </tr>
          <tr>
            <td>学科:</td>
            <td><el-select v-model="teachingSubject" placeholder="请选择">
              <el-option
                v-for="item in item.courseSubject"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select></td>
          </tr>
        </table>
        </div>
      </div></el-col>
    </el-row>

    <el-row type="flex" class="row-bg" justify="end">
      <el-col :span="2" style="margin-top: 20px">
        <el-row>
          <el-button @click="nextStep">下一步</el-button>
        </el-row>
      </el-col>
      <el-col :span="2" style="margin-top: 20px">
        <el-row>
          <el-button @click="submit">提交</el-button>
        </el-row>
      </el-col>
      <el-col :span="2" style="margin-top: 20px">
        <el-row>
          <el-button @click="lastStep">返回</el-button>
        </el-row>
      </el-col>
    </el-row>


  </div>
</template>

<script>
  import {getInstitution} from '@/api/teacher/teacher_register/teacher_register'
  import {searchInstitution} from "@/api/teacher/teacher_register/teacher_register";

  export default {

    data() {
      return {
        keyWords:'',

        pageSize: 3,
        pageSizes: [3, 6, 9],
        currentPage: 1,
        teachingSubject:'',

        selectedInstitution: [],
        institutions: [{orgId: '', orgName: '', courseSubject: '', teachingSubject: this.teachingSubject,}],
        //myInstitution:[{orgId:'',orgName:'',courseSubject:''}],


      }

    },
    created(){
      if(sessionStorage.getItem('myInstitution')) {
        this.selectedInstitution = JSON.parse(sessionStorage.getItem('myInstitution'))
      }
      getInstitution().then(res => {
        console.log(res)
        this.institutions=res.data.data.institutions
        //console.log(this.institutions)


      })
    },



    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      institution(){
        this.$router.push({path: "/teacher-register/register-institution"});
      },
      profile(){
        this.$router.push({path: "/teacher-register/register-profile"});
      },
      detail(){
        this.$router.push({path: "/teacher-register/register-detail"});
      },
      other(){
        this.$router.push({path: "/teacher-register/register-other"});
      },
      experience(){
        this.$router.push({path: "/teacher-register/register-experience"});
      },

      nextStep(){
        this.$router.push({path: "/teacher-register/register-detail"});
      },
      lastStep(){
        this.$router.push({path: "/teacher-register/register-profile"});
      },

      //搜索机构
      query(){
        searchInstitution(this.keyWords).then(res => {
          console.log(res)
          this.institutions=res.data.data.institutions
        })
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



      //onChange(){

      //  this.selectedInstitution=this.institutions[this.selectedIndex];

      //},

      /*addInstitution(){
        let objs=[];
        for (let index = 0; index < this.selectedInstitution.length; index++) {
          let obj={
            orgId:this.selectedInstitution[index].orgId,
            orgName:this.selectedInstitution[index].orgName,
            courseSubject:JSON.stringify(this.selectedInstitution[index].courseSubject),
          };
          console.log(this.selectedInstitution[index].courseSubject)
          //obj.courseSubject=this.selectedInstitution[index].courseSubject
          objs.push(JSON.parse(JSON.stringify(obj)))
        }
        this.myInstitution=objs;
        console.log(this.myInstitution)
      },*/

      //log(index){
       // console.log(this.selectedInstitution[this.selectedInstitution.length-1])
       // this.selectedInstitution[this.selectedInstitution.length-1]=JSON.stringify(this.institutions[index])
      //  this.selectedInstitution[this.selectedInstitution.length-1]=JSON.parse(this.selectedInstitution[this.selectedInstitution.length-1])
       // console.log(this.selectedInstitution[this.selectedInstitution.length-1])
        //console.log(this.selectedInstitution)
        //console.log(this.selectedInstitution[0].orgId)
      //},

      submit(){
        //console.log(this.myInstitution);
        sessionStorage.setItem('myInstitution',JSON.stringify(this.selectedInstitution))
        console.log(JSON.parse(sessionStorage.getItem('myInstitution')))
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
