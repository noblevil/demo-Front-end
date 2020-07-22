import request from '@/router/axios';

//根据orgAccount获取机构下属教师
export const getOrgTeacher = (orgAccount) => {
  return request({
    url: '/api/teachinfo/getOrgTeacherByOrgAccount',
    method: 'get',
    params: {
      orgAccount,
    }
  })
}

//根据orgName获取机构下属课程信息
export const getOrgCourse = (orgAccount) => {
  return request({
    url: '/api/course/getOrgCourseByOrgAccount',
    method: 'get',
    params: {
      orgAccount,
    }
  })
}

//新增课程
export const addCourse = (params
  ) => {
  return request({
    url: '/api/course/addCourse',
    method: 'post',
    headers:{'content-Type':'application/json'},
    data: params
  })
}

//新增教师
export const orgAddTeach = (mailbox,setTeachAccount,orgAccount) => {
  return request({
    url: '/api/teachinfo/orgAddTeach',
    method: 'post',
    params: {
      mailbox,
      setTeachAccount,
      orgAccount
    }
  })
}

//删除教师
export const orgRemoveTeach = (orgAccount,teachId,) => {
  return request({
    url: '/api/teachinfo/orgRemoveTeach',
    headers:{'content-Type':'application/json'},
    method: 'post',
    params: {
      orgAccount,
      teachId
    }
  })
}

//修改信息
export const updateCourseInfo=(parmas)=>{
  return request({
    url:'/api/course/updateCourseInfo',
    headers:{'content-Type':'application/json'},
    method:'post',
    data:parmas
  })
}

//根据 筛选 得到教师列表
export const queryTeachList = (
  orgAccount,
  teachName,
  sex,
  teachingSubject,
) => {
  return request({
    url: '/api/teachinfo/queryTeachList',
    method: 'get',
    params: {
      orgAccount,
      teachName,
      sex,
      teachingSubject,
    }
  })
}

//删除课程
export const deleteCourse = (orgAccount,courseId) => {
  return request({
    url: '/api/course/deleteCourse',
    method: 'post',
    params:{
      orgAccount,
      courseId
    }
  })
}


export const getOrginfo = (orgAccount) => {
  return request({
    url: '/api/orginfo/getOrgInfo',
    method: 'get',
    params: {
      orgAccount,
    }
  })
}

export const UpdateOrgAccountInfo = (params
) => {
  return request({
    url: '/api/orginfo/UpdateOrgAccountInfo',
    method: 'post',
    headers:{'content-Type':'application/json'},
    data: params
  })
}

export const UpdateOrgInfo = (params
) => {
  return request({
    url: '/api/orginfo/UpdateOrgInfo',
    method: 'post',
    headers:{'content-Type':'application/json'},
    data: params
  })
}

export const inserOrhInfo = (params
) => {
  return request({
    url: '/api/orginfo/insertOrgInfo',
    method: 'post',
    headers:{'content-Type':'application/json'},
    data: params
  })
}
