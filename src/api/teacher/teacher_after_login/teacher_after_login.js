import request from '@/router/axios';


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


//模糊搜索机构
export const seracrchOrg = (condition) =>{
  return request({
    url: '/api/orginfo/searchOrg',
    method: 'get',
    params:{
      condition,
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
