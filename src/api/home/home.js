import request from '@/router/axios';

//根据orgId得到机构详情
export const getOrgDetailById = (orgId) => {



    return request({
        url: '/api/blade-demo/orginfo/getOrgDetailById',
        method: 'get',
        params: {
            orgId,
        }
    })
}

//根据orgId得到机构详情
export const getAllOrgList = () => {
    return request({
        url: '/api/blade-demo/orginfo/getAllOrgList',
        method: 'get',
    })
}

//根据 筛选 得到机构列表
export const queryOrgList = (
    orgName,
    oftenAddress,
    trainType,
    trainSubject,
    trainForm) => {

    return request({
        url: '/api/blade-demo/orginfo/queryOrgList',
        method: 'get',

        params: {
            orgName,
            oftenAddress,
            trainType,
            trainSubject,
            trainForm
        }
    })


}

//根据orgId  得到机构所属的所有教师列表
export const getTeachListById = (orgId) => {



    return request({
        url: '/api/blade-demo/teachinfo/getTeachListById',
        method: 'get',
        params: {
            orgId,

        }
    })
}

//根据orgId  得到机构所属的所有课程列表
export const getCourseListById = (orgId) => {



    return request({
        url: '/api/blade-demo/course/getCourseListById',
        method: 'get',
        params: {
            orgId,

        }
    })
}

//根据orgId  得到机构所属的所有班次列表
export const getClassCourseListById = (orgId) => {



    return request({
        url: '/api/blade-demo/course/getClassCourseListById',
        method: 'get',
        params: {
            orgId,

        }
    })
}

//根据 筛选 得到教师列表
export const queryTeachList = (
    // 筛选条件部分缺少资格种类
    orgId,
    teachName,
    sex,
    countryNature,
    workType,
    teachQualifClass,
    isTeachQualifCert,
    teachingSubject,
) => {

    return request({
        url: '/api/blade-demo/teachinfo/queryTeachList',

        method: 'get',
        params: {
            orgId,
            teachName,
            sex,
            countryNature,
            workType,
            teachQualifClass,
            isTeachQualifCert,
            teachingSubject,
        }
    })


}

//根据 筛选 得到课程列表
export const queryCourseList = (
    orgId,
    courseLevel,
    courseSubject,
    studentRank,
    studentGrade
) => {

    return request({
        url: '/api/blade-demo/course/queryCourseList',
        method: 'get',
        params: {
            orgId,
            courseLevel,
            courseSubject,
            studentRank,
            studentGrade
        }
    })


}

//根据 筛选 得到班次列表
export const queryClassCourseList = (
    orgId,
    courseSubject,
    studentGrade,
    CourseClassName,
    teachName,
    startDate,
    endDate
) => {

    return request({
        url: '/api/blade-demo/course/queryClassCourseList',
        method: 'get',
        params: {
            orgId,
            courseSubject,
            studentGrade,
            CourseClassName,
            teachName,
            startDate,
            endDate

        }
    })


}

//获取所有投诉列表-xxy
export const getAllComplaintList = () => {
    return request({
        url: '/api/AllComplaintList',
        method: 'get',
    })
}


//根据 筛选 得到投诉列表-xxy
export const queryComplaintList = (
      //address,
      //complaintType,
      complaintOrgName,
       ) => {
         return request({
        url: '/api/queryComplaintList',
        method: 'get',
        data: {
            //address,
            //complaintType,
            complaintOrgName,
        }
    },
    console.log(complaintOrgName))

}
//新增投诉列表-xxy
export const addComplaintList = (
      address,
      complaintType,
      complaintOrgName,
      complaintTitle,
      complaintContent,
       ) => {
         return request({
        url: '/api/queryComplaintList',
        method: 'post',
        data: {
          address,
          complaintType,
          complaintOrgName,
          complaintTitle,
          complaintContent,
        }
    },
    console.log(address),
    console.log(complaintType),
    console.log(complaintOrgName),
    console.log(complaintTitle),
    console.log(complaintContent)
    
    )

}
