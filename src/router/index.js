import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/products',
    name: 'products',
    component: () => import('../views/ProductsView.vue'),
    children: [
      {
        path: 'selector',
        name: 'products-filter',
        component: () => import('../views/ProductsFilterView.vue'),
      },
      {
        path: 'editor',
        name: 'product-editor',
        component: () => import('../views/ProductEditorView.vue'),
      },
    ],
  },
  {
    path: '/suppliers',
    name: 'suppliers',
    component: () => import('../views/SuppliersView.vue'),
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: () => import('../views/ContactsView.vue'),
  },
  {
    path: '/shopping-rules',
    name: 'shopping-rules',
    component: () => import('../views/ShoppingRulesView.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
