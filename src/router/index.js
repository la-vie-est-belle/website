import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    redirect: '/blog'
  },
  {
    path: '/auth',
    name: 'auth',
    component: () => import(/* webpackChunkName: "auth" */ '../views/Auth.vue'),
    meta: {
      title: '登录'
    }
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    meta: {
      title: '首页'
    }
  },
  {
    path: '/self',
    name: 'self',
    component: () => import(/* webpackChunkName: "search" */ '../views/Self.vue'),
    meta: {
      title: '个人中心'
    }
  },
  {
    path: '/search',
    name: 'search',
    component: () => import(/* webpackChunkName: "search" */ '../views/SearchResult.vue'),
    meta: {
      title: '搜索'
    }
  },
  {
    path: '/message',
    name: 'message',
    component: () => import(/* webpackChunkName: "search" */ '../views/Message.vue'),
    meta: {
      title: '消息'
    }
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import(/* webpackChunkName: "blog" */ '../views/Blog.vue'),
    meta: {
      title: '仍梦的博客'
    },
    children: [
      {
        path: '/blog',
        component: () => import(/* webpackChunkName: "blog" */ '@/components/blog/ArticleAbstract.vue'),
      },
      {
        path: '/blog/:id(\\d+)',
        component: () => import(/* webpackChunkName: "blog" */ '@/components/blog/ArticleDetail.vue'),
      },
    ]
  },
  {
    path: '/blog/compose',
    name: 'compose',
    meta: {
      title: '写作'
    },
    component: () => import(/* webpackChunkName: "blog" */ '@/components/blog/Compose.vue'),
  },
  {
    path: '/blog/verify',
    name: 'verify',
    meta: {
      title: '评论审核'
    },
    component: () => import(/* webpackChunkName: "blog" */ '@/components/blog/Verify.vue'),
  },
  {
    path: '/blog/draft',
    name: 'draft',
    meta: {
      title: '文章草稿'
    },
    component: () => import(/* webpackChunkName: "blog" */ '@/components/blog/Draft.vue'),
  },
  {
    path: '/store',
    name: 'store',
    component: () => import(/* webpackChunkName: "store" */ '../views/Store.vue'),
    meta: {
      title: '商店'
    }
  },
  {
    path: '/widget',
    name: 'widget',
    component: () => import(/* webpackChunkName: "widget" */ '../views/Widget.vue'),
    meta: {
      title: '功能'
    }
  },
  {
    path: '/order',
    name: 'order',
    component: () => import(/* webpackChunkName: "order" */ '../views/Order.vue'),
    meta: {
      title: '接单'
    }
  },
  {
    path: '/donate',
    name: 'donate',
    component: () => import(/* webpackChunkName: "donate" */ '../views/Donate.vue'),
    meta: {
      title: '捐助名单'
    }
  },
  {
    path: '/egg',
    name: 'egg',
    component: () => import(/* webpackChunkName: "egg" */ '../views/Egg.vue'),
    meta: {
      title: '菜单'
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.afterEach( to => {
  document.title = to.meta.title
})

export default router
