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
    data:{
      teachAccount:other.userName,//教师账户名
      teachPhone:profile.phoneNumber,//教师手机号
      teachEmail:profile.email,//教师邮箱
      passwd:other.userPassword,//教师密码
      teachName:profile.name,//教师姓名
      sex:profile.sex,//教师性别
      teachBirth:profile.birthDate,//教师出生日期
      teachingSubject:'',//教师授课学科
      isTeachQualifClass:other.teacherCertification,
      certificateNum:other.certificateNumber,
      professionalTitle:teacherDetail.title,
      countryNature:'',
      nationality:profile.region,
      highestEducation:teacherDetail.qualification,
      educationInstitution:teacherDetail.institutionWithQualification,
      highestDegree:teacherDetail.degree,
      degreeObtainedInstitution:teacherDetail.institutionWithDegree,
      major:teacherDetail.major,
      graduationDate:teacherDetail.graduatedDate,
      workType:'',
      idType:profile.certificateType,
      idNum:profile.certificateNumber,
      nativePlace:profile.nativePlace,
      politicalStatus:profile.politicalStatus,
      experiences:[],
    },
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
