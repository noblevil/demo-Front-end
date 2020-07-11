import request from '@/router/axios';
//根据orgId得到机构详情
export const getOrgTeacher = (orgAccount) => {
  return request({
    url: '/api/teachinfo/getOrgTeacherByOrgAccount',
    method: 'get',
    params: {
      orgAccount,
    }
  })
}
export const getOrgCourse = (orgAccount) => {
  return request({
    url: '/api/course/getOrgCourseByOrgAccount',
    method: 'get',
    params: {
      orgAccount,
    }
  })
}
