<template>
  <div>
  <div>
    <my-header></my-header>
  </div>
  <div class="policyDetail">
	    <h3 align="center">{{policyList[0].policyTitle}}</h3>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{policyList[0].policyContent}}</p>
      </div>
  </div>
</template>
<script>
import myHeader from "@/components/home/my-header";
import { getPolicyDetailById } from "@/api/home/home";

export default {
  components: {
    myHeader
  },
  data() {
        return {
          policyList:[
          ],
        }
      },
   created() {
       this.policyID = this.$route.params.policyID;
       this.noticeID = this.$route.params.noticeID;
       console.log("POLICYDETAIL policyID:   "+this.policyID);

       getPolicyDetailById(this.policyID).then(res => {
         this.policyList = res.data.data.policyList;
         //this.policyList = res.data.data.policyList;
         console.log("啦啦啦啦啦啦");
         //console.log(res);
         console.log(this.policyList);
         //alert(this.policyList);
         //var json=JSON.stringify(this.policyList);
         //alert(json);
         //var policy = alert(JSON.stringify(this.policyList)).policyTitle;

         //alert(JSON.parse(JSON.stringify(this.policyList)).policyTitle);
         console.log("POLICYDETAIL policyTitle:   "+this.policyList[0].policyTitle);
       },
       //console.log("POLICYDETAIL policyTitle:   "+this.policyList.policyTitle);
       );


     },
};
</script>
