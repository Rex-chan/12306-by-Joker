import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import menu from '../components/menu/menu';
import user from '../components/user/user'

const store = new Vuex.Store({
    modules: {
        menu,
        user
    }
})

export default store;