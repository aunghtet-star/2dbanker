import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../page/Home.vue'
import Product from '../page/Product.vue'
import Cart from '../page/Cart.vue'

Vue.use(VueRouter);

const routes = [
    {
        path : '/',
        name : 'home',
        component : Home
    },
    {
        path : '/product',
        name : 'product',
        component : Product
    },
    {
        path : '/cart',
        name : 'cart',
        component : Cart
    },
];

const router = new VueRouter({
    mode : 'history',
    routes : routes
});

export default router;

