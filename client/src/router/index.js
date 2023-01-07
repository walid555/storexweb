import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Login from '../components/Login'
import Register from '../components/Register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/movies',
      name: 'movies',
      component: () => import(/* webpackChunkName: "movies" */ '../components/MoviesView.vue')
    },
    {
      path: '/movie/:id',
      name: 'movie',
      component: () => import(/* webpackChunkName: "movie" */ '../components/movies/MovieId.vue')
    },
    {
      path: '/movie-edit/:id',
      name: 'movie-edit',
      component: () => import(/* webpackChunkName: "movie" */ '../components/movies/MovieEdit.vue')
    },
    {
      path: '/movie-delete/:id',
      name: 'movie-delete',
      component: () => import(/* webpackChunkName: "movie" */ '../components/movies/MovieDelete.vue')
    },
    {
      path: '/movie-create',
      name: 'movie-create',
      component: () => import(/* webpackChunkName: "movie" */ '../components/movies/MovieCreate.vue')
    }
  ]
})
