<template>
  <div>
  <div>
    <my-header></my-header>
  </div>
    <div class="complaintAddForm">
    <el-form :inline="true" ref="form" :model="addComplaintForm" label-width="100px">

        <el-col >新增投诉</el-col>
       <el-row>
         <el-form-item label="请选择区域：">
        <el-cascader
          size="large"
          :options="regionOptions"
          v-model="selectedOptions"
          @change="handleChange"
        >
        </el-cascader>
      </el-form-item>

            <el-form-item label="投诉类别：">
           <el-select v-model="addComplaintForm.complaintType" clearable placeholder="请选择">
             <el-option
               v-for="item in complaintTypeOptions"
               :key="item.value"
               :label="item.label"
               :value="item.value"
             ></el-option>
           </el-select>
         </el-form-item>
          </el-row>

    <el-row>
      <el-form-item label="投诉机构名称：" label-width="120px">
        <el-input style="width:360px" placeholder="请输入" v-model="addComplaintForm.complaintOrgName" clearable></el-input>
      </el-form-item>
     </el-row>

     <el-row>
       <el-form-item label="投诉标题：" label-width="120px">
         <el-input style="width:360px" placeholder="请输入" v-model="addComplaintForm.complaintTitle" clearable></el-input>
       </el-form-item>
      </el-row>

      <el-row>
        <el-form-item label="投诉内容：" label-width="120px">
          <el-input style="width:360px"    type="textarea"  :autosize="{ minRows: 3}" placeholder="请输入" v-model="addComplaintForm.complaintContent" clearable></el-input>
        </el-form-item>
       </el-row>

<el-button style="margin:0 auto" type="primary" @click="submit">提交</el-button>
    </el-form>
  </div>


</div>
</template>

<script>
import { regionData, CodeToText } from "element-china-area-data";
import { addComplaintList } from "@/api/home/home";
import myHeader from "@/components/home/my-header";

export default {
  components: {
    myHeader
  },
  data() {

    return {
      selectedOptions:'',
      regionOptions: regionData,

      complaintTypeOptions: [
        {
          value: "违规办学",
          label: "违规办学"
        },
        {
          value: "违规招生",
          label: "违规招生"
        },
        {
          value: "其他",
          label: "其他"
        }
      ],

      //添加表单
      addComplaintForm: {
        address: "",
        complaintType: "",
        complaintOrgName: "",
        complaintTitle:"",
        complaintContent:"",
      },
    }
  },

  methods:{
    handleChange() {
      var loc = "";
      for (let i = 0; i < this.selectedOptions.length; i++) {
        loc += CodeToText[this.selectedOptions[i]];
      }

      this.addComplaintForm.address = loc;
    },
  submit() {
    console.log(this.addComplaintForm.address),
    console.log(this.addComplaintForm.complaintType),
    console.log(this.addComplaintForm.complaintOrgName),
    console.log(this.addComplaintForm.complaintTitle),
    console.log(this.addComplaintForm.complaintContent),
    addComplaintList(
       this.addComplaintForm.address,
       this.addComplaintForm.complaintType,
       this.addComplaintForm.complaintOrgName,
       this.addComplaintForm.complaintTitle,
       this.addComplaintForm.complaintContent,
    ).then(res => {
      this.complaintList = res.data.data.complaintList;
    })
  },
}
}

</script>
