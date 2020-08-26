import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/home/index.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/direct',
    name: 'Direct',
    component: () => import(/* webpackChunkName: "direct" */ '../views/direct'),
    children: [
      {
        path: 'message',
        name: 'DirectMessage',
        component: () =>
          import(
            /* webpackChunkName: "directMessage" */ '../views/direct/message'
          ),
      },
    ],
  },
  {
    path: '/explore',
    name: 'Explore',
    component: () =>
      import(/* webpackChunkName: "explore" */ '../views/explore'),
  },
  {
    path: '/profile',
    name: 'Profile',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "profile" */ '../views/profile/index'),
    children: [
      {
        path: '',
        name: 'ProfilePost',
        component: () =>
          import(/* webpackChunkName: "profilePost" */ '../views/profile/post'),
      },
      {
        path: 'igtv',
        name: 'ProfileIGTV',
        component: () =>
          import(/* webpackChunkName: "profileIGTV" */ '../views/profile/igtv'),
      },
      {
        path: 'save',
        name: 'ProfileSave',
        component: () =>
          import(/* webpackChunkName: "profileSave" */ '../views/profile/save'),
      },
      {
        path: '/profile/tag', //Path bu şekilde de oluyor.
        name: 'ProfileTag',
        component: () =>
          import(/* webpackChunkName: "profileTag" */ '../views/profile/tag'),
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
