import Vue from 'vue';
import Router from 'vue-router';
import HomeComponent from '@/components/HomeComponent';
import AppLogin from '@/components/AppLogin';
import AppAboutUs from '@/components/AppAboutUs';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomeComponent',
      component: HomeComponent,
    },
    {
      path: '/login',
      name: 'AppLogin',
      component: AppLogin,
    },
    {
      path: '/about-us',
      name: 'AppAboutUs',
      component: AppAboutUs,
    },
  ],
});
