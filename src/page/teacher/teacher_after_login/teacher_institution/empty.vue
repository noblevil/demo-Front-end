<template>
<div></div>    
</template>
<script>
export default {
    data(){
        if(this.$route.query.name=="institution"){
        this.$router.push({path: "/teacher-after-login/teacher-institution"});
        }
        else if(this.$route.query.name=="profile"){
            this.$router.push({path: "/teacher-after-login/teacher-profile"});
        }
        else if(this.$route.query.name=="detail"){
            this.$router.push({path: "/teacher-after-login/teacher-detail"});
        }
        else if(this.$route.query.name=="other"){
            this.$router.push({path: "/teacher-after-login/teacher-other"});
        }
        return{}
    }
}
</script>