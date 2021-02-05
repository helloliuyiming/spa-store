import Vue from 'vue'
import Router from 'vue-router'
import Index from "../components/Index";
import Home from "../components/Home";
import Help from "../components/Help";
import Cart from "../components/Cart";
import Forme from "../components/Forme";
import Ask from "../components/Ask";
import Answer from "../components/Answer";
import Me from "../components/Me";
import MyInfo from "../components/MyInfo";
import MyOrder from "../components/MyOrder";
import MySetting from "../components/MySetting";
import Contact from "../components/help/Contact";
import FeedBack from "../components/help/FeedBack";
import Question from "../components/help/Question";
import Login from "../components/Login";
import Register from "../components/Register";

import VueCookies from 'vue-cookies'
Vue.use(VueCookies)
Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', component: Index,children:[
        {path:'/home',component:Home},
        {path:'/cart',component:Cart},
        {path:'/ask',component:Ask},
        {path:'/answer',component:Answer},
        {path:'/me',component:Me,
          children:[
            {path:'/me/info',component:MyInfo},
            {path:'/me/order',component:MyOrder},
            {path:'/me/setting',component:MySetting},
          ]
        },
        {path:'/Forme',component:Forme},
        {path:'/help',component: Help},
      ]},
    {path: '/login',component: Login},
    {path: '/register',component: Register},
  ]
})
