import request from '@/router/axios';

export  const teacherRegister = (profile,myInstitution,teacherDetail,experiences,other) => {
  console.log('////////')
  console.log(profile)
  console.log(myInstitution)
  console.log(teacherDetail)
  console.log(experiences)
  console.log(other)
  return request({
    url: '/api/teacherRegister/',
    method: 'post',
    data:{},
  })
}


export  const UploadFiles = (formData) => {
  console.log(formData)
  return request({
    url: '/api/other',
    method: 'post',
    data: formData,

  })
}

export const getInstitution = () =>{

}
