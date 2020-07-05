import request from '@/router/axios';

//根据orgId得到机构详情
export const getOrgDetailById = (orgId) => {



    return request({
        url: '/blade-demo/orginfo/getOrgDetailById',
        method: 'get',
        data: {
            orgId,

        }
    })
}

//根据orgId得到机构详情
export const getAllOrgList = () => {
    return request({
        url: '/blade-demo/orginfo/getAllOrgList',
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
        url: '/blade-demo/orginfo/queryOrgList',
        method: 'get',
        data: {
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
        url: '/blade-demo/teachinfo/getTeachListById',
        method: 'get',
        data: {
            orgId,

        }
    })
}

//根据orgId  得到机构所属的所有课程列表
export const getCourseListById = (orgId) => {



    return request({
        url: '/blade-demo/course/getCourseListById',
        method: 'get',
        data: {
            orgId,

        }
    })
}

//根据orgId  得到机构所属的所有班次列表
export const getClassCourseListById = (orgId) => {



    return request({
        url: '/blade-demo/course/getClassCourseListById',
        method: 'get',
        data: {
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
        url: '/balde-demo/teachinfo/queryTeachList',
        method: 'get',
        data: {
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
        url: '/blade-demo/course/queryCourseList',
        method: 'get',
        data: {
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
        url: '/blade-demo/course/queryClassCourseList',
        method: 'get',
        data: {
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





