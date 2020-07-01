import request from '@/router/axios';

//根据orgId得到机构详情
export const getOrgDetail = (orgId) => {



    return request({
        url: '/api/orgDetail',
        method: 'get',
        data: {
            orgId,

        }
    })
}

//根据orgId得到机构详情
export const getAllOrgList = () => {
    return request({
        url: '/api/AllOrgList',
        method: 'get',
    })
}

//根据 筛选 得到机构列表
export const queryOrgList = (
    orgName,
    address,
    trainType,
    trainSubject,
    trainForm) => {

    return request({
        url: '/api/queryOrgList',
        method: 'get',
        data: {
            orgName,
            address,
            trainType,
            trainSubject,
            trainForm
        }
    })


}

//根据orgId  得到机构所属的所有教师列表
export const getTeacherListByOrgId = (orgId) => {



    return request({
        url: '/api/teacherListByOrgId',
        method: 'get',
        data: {
            orgId,

        }
    })
}

//根据orgId  得到机构所属的所有课程列表
export const getCourseListByOrgId = (orgId) => {



    return request({
        url: '/api/courseListByOrgId',
        method: 'get',
        data: {
            orgId,

        }
    })
}

//根据orgId  得到机构所属的所有班次列表
export const getClassCourseListByOrgId = (orgId) => {



    return request({
        url: '/api/classCourseListByOrgId',
        method: 'get',
        data: {
            orgId,

        }
    })
}

//根据 筛选 得到教师列表
export const queryTeacherList = (
    orgId,
) => {

    return request({
        url: '/api/queryTeacherList',
        method: 'get',
        data: {
            orgId,

        }
    })


}

//根据 筛选 得到课程列表
export const queryCourseList = (
    orgId,
) => {

    return request({
        url: '/api/queryTeacherListList',
        method: 'get',
        data: {
            orgId,

        }
    })


}

//根据 筛选 得到班次列表
export const queryClassCourseList = (
    orgId,
) => {

    return request({
        url: '/api/queryTeacherListList',
        method: 'get',
        data: {
            orgId,

        }
    })


}





