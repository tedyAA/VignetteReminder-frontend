import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/LogIn.vue'
import MainPage from "../views/MainPage";
import WelcomePage from "../views/WelcomePage";
import Register from "../views/Register";
import CarPage from "../views/CarPage";
import AddCar from "../views/AddCar";
import Contacts from "../views/Contacts";
import UserProfile from "../views/UserProfile";
import Reminders from "../components/Reminders";
import AboutUs from "../views/AboutUs";
import NewsPage from "../views/NewsPage";


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/welcome',
    name: 'welcome',
    component:WelcomePage,
  },
  {
    path: '/register',
    name: 'register',
    component:Register,
  },
  {
    path: '/main',
    name: 'main',
    component: MainPage
  },
  {
    path: '/car',
    name: 'car',
    component: CarPage
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: Contacts
  },
  {
    path: '/profile',
    name: 'profile',
    component: UserProfile
  },
  {
    path: '/add',
    name: 'add',
    component: AddCar
  },
  {
    path: '/reminders',
    name: 'reminders',
    component: Reminders
  },
  {
    path: '/about',
    name: 'about',
    component: AboutUs
  },
  {
    path: '/news',
    name: 'news',
    component: NewsPage
  },
  {
    path:'*', redirect:'/main'
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


export default router
