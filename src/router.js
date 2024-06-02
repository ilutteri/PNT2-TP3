import { createRouter, createWebHistory } from 'vue-router';
import Formulario from './components/Form.vue';
import Usuarios from './components/Usuarios.vue';

const routes = [
  { path: '/', component: Formulario },
  { path: '/form', component: Formulario },
  { path: '/usuarios', component: Usuarios },
  { path: '/:pathMatch(.*)*', component: Formulario }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;