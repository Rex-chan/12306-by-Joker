<template>
    <ul class="menus" >
        <li v-for="(obj, index) in menus" :key="index"  >
            <router-link :to="obj.path" >
                <i :class="obj.icon"></i>
                <span>{{obj.text}}</span> 
            </router-link>
        </li>
    </ul>
</template>

<script>
import './menu.scss';

export default {
    data(){
        return{
            // iscur:0,
            menus:[
                {path: '/home', text: '首页', icon: 'fas fa-ticket-alt'},
                {path: '/log', text: '更新日志', icon: 'fas fa-align-justify'},
                {path: '/contact', text: '联系我们', icon: 'fas fa-mobile-alt'},
                {path: '/user', text: '我的', icon: 'fas fa-user'},
            ]
        }
    },
    methods:{
        // setActive(index){
        //     this.$store.dispatch('setActive',index )
        //     console.log(this.$store.state.menu.active)
        // }
        
    },
    mounted(){
        //this.$store.dispatch('setActive',0 )
    }

}
</script>
