

import { createRouter, createWebHistory } from 'vue-router';
import SupplierRegistration from  '@/components/supplierLogin.vue';
import DashboardPage from '@/components/HelloWorld.vue';
import supplierDashboard from '@/components/supplierdashboard.vue';
import InvoicePage from '@/components/invoice.vue';
import ViewInvoice from '@/components/viewInvoice.vue'
import RegistrationPage from '@/components/registerSupplierPage.vue'
import categoryPage from '@/components/AddCategory.vue'
import AdminRegistration from '@/components/AdminRegistration.vue'
import ProductPage from '@/components/AddProduct.vue'
import StorePage from'@/components/AddingStores.vue'
import SubCategoryPage from '@/components/AddingSubCategories.vue'
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
    path: '/category',
    name: 'categoryPage',
    component: categoryPage,
  },
  {
    path: '/store',
    name: 'StorePage',
    component: StorePage,
  },
  {
    path: '/subcategory',
    name: 'SubCategoryPage',
    component: SubCategoryPage,
  },
  {
    path: '/adminRegistration',
    name: 'AdminRegistration',
    component: AdminRegistration,
  },
  {
    path: '/becomemerchant',
    name: 'RegistrationPage',
    component: RegistrationPage,
  },
  {
    path: '/dashboard',
    name: 'supplierDashboard',
    component: supplierDashboard,
  },
  {
    path: '/invoices',
    name: 'InvoicePage',
    component: InvoicePage,
  },
  {
    path: '/invoicedetails',
    name: 'ViewInvoice',
    component: ViewInvoice,
  },
  {
    path: '/products',
    name: 'ProductPage',
    component: ProductPage,
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;


