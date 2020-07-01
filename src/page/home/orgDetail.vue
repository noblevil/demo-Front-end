<template>
  <div>
    <div>
      <my-header></my-header>
    </div>

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
    <div>
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="机构位置" name="first">地图插件</el-tab-pane>
        <el-tab-pane label="教师介绍" name="second">
          <el-form ref="form" :model="queryTeacherForm" label-width="80px">
            <el-form-item label="教师名称">
              <el-input v-model="queryTeacherForm.name"></el-input>
            </el-form-item>

            <el-form-item label="性别">
              <el-select v-model="queryTeacherForm.sex" clearable placeholder="请选择">
                <el-option
                  v-for="(item, index) in sexOptions"
                  :key="index"
                  :value="index"
                  :label="item"
                ></el-option>
              </el-select>
            </el-form-item>

            <el-form-item label="国籍性质">
              <!-- <select-country v-model="queryTeacherForm.country"></select-country> -->
              <el-select v-model="queryTeacherForm.countryNature" clearable placeholder="请选择">
                <el-option
                  v-for="(item, index) in countryNatureOptions"
                  :key="index"
                  :value="index"
                  :label="item"
                ></el-option>
              </el-select>
            </el-form-item>

            <el-form-item label="工作类型">
              <el-select v-model="queryTeacherForm.workType" clearable placeholder="请选择">
                <el-option
                  v-for="(item, index) in workTypeOptions"
                  :key="index"
                  :value="index"
                  :label="item"
                ></el-option>
              </el-select>
            </el-form-item>

            <el-form-item label="任教资格分类">
              <el-select v-model="queryTeacherForm.teachQualifClass" clearable placeholder="请选择">
                <el-option
                  v-for="(item, index) in teachQualifClassOptions"
                  :key="index"
                  :value="index"
                  :label="item"
                ></el-option>
              </el-select>
            </el-form-item>

            <el-form-item label="资格种类">
              <el-select v-model="queryTeacherForm.qualifClass" clearable placeholder="请选择">
                <el-option
                  v-for="(item, index) in qualifClassOptions"
                  :key="index"
                  :value="index"
                  :label="item"
                ></el-option>
              </el-select>
            </el-form-item>

            <el-form-item label="任教学科">
              <el-input v-model="queryTeacherForm.subject"></el-input>
            </el-form-item>
          </el-form>

          <el-table :data="teachers" stripe style="width: 100%">
            <el-table-column prop="teachName" label="教师姓名" width="180"></el-table-column>
            <el-table-column prop="countryNature" label="国籍性质" width="180"></el-table-column>
            <el-table-column prop="nationality" label="国籍" width="180"></el-table-column>
            <el-table-column
              prop="sex"
              label="性别"
              :filters="[{ text: '男', value: '男' }, { text: '女', value: '女' }, { text: '未知', value: '未知' }]"
              :filter-method="filterSex"
            ></el-table-column>
            <el-table-column prop="highestEducation" label="最高学历"></el-table-column>
            <el-table-column prop="course" label="目前任教课程"></el-table-column>
            <el-table-column prop="workType" label="工作类型"></el-table-column>
            <el-table-column prop="teachQualifClass" label="任教资格分类"></el-table-column>
            <el-table-column prop="department" label="资格种类"></el-table-column>number
            <el-table-column prop="subject" label="任课学科"></el-table-column>
            <el-table-column prop="number" label="证书号码"></el-table-column>
          </el-table>
        </el-tab-pane>
        <el-tab-pane label="课程介绍" name="third">
          <el-form ref="form" :model="queryTeacherForm" label-width="80px">
            <el-form-item label="级别">
              <el-select v-model="queryCourseForm.coursegrade" clearable placeholder="请选择">
                <el-option
                  v-for="(item, index) in coursegradeOptions"
                  :key="index"
                  :value="index"
                  :label="item"
                ></el-option>
              </el-select>
            </el-form-item>

            <el-form-item label="学科">
              <el-select v-model="queryTeacherForm.trainSubject" clearable placeholder="请选择">
                <el-option
                  v-for="item in trainSubjectOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>

            <el-form-item label="招生对象学段">
              <el-select v-model="queryTeacherForm.studentRank" clearable placeholder="请选择">
                <el-option
                  v-for="(item, index) in studentRankOptions"
                  :key="index"
                  :value="index"
                  :label="item"
                ></el-option>
              </el-select>
            </el-form-item>

            <el-form-item label="招生对象年级">
              <el-select v-model="queryTeacherForm.studentGrade" clearable placeholder="请选择">
                <el-option
                  v-for="(item, index) in studentGradeOptions"
                  :key="index"
                  :value="index"
                  :label="item"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-form>

          <el-table :data="courses" stripe style="width: 100%">
            <el-table-column prop="level" label="级别" width="180"></el-table-column>
            <el-table-column prop="subject" label="学科" width="180"></el-table-column>
            <el-table-column prop="objGrade" label="对象年级" width="180"></el-table-column>
            <el-table-column prop="courseName" label="课程名称" width="180"></el-table-column>
            <el-table-column prop="textbook" label="教材"></el-table-column>
            <el-table-column prop="publishingCompany" label="出版社"></el-table-column>
            <el-table-column prop="isbnCode" label="发行号ISBN"></el-table-column>
          </el-table>
        </el-tab-pane>
        <el-tab-pane label="班次介绍" name="fourth">
          <el-form ref="form" :model="queryClassForm" label-width="80px">
            <el-form-item label="年级">
              <el-select v-model="queryClassForm.studentGrade" clearable placeholder="请选择">
                <el-option
                  v-for="(item, index) in studentGradeOptions"
                  :key="index"
                  :value="index"
                  :label="item"
                ></el-option>
              </el-select>
            </el-form-item>

            <el-form-item label="学科">
              <el-select v-model="queryClassForm.trainSubject" clearable placeholder="请选择">
                <el-option
                  v-for="item in trainSubjectOptions"
                  :key="item.value"
                  :value="item.value"
                  :label="item.label"
                ></el-option>
              </el-select>
            </el-form-item>

            <el-form-item label="班级名称">
              <el-input v-model="queryClassForm.className"></el-input>
            </el-form-item>

            <el-form-item label="授课教师">
              <el-input v-model="queryClassForm.teacherName"></el-input>
            </el-form-item>

            <el-form-item label="课程起止日期">
              <el-date-picker
                v-model="queryClassForm.startTime"
                type="date"
                placeholder="开始日期"
                :picker-options="pickerOptions0"
              ></el-date-picker>
              <el-date-picker
                v-model="queryClassForm.endTime"
                type="date"
                placeholder="结束日期"
                :picker-options="pickerOptions1"
              ></el-date-picker>
            </el-form-item>
          </el-form>

          <el-table :data="classCourses" stripe style="width: 100%">
            <el-table-column prop="studentGrade" label="年级" width="180"></el-table-column>
            <el-table-column prop="trainSubject" label="学科" width="180"></el-table-column>
            <el-table-column prop="className" label="班级名称" width="180"></el-table-column>
            <el-table-column prop="studentNum" label="计划招生人数"></el-table-column>
            <el-table-column prop="teacherName" label="授课教师" width="180"></el-table-column>
            <el-table-column prop="startTime" label="课程开始日期" width="180"></el-table-column>
            <el-table-column prop="endTime" label="课程结束日期" width="180"></el-table-column>
            <el-table-column prop="FirstTime" label="课程上课日期"></el-table-column>
          </el-table>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
//自定义组件
import myHeader from "@/components/home/my-header";
import selectCountry from "@/components/demo/select-country";
import {
  getOrgDetail,
  getTeacherListByOrgId,
  getCourseListByOrgId,
  getClassCourseListByOrgId
} from "@/api/home/home";

export default {
  components: {
    selectCountry,
    myHeader
  },

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
      },

      countryNatureOptions: {
        0: "中国",
        1: "港澳台",
        2: "外国"
      },
      sexOptions: {
        0: "男",
        1: "女",
        2: "未知"
      },
      workTypeOptions: {
        0: "全职",
        1: "兼职"
      },
      teachQualifClassOptions: { 0: "教师资格证", 1: "外专证", 2: "无" },
      qualifClassOptions: {
        0: "小学教师资格",
        1: "初级中学教师资格",
        2: "高级中学教师资格",
        3: "高等学校教师资格",
        4: "其他"
      },

      coursegradeOptions: {
        0: "初级",
        1: "中级",
        2: "高级"
      },
      trainSubjectOptions: [
        {
          value: 0,
          label: "语文"
        },
        {
          value: 1,
          label: "数学"
        },
        {
          value: 2,
          label: "英语"
        },
        {
          value: 3,
          label: "物理"
        },
        {
          value: 4,
          label: "化学"
        },
        {
          value: 5,
          label: "生物"
        },
        {
          value: 6,
          label: "历史"
        },
        {
          value: 7,
          label: "地理"
        },

        {
          value: 8,
          label: "政治"
        }
      ],
      studentRankOptions: {
        0: "小学",
        1: "初中",
        2: "高中",
        3: "中高职学生",
        4: "大学生",
        5: "幼儿",
        6: "成人",
        7: "老年"
      },
      studentGradeOptions: {
        1: "一年级",
        2: "二年级",
        3: "三年级",
        4: "四年级",
        5: "五年级",
        6: "六年级",
        7: "七年级",
        8: "八年级",
        9: "高一",
        10: "高二",
        11: "高三",
        0: "其他"
      },

      //教师查询表单
      queryTeacherForm: {
        name: "",
        sex: "",
        countryNature: "",
        workType: "",
        teachQualifClass: "",
        qualifClass: "",
        subject: ""
      },
      //课程查询表单
      queryCourseForm: {
        coursegrade: "",
        trainSubject: "",
        studentRank: "",
        studentGrade: ""
      },
      //班次查询表单
      queryClassForm: {
        trainSubject: "",
        studentGrade: "",
        className: "",
        teacherName: "",
        startTime: "",
        endTime: ""
      },

      activeName: "first",

      //教师列表
      teachers: [],

      //课程列表
      courses: [],

      //班次列表
      classCourses: [],

      //机构的ID
      orgId: ""
    };
  },
  created() {
    //得到传来的参数 orgId
    this.orgId = this.$route.params.orgId;

    getOrgDetail(this.orgId).then(res => {
      this.institutionName = res.data.data.institutionName;
      this.institution = res.data.data.institution;
    });

    //得到教师的列表
    getTeacherListByOrgId(this.orgId).then(res => {
      this.teachers = res.data.data.teachers;
    });

    //得到课程的列表
    getCourseListByOrgId(this.orgId).then(res => {
      this.courses = res.data.data.courses;
    });
    //得到班次的列表
    getClassCourseListByOrgId(this.orgId).then(res => {
      this.classCourses = res.data.data.classCourses;
    });
  },

  methods: {
    filterSex(value, row) {
      return row.sex === value;
    }
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
