<template>
  <div>
  <div>
    <my-header></my-header>
  </div>
  <div>
  <table  width="100%" >
    <tr>
      <td width="50%">
         <div class="policy">
          <el-table :data="policyList" width="50%">
            <el-table-column
            prop="policyTitle"
            label="政策"
            >
            <!-- <a href="www.baidu.com">href</a> -->
            <!-- <template slot-scope="scope">
              <el-button @click="gotolink(scope.row)" type="text" size="small"
              v-for="policy in policyList"
              >{{policy.policyTitle}}</el-button>
            </template> -->
            <ol>
                <!-- <li v-for="policy in policyList">
                  {{ policy.policyTitle }}
                </li> -->
                <li>
                  {{policyList.policyTitle}}
                </li>
              </ol>
            </el-table-column>
          </el-table>
        </div>
      </td>

      <td width="50%">
        <div class="notice">
          <el-table :data="noticeList"  width="50%">
            <el-table-column
            prop="noticeTitle"
            label="通知公告"
            ></el-table-column>
          </el-table>
        </div>
      </td>
    </tr>
  </table>
  </div>
  </div>
</template>
<script>
import myHeader from "@/components/home/my-header";

export default {
  components: {
    myHeader
  },
  data(){
    return{
      policyList:[
        {policyTitle:"click here"},
        {policyTitle:"click me"},
        {policyTitle:"I'm here"},
      ],
      noticeList:[
        {noticeTitle:"click here!!!"},
        {noticeTitle:"click me"},

      ],
      title:"hhhh",
    }
  },
  methods:{
    gotolink(row) {
      //点击跳转至上次浏览页面
      // this.$router.go(-1)
      //指定跳转地址
      //.replace("/orgDetail");
      this.$router.push({
        //path: "/orgDetail",
        name: "orgDetail",
        params: {
          orgId: row.orgId
        }
      });
    }
  }
};
</script>
