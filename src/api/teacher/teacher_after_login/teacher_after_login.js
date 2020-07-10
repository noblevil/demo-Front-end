import request from '@/router/axios';


export const getProfile = (teachAccount) =>{
  console.log(teachAccount)
  return request({
    url: '/api/getProfile',
    method: 'post',
    data:{
      teachAccount:teachAccount,
    }

  })

}

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
