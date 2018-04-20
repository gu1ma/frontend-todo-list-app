import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../App.vue'
import CepChecker from '../components/CepChecker'

Vue.use(VueRouter)

const Router = new VueRouter({
    mode: 'history',
    routes: [
      {
        path: '/',
        name: 'App',
        component: App
      }, {
        path: '/cep',
        name: 'CepChecker',
        component: CepChecker
      }
    ]
})

export default Router
