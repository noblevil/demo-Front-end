import request from '@/router/axios';

//获取教师基本信息
export const getProfile = (teachAccount) =>{
  console.log(teachAccount)
  return request({
    url: '/api/teachinfo/getProfile',
    method: 'get',
    params:{
      teachAccount,
    }
  })
}

//根据teachAccount返回教师课程信息
export const getCourse= (teachAccount) => {
  return request({
    url: '/api/course/getTeachCourseByTeachAccount',
    method: 'get',
    params:{
      teachAccount,
    }
  })
}

//获取所有机构信息
export const getOrgList = () =>{
  return request({
    url: '/api/orginfo/getAllOrgList',
    method: 'get',
  })
}


//搜索机构
export const seracrchOrg = (condition) =>{
  return request({
    url: '/api/orginfo/searchOrg',
    method: 'get',
    params:{
      condition,
    }
  })
}

//教师所属机构的信息
export const getOrgByTeachAccount = (teachAccount) =>{
  return request({
    url: '/api/orginfo/getOrgByTeachAccount',
    method: 'get',
    params:{
      teachAccount,
    }
    
  })
}

//根据teachId、orgId和orgTeachStatus修改教师与机构间的状态
export const changeOrgTeachStatus = (teachId,orgId,orgTeachStatus) =>{
  return request({
    url: '/api/teachinfo/changeOrgTeachStatus',
    method: 'post',
    params:{
      teachId,
      orgId,
      orgTeachStatus
    }
    
  })
}

//获取教师的所有课程
export const getTeachCourseByTeachAccount = (teachAccount) =>{
  return request({
    url: '/api/course/getTeachCourseByTeachAccount',
    method: 'get',
    params:{
      teachAccount,
    }
  })
}
//根据teachId修改教师账户和教师信息
export const changeTeachByTeachId = (teachId,teachAccount,teachInfo) =>{
  console.log(teachInfo)
  return request({
    url: '/api/teachinfo/changeTeachByTeachId',
    method: 'post',
    data :{
      teachId,
      teachAccount,
      teachInfo
    }  
  })
}




/////////////////////////////////////////////
export const getDetail = (teachAccount) =>{
  console.log(teachAccount)
  return request({
    url: '/api/getDetail',
    method: 'post',
    data:{
      teachAccount:teachAccount,
    }

  })

}

export const getMyInstitution = (teachAccount) =>{
  console.log(teachAccount)
  return request({
    url: '/api/getMyInstitution',
    method: 'post',
    data:{
      teachAccount:teachAccount,
    }

  })

}

export const teacherLogin = (userName,passWord) =>{
  return request({
    url: '/api/teacherLogin',
    method: 'post',
    data:{
      userName:userName,
      passWord:passWord
    }

  })

}
