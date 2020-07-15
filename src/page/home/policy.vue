<template>
  <div>
  <div>
    <my-header></my-header>
  </div>
  <div>
  <table  width="100%" >
    <tr>
      <td width="50%" valign="top">
         <div class="policy">
          <el-table :data="policyList.slice((policycurrentPage-1)*policypagesize,policycurrentPage*policypagesize)" width="50%">
            <el-table-column
            prop="policyID"
            label="政策"
            >
            <template slot-scope="scope">
               <a @click="gotoPolicyLink(scope.row)" target="_blank" class="buttonText">{{scope.row.policyTitle}}</a>
             </template>
            </el-table-column>
          </el-table>
          <el-pagination
              align="center"
              layout="prev, pager, next"
              :total="this.policyList.length"
              @current-change = 'policyhandleCurrentChange'
              :page-size="policypagesize">
          </el-pagination>
        </div>
      </td>

      <td width="50%" valign="top">
        <div class="notice">
          <el-table :data="noticeList.slice((noticecurrentPage-1)*noticepagesize,noticecurrentPage*noticepagesize)"  width="50%">
            <el-table-column
            prop="noticeID"
            label="通知公告"
            >
            <template slot-scope="scope">
               <a @click="gotoNoticeLink(scope.row)" target="_blank" class="buttonText">{{scope.row.noticeTitle}}</a>
             </template>
            </el-table-column>
          </el-table>
          <el-pagination
               align="center"
              layout="prev, pager, next"
              :total="this.noticeList.length"
              @current-change = 'noticehandleCurrentChange'
              :page-size="noticepagesize">
          </el-pagination>
        </div>
      </td>
    </tr>
  </table>
  </div>
  </div>
</template>

<script>
import myHeader from "@/components/home/my-header";

import { getAllPolicyList,getAllNoticeList } from "@/api/home/home";
export default {
  components: {
    myHeader
  },
  created() {
      getAllPolicyList().then(res => {
      this.policyList = res.data.data.policyList;
    });
    getAllNoticeList().then(res => {
      this.noticeList = res.data.data.noticeList;
    });
  },
  data(){
    return{
      //分页信息
      policytotal: 0,
      policypagesize: 10,
      policycurrentPage: 1,
      //分页信息
      noticetotal: 0,
      noticepagesize: 10,
      noticecurrentPage: 1,

      policyList:[],
      noticeList:[],
      // policyList:[
      //   {policyTitle:"click here"},
      //   {policyTitle:"click me"},
      //   {policyTitle:"I'm here"},
      // ],
      // noticeList:[
      //   {noticeTitle:"click here!!!"},
      //   {noticeTitle:"click me"},
      // ],
    }
  },
  methods:{
    gotoPolicyLink(row) {
      //点击跳转至上次浏览页面
      // this.$router.go(-1)
      //指定跳转地址
      //.replace("/orgDetail");
      console.log("row.policyID：  "+row.policyID);
      this.$router.push({
        name: "policyDetail",
        params: {
          policyID: row.policyID
        }
      });

    },
   gotoNoticeLink(row) {
      this.$router.push({
        name: "noticeDetail",
        params: {
          noticeID: row.noticeID
        }
      });
    },
    policyhandleCurrentChange:function(policycurrentPage){
               this.policycurrentPage = policycurrentPage;
           },
    noticehandleCurrentChange:function(noticecurrentPage){
                      this.noticecurrentPage = noticecurrentPage;
                  },
  }
};
</script>
