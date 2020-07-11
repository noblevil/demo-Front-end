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
