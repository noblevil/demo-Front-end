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
    path: "/policyDetail",
    name: 'policyDetail',
    component: () =>
      import( /* webpackChunkName: "page" */ '@/page/home/policyDetail'),
    meta: {
      keepAlive: true,
      isTab: false,
      isAuth: false
    }
  },
 {
    path: "/noticeDetail",
    name: 'noticeDetail',
    component: () =>
      import( /* webpackChunkName: "page" */ '@/page/home/noticeDetail'),
    meta: {
      keepAlive: true,
      isTab: false,
      isAuth: false
    }
  },
  {
     path: "/complaintDetail",
     name: 'complaintDetail',
     component: () =>
       import( /* webpackChunkName: "page" */ '@/page/home/complaintDetail'),
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
  {
    path: '*',
    redirect: '/404'
  }
]
