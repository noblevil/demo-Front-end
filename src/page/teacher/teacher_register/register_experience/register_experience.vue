<template>
  <div>
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="22"><div class="grid-content bg-purple"><h2>培训机构线上管理平台</h2></div></el-col>
    </el-row>
    <el-row type="flex" class="row-bg" justify="center">
      <div class="line"></div>
      <el-menu
        default-active="4"
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
      <el-col :span="22"><div class="grid-content bg-purple">
        <el-card v-for="(item,index) in items" :key="item" class="box-card">
          <div style="border: #e5e9f2 1px solid;padding: 50px">
          <div slot="header" class="clearfix">
            <span>经历{{index+1}}</span>
            <el-button style="float: right; padding: 3px 0" type="text" @click="deleteExperience(index,1)"><i class="el-icon-circle-close"></i></el-button>
          </div>

          <table cellpadding="10px">
            <tr>
              <td>工作职位：</td><td><el-input v-model="item.position" placeholder="请输入内容"></el-input></td>
            </tr>
            <tr>
              <td>工作单位：</td><td><el-input v-model="item.orgName" placeholder="请输入内容"></el-input></td>
            </tr>

            <tr>
              <td>所授科目：</td>
              <td>
                <el-select v-model="item.subject" placeholder="请选择">
                  <el-option
                    v-for="item in courseSubject"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </td>
            </tr>
            <tr>
              <td>从业时间：</td><td>
              <div style="width: 200px">

                <el-date-picker
                  style="width: 200px"
                  v-model="item.startTime"
                  align="right"
                  type="date"
                  placeholder="选择日期"
                  :picker-options="pickerOptions">
                </el-date-picker>
              </div>
            </td>
            </tr>
            <tr>
              <td></td><td>到</td>
            </tr>
            <tr>
              <td></td><td>
              <div style="width: 200px">

                <el-date-picker
                  style="width: 200px"
                  v-model="item.endTime"
                  align="right"
                  type="date"
                  placeholder="选择日期"
                  :picker-options="pickerOptions">
                </el-date-picker>
              </div>
            </td>
            </tr>
          </table>
          </div>
        </el-card>




      </div></el-col>
      <el-col :span="2"><div class="grid-content bg-purple">
        <el-row>
          <el-button @click="addExperience">增加工作经历</el-button>
        </el-row>
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
  export default {
    data() {
      return {
        items:[],

        courseSubject: [{
          value: '选项1',
          label: '语文'
        }, {
          value: '选项2',
          label: '数学'
        }, {
          value: '选项3',
          label: '英语'
        }],



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
    created() {
      if(sessionStorage.getItem('experiences'))
      this.items=JSON.parse(sessionStorage.getItem('experiences'))
    },



    methods: {

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
        this.$router.push({path: "/teacher-register/register-other"});
      },
      lastStep(){
        this.$router.push({path: "/teacher-register/register-detail"});
      },




      deleteExperience(index,len){
       this.items.splice(index, len)
      },
      addExperience(){
        let obj={
          position:'',
          orgName:'',
          subject:'',
          startTime:'',
          endTime:''
        }
        this.items.push(obj);
      },
      submit(){
        console.log(this.items)
        sessionStorage.setItem('experiences',JSON.stringify(this.items))
        console.log(JSON.parse(sessionStorage.getItem('experiences')))
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
