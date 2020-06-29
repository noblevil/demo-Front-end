<template>
  <div>
    <el-row type="flex" class="row-bg" justify="space-around">
      <el-col :span="1" style="margin-top: 20px">
        <el-button style="width: 100px">首页</el-button>
      </el-col>
      <el-col :span="1" style="margin-top: 20px">
        <el-button>校外投诉</el-button>
      </el-col>
      <el-col :span="1" style="margin-top: 20px">
        <el-button>政策解读</el-button>
      </el-col>
      <el-col :span="16">
        <div class="grid-content bg-purple">
          <h2>区块链智能教育平台</h2>
        </div>
      </el-col>
    </el-row>

    <el-row type="flex" class="row-bg" justify="space-around">
      <el-col :span="14" style="margin-top: 20px">
        <div style="border: #e5e9f2 1px solid;padding-top: 50px">
          <el-row type="flex" class="row-bg" justify="space-around">
            <el-col :span="4">
              <el-button style="width: 200px;">机构详情</el-button>
            </el-col>
            <el-col :span="4">
              <el-button style="width: 200px;">加入比较列表</el-button>
            </el-col>
            <el-col :span="4">
              <el-button style="width: 200px;">返回</el-button>
            </el-col>
          </el-row>

          <el-row type="flex" class="row-bg" justify="center">
            <el-col :span="10">
              <table cellpadding="10px" border="1" style="background-color:#e5e9f2">
                <tr>
                  <td width="400px">机构名称</td>
                  <td width="400px">{{institutionName}}</td>
                </tr>
                <tr v-for="(value,name,index) in institution" :key="index">
                  <td v-if="index%2==0">{{labels[name]}}</td>
                  <td v-if="index%2==0">{{value}}</td>
                </tr>
              </table>
            </el-col>
            <el-col :span="10">
              <table cellpadding="10px" border="1" style="background-color:#e5e9f2">
                <tr>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>
                <tr v-for="(value,name,index) in institution" :key="index">
                  <td v-if="index%2==1" width="400px">{{labels[name]}}</td>
                  <td v-if="index%2==1" width="400px">{{value}}</td>
                </tr>
              </table>
            </el-col>
          </el-row>
        </div>
      </el-col>
      <el-col :span="8" style="margin-top: 20px">
        <div style="border: #e5e9f2 1px solid;"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { getHome } from "@/api/home/home";
export default {
  name: "",

  data() {
    return {
      institutionName: "",
      institution: {
        establishedTime: "",
        creditCode: "",
        registeredAddress: "",
        qualificationCategory: "",
        businessAddress: "",
        NameOfRepresentative: "",
        creditDepartment: "",
        license: "",
        registrationDepartment: "",
        legalEntityRegistrationUnit: "",
        trainType: "",
        institutionPhone: "",
        trainContent: "",
        trainObject: "",
        enrollmentScope: "",
        trainForm: ""
      },

      labels: {
        establishedTime: "设立时间",
        creditCode: "统一社会信用代码",
        registeredAddress: "注册地址",
        qualificationCategory: "资质类别",
        businessAddress: "实际经营地址",
        NameOfRepresentative: "法定代表姓名",
        creditDepartment: "发证机关",
        license: "办证许可证",
        registrationDepartment: "登记部门",
        legalEntityRegistrationUnit: "法人登记单位",
        trainType: "培训类别",
        institutionPhone: "机构电话",
        trainContent: "培训类别",
        trainObject: "培训对象",
        enrollmentScope: "招生范围",
        trainForm: "培训形式"
      }
    };
  },
  created() {
    getHome().then(res => {
      console.log(res);
      this.institutionName = res.data.data.institutionName;
      this.institution = res.data.data.institution;
    });
  },

  methods: {}
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
