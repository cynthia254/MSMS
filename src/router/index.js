

import { createRouter, createWebHistory } from 'vue-router';
import SupplierRegistration from  '@/components/supplierRegistration.vue';
import DashboardPage from '@/components/HelloWorld.vue'
import supplierDashboard from '@/components/supplierdashboard.vue'

const routes = [
  {
    path:'/',
    name:'DashboardPage',
    component:DashboardPage,

  },
  {
    path: '/supplierRegistration',
    name: 'SupplierRegistration',
    component: SupplierRegistration,
  },
  {
    path: '/dashboard',
    name: 'supplierDashboard',
    component: supplierDashboard,
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;


