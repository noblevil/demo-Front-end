<template>
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
          <el-table-column prop="compName" label="教师姓名" width="180"></el-table-column>
          <el-table-column prop="code" label="国籍姓名" width="180"></el-table-column>
          <el-table-column prop="number" label="国籍" width="180"></el-table-column>
          <el-table-column
            prop="sex"
            label="性别"
            :filters="[{ text: '男', value: '男' }, { text: '女', value: '女' }, { text: '未知', value: '未知' }]"
            :filter-method="filterSex"
          ></el-table-column>
          <el-table-column prop="department" label="最高学历"></el-table-column>
          <el-table-column prop="department" label="目前任教课程"></el-table-column>
          <el-table-column prop="department" label="工作类型"></el-table-column>
          <el-table-column prop="department" label="任教资格分类"></el-table-column>
          <el-table-column prop="department" label="资格种类"></el-table-column>
          <el-table-column prop="department" label="任课学科"></el-table-column>
          <el-table-column prop="department" label="证书号码"></el-table-column>
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
          <el-table-column prop="compName" label="级别" width="180"></el-table-column>
          <el-table-column prop="compName" label="学科" width="180"></el-table-column>
          <el-table-column prop="code" label="对象年级" width="180"></el-table-column>
          <el-table-column prop="number" label="课程名称" width="180"></el-table-column>
          <el-table-column prop="department" label="课程班次"></el-table-column>
          <el-table-column prop="department" label="课程总课次"></el-table-column>
          <el-table-column prop="department" label="教材"></el-table-column>
          <el-table-column prop="department" label="出版社"></el-table-column>
          <el-table-column prop="department" label="发行号ISBN"></el-table-column>
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
          <el-table-column prop="compName" label="年级" width="180"></el-table-column>
          <el-table-column prop="code" label="学科" width="180"></el-table-column>
          <el-table-column prop="number" label="班级名称" width="180"></el-table-column>
          <el-table-column prop="department" label="计划招生人数"></el-table-column>
          <el-table-column prop="compName" label="授课教师" width="180"></el-table-column>
          <el-table-column prop="code" label="课程开始日期" width="180"></el-table-column>
          <el-table-column prop="number" label="课程结束日期" width="180"></el-table-column>
          <el-table-column prop="department" label="课程上课日期"></el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import selectCountry from "@/components/demo/select-country";

export default {
  components: {
    selectCountry
  },
  data() {
    return {
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
        endTine: ""
      },

      activeName: "first",
      teachers: [
        {
          compName: "刘晓洋",
          sex: "男"
        },
        {
          compName: "王大鱼",
          sex: "男"
        },
        {
          compName: "李醍醐",
          sex: "女"
        }
      ]
    };
  },

  methods: {
    filterSex(value, row) {
      return row.sex === value;
    }
  }
};
</script>
