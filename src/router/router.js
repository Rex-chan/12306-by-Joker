import Vue from 'vue';
import VueRouter from 'vue-router';
import homeComponent from '../components/home/home.vue';
import logComponent from '../components/log/log.vue';
import contactComponent from '../components/contact/contact.vue';
import registerComponent from '../components/user/register/register.vue';
import loginComponent from '../components/user/login/login.vue';
import userComponent from '../components/user/user.vue';
import menuComponent from '../components/menu/menu.vue';
Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {path: '/',component: homeComponent,name: 'home',},
        {path: '/login', component: loginComponent, name:'login'},
        {path: '/register', component: registerComponent, name:'register'},
        {path: '/user', component: userComponent, name:'user'},
        {path: '/log', component: logComponent, name:'log'},
        {path: '/contact', component: contactComponent, name:'contact'},
    ]
})

export default router;