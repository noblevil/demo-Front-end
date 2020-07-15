<template>
  <div>
  <div>
    <my-header></my-header>
  </div>
  <div class="noticeDetail">
	    <h3  align="center">{{noticeList[0].noticeTitle}}</h3>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{noticeList[0].noticeContent}}</p>
      </div>
  </div>
</template>
<script>
import myHeader from "@/components/home/my-header";
import { getNoticeDetailById } from "@/api/home/home";

export default {
  components: {
    myHeader
  },
  data() {
        return {
          noticeList:[
          ],
        }
      },
   created() {
       this.noticeID = this.$route.params.noticeID;
       getNoticeDetailById(this.noticeID).then(res => {
         this.noticeList = res.data.data.noticeList;
         console.log("POLICYDETAIL policyTitle:   "+this.policyList[0].policyTitle);
       },
       );


     },
};
</script>
