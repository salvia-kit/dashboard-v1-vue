import { createWebHistory, createRouter } from 'vue-router';

const Home = () => import('./pages/Home.vue');
const Ar = () => import('./pages/admin/Ar.vue');
const Ux = () => import('./pages/admin/Ux.vue');
const Videos = () => import('./pages/admin/Videos.vue');
const Updates = () => import('./pages/admin/Updates.vue');
const Photography = () => import('./pages/admin/Photography.vue');
const Illustration = () => import('./pages/admin/Illustration.vue');
const Documentation = () => import('./pages/admin/Documentation.vue');
const GraphicDesign = () => import('./pages/admin/GraphicDesign.vue');

const routes = [
  {
    name: 'Home',
    path: '/',
    component: Home,
  },
  {
    name: 'Ar',
    path: '/admin/ar',
    component: Ar,
  },
  {
    name: 'Ux',
    path: '/admin/ux',
    component: Ux,
  },
  {
    name: 'Videos',
    path: '/admin/videos',
    component: Videos,
  },
  {
    name: 'Ar',
    path: '/admin/ar',
    component: Ar,
  },
  {
    name: 'Updates',
    path: '/admin/updates',
    component: Updates,
  },
  {
    name: 'Photography',
    path: '/admin/photography',
    component: Photography,
  },
  {
    name: 'Illustration',
    path: '/admin/illustration',
    component: Illustration,
  },
  {
    name: 'Documentation',
    path: '/admin/documentation',
    component: Documentation,
  },
  {
    name: 'GraphicDesign',
    path: '/admin/graphic-design',
    component: GraphicDesign,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
