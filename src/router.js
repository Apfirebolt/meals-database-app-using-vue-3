import { createRouter, createWebHashHistory } from 'vue-router';
import HomePage from './pages/Home.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomePage,
    },
    {
        path: '/category',
        name: 'category',
        component: () => import('./pages/Category.vue'),
    },
    {
        path: '/meals',
        name: 'meals',
        component: () => import('./pages/Meals.vue'),
    },
    {
        path: '/ingredients',
        name: 'ingredients',
        component: () => import('./pages/Ingredient.vue'),
    },
    {
        path: '/areas',
        name: 'areas',
        component: () => import('./pages/Area.vue'),
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
