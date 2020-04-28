import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import LastArticles from './components/LastArticles.vue'
import MiComponente from "./components/MiComponente.vue";
import HelloWorld from "./components/HelloWorld.vue";
import Blog from "./components/Blog.vue";
import Formulario from "./components/Formulario.vue";
import Pagina from "./components/Pagina.vue";
import ErrorComponent from "./components/ErrorComponent.vue";
import Peliculas from "./components/Peliculas.vue";
import Search from "./components/Search.vue";
import Redirect from "./components/Redirect.vue";
import Article from "./components/Article.vue";
import CreateArticle from "./components/CreateArticle.vue";
import EditArticle from "./components/EditArticle.vue";
import Vuelidate from "vuelidate";

import VueMoment from "vue-moment";
import moment from "moment";
import 'moment/locale/es';

Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(Vuelidate);
Vue.use(VueMoment, {
    moment
});

const routes = [
    { path: '/', component: LastArticles },
    { path: '/home', component: LastArticles },
    { path: '/ultimos-articulos', component: LastArticles },
    { path: '/buscar/:token', component: Search },
    { path: '/redirigir/:token', component: Redirect },
    { path: '/articulo/:id', name: 'article', component: Article },
    { path: '/crear-articulo', component: CreateArticle },
    { path: '/editar/:id', component: EditArticle },
    { path: '/mi-componente', component: MiComponente },
    { path: '/hola-mundo', component: HelloWorld },
    { path: '/blog', component: Blog },
    { path: '/formulario', component: Formulario },
    { path: '/pagina/:id?', name: 'pagina', component: Pagina },
    { path: '/peliculas', name: 'peliculas', component: Peliculas },
    { path: '*', component: ErrorComponent }

]

const router = new VueRouter({
    routes,
    mode: 'history'
})
new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
