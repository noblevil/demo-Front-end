import Layout from '@/page/index/'

export default [
  {
    path: "/orgDetail",
    name: 'orgDetail',
    component: () =>
      import( /* webpackChunkName: "page" */ '@/page/home/orgDetail'),
    meta: {
      keepAlive: true,
      isTab: false,
      isAuth: false
    }
  },

  {
    path: '/home',
    name: '我的测试页',
    component: () =>
      import( /* webpackChunkName: "page" */ '@/page/home/home'),
    meta: {
      keepAlive: true,
      isTab: false,
      isAuth: false
    }
  },
  {
    path: '/complaint',
    name: '网上投诉',
    component: () =>
      import( /* webpackChunkName: "page" */ '@/page/home/complaint'),
    meta: {
      keepAlive: true,
      isTab: false,
      isAuth: false
    }
  },
  {
    path: '/addComplaint',
    name: '新增投诉',
    component: () =>
      import( /* webpackChunkName: "page" */ '@/page/home/addComplaint'),
    meta: {
      keepAlive: true,
      isTab: false,
      isAuth: false
    }
  },

  {
    path: '/policy',
    name: '我的测试页',
    component: () =>
      import( /* webpackChunkName: "page" */ '@/page/home/policy'),
    meta: {
      keepAlive: true,
      isTab: false,
      isAuth: false
    }
  },

  {
    path: '/userlogin',
    name: '我的测试页',
    component: () =>
      import( /* webpackChunkName: "page" */ '@/page/home/login'),
    meta: {
      keepAlive: true,
      isTab: false,
      isAuth: false
    }
  },
  {
    path: '/register',
    name: '我的测试页',
    component: () =>
      import( /* webpackChunkName: "page" */ '@/page/home/register'),
    meta: {
      keepAlive: true,
      isTab: false,
      isAuth: false
    }
  },
  {
    path: '/test',
    name: '我的测试页',
    component: () =>
      import( /* webpackChunkName: "page" */ '@/page/test/test'),
    meta: {
      keepAlive: true,
      isTab: false,
      isAuth: false
    }
  },
  {
    path: '/test1',
    name: '我的测试页',
    component: () =>
      import( /* webpackChunkName: "page" */ '@/page/test/test1'),
    meta: {
      keepAlive: true,
      isTab: false,
      isAuth: false
    }
  },
  {
    path: '/test3',
    name: '我的测试页',
    component: () =>
      import( /* webpackChunkName: "page" */ '@/page/test/test3'),
    meta: {
      keepAlive: true,
      isTab: false,
      isAuth: false
    }
  },

  {
    path: '/index/complaint',
    name: '登录页',
    component: () =>
      import( /* webpackChunkName: "page" */ '@/views/demo/complaint'),
    meta: {
      keepAlive: true,
      isTab: false,
      isAuth: false
    }
  },
  {

    path: '/login',
    name: '登录页',
    component: () =>
      import( /* webpackChunkName: "page" */ '@/page/login/index'),
    meta: {
      keepAlive: true,
      isTab: false,
      isAuth: false
    }
  },
  {
    path: '/lock',
    name: '锁屏页',
    component: () =>
      import( /* webpackChunkName: "page" */ '@/page/lock/index'),
    meta: {
      keepAlive: true,
      isTab: false,
      isAuth: false
    }
  },
  {
    path: '/404',
    component: () =>
      import( /* webpackChunkName: "page" */ '@/components/error-page/404'),
    name: '404',
    meta: {
      keepAlive: true,
      isTab: false,
      isAuth: false
    }

  },
  {
    path: '/403',
    component: () =>
      import( /* webpackChunkName: "page" */ '@/components/error-page/403'),
    name: '403',
    meta: {
      keepAlive: true,
      isTab: false,
      isAuth: false
    }
  },
  {
    path: '/500',
    component: () =>
      import( /* webpackChunkName: "page" */ '@/components/error-page/500'),
    name: '500',
    meta: {
      keepAlive: true,
      isTab: false,
      isAuth: true
    }
  },
  {
    path: '/',
    name: '主页',
    redirect: '/wel'
  },
  {
    path: '/myiframe',
    component: Layout,
    redirect: '/myiframe',
    children: [{
      path: ":routerPath",
      name: 'iframe',
      component: () =>
        import( /* webpackChunkName: "page" */ '@/components/iframe/main'),
      props: true
    }]

  },

  //teacher-login
  {
    path: '/teacher-login',
    name: '教师主界面',
    component: () =>
      import( /* webpackChunkName: "page" */ '@/page/teacher/teacher_login/teacher_login/teacher_login'),
    meta: {
      keepAlive: true,
      isTab: false,
      isAuth: false
    }
  },
  //teacher-after-login
  {
    path: '/teacher-after-login/teacher-home',
    name: '教师主界面',
    component: () =>
      import( /* webpackChunkName: "page" */ '@/page/teacher/teacher_after_login/teacher_home/teacher_home'),
    meta: {
      keepAlive: true,
      isTab: false,
      isAuth: false
    }
  },
  {
    path: '/teacher-after-login/teacher-course-detail',
    name: '课程详情',
    component: () =>
      import( /* webpackChunkName: "page" */ '@/page/teacher/teacher_after_login/teacher_course_detail/teacher_course_detail'),
    meta: {
      keepAlive: true,
      isTab: false,
      isAuth: false
    }
  },
  {
    path: '/teacher-after-login/teacher-institution',
    name: '信息维护所在培训机构',
    component: () =>
      import( /* webpackChunkName: "page" */ '@/page/teacher/teacher_after_login/teacher_institution/teacher_institution'),
    meta: {
      keepAlive: true,
      isTab: false,
      isAuth: false
    }
  },
  {
    path: '/teacher-after-login/teacher-detail',
    name: '信息维护学历专业技术职称',
    component: () =>
      import( /* webpackChunkName: "page" */ '@/page/teacher/teacher_after_login/teacher_detail/teacher_detail'),
    meta: {
      keepAlive: true,
      isTab: false,
      isAuth: false
    }
  },
  {
    path: '/teacher-after-login/teacher-profile',
    name: '信息维护基本信息',
    component: () =>
      import( /* webpackChunkName: "page" */ '@/page/teacher/teacher_after_login/teacher_profile/teacher_profile'),
    meta: {
      keepAlive: true,
      isTab: false,
      isAuth: false
    }
  },
  {
    path: '/teacher-after-login/teacher-experience',
    name: '信息维护工作经历',
    component: () =>
      import( /* webpackChunkName: "page" */ '@/page/teacher/teacher_after_login/teacher_experience/teacher_experience'),
    meta: {
      keepAlive: true,
      isTab: false,
      isAuth: false
    }
  },
  {
    path: '/teacher-after-login/teacher-other',
    name: '信息维护其他',
    component: () =>
      import( /* webpackChunkName: "page" */ '@/page/teacher/teacher_after_login/teacher_other/teacher_other'),
    meta: {
      keepAlive: true,
      isTab: false,
      isAuth: false
    }
  },
  {
    path: '/teacher-after-login/teacher-password',
    name: '修改密码',
    component: () =>
      import( /* webpackChunkName: "page" */ '@/page/teacher/teacher_after_login/teacher_password/teacher_password'),
    meta: {
      keepAlive: true,
      isTab: false,
      isAuth: false
    }
  },
  {
    path: '/teacher-after-login/teacher-test',
    name: '测试页',
    component: () =>
      import( /* webpackChunkName: "page" */ '@/page/teacher/teacher_after_login/teacher_test/teacher_test'),
    meta: {
      keepAlive: true,
      isTab: false,
      isAuth: false
    }
  },
  {
    path: '/teacher-after-login/empty',
      name: '空白页',
      component: () =>
        import( /* webpackChunkName: "page" */ '@/page/teacher/teacher_after_login/teacher_institution/empty'),
      meta: {
        keepAlive: true,
        isTab: false,
        isAuth: false
      }
    },
  //teacher_register
  {
    path: '/teacher-register/register-profile',
    name: '教师注册基本信息',
    component: () =>
      import( /* webpackChunkName: "page" */ '@/page/teacher/teacher_register/register_profile/register_profile'),
    meta: {
      keepAlive: true,
      isTab: false,
      isAuth: false
    }
  },
  {
    path: '/teacher-register/register-institution',
    name: '教师注册所在培训机构',
    component: () =>
      import( /* webpackChunkName: "page" */ '@/page/teacher/teacher_register/register_institution/register_institution'),
    meta: {
      keepAlive: true,
      isTab: false,
      isAuth: false
    }
  },
  {
    path: '/teacher-register/register-detail',
    name: '教师注册学历专业技术职称',
    component: () =>
      import( /* webpackChunkName: "page" */ '@/page/teacher/teacher_register/register_detail/register_detail'),
    meta: {
      keepAlive: true,
      isTab: false,
      isAuth: false
    }
  },
  {
    path: '/teacher-register/register-experience',
    name: '教师注册工作经历',
    component: () =>
      import( /* webpackChunkName: "page" */ '@/page/teacher/teacher_register/register_experience/register_experience'),
    meta: {
      keepAlive: true,
      isTab: false,
      isAuth: false
    }
  },
  {
    path: '/teacher-register/register-other',
    name: '教师注册其他',
    component: () =>
      import( /* webpackChunkName: "page" */ '@/page/teacher/teacher_register/register_other/register_other'),
    meta: {
      keepAlive: true,
      isTab: false,
      isAuth: false
    }
  },
  {
    path: '/org/register',
    name: '机构注册',
    component: () =>
      import( /* webpackChunkName: "page" */ '@/page/org/orgRegister'),
    meta: {
      keepAlive: true,
      isTab: false,
      isAuth: false
    }
  },
  {
    path: '/org/login',
    name: '机构登录后页面',
    component: () =>
      import( /* webpackChunkName: "page" */ '@/page/org/orgLogin'),
    meta: {
      keepAlive: true,
      isTab: false,
      isAuth: false
    }
  },
  {
    path: '/org/teachermanager',
    name: '教师管理',
    component: () =>
      import( /* webpackChunkName: "page" */ '@/page/org/teachermanager'),
    meta: {
      keepAlive: true,
      isTab: false,
      isAuth: false
    }
  },

  // {
  //   path: '*',
  //   redirect: '/404'
  // }
]
