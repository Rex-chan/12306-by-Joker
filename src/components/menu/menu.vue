<template>
    <ul class="menus" >
        <li v-for="(obj, index) in menus" :key="index"  >
            <router-link :to="obj.path" exact >
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
            count: 1,
            Bdisplay: true,
            menus:[
                {path: '/', text: '首页', icon: 'fas fa-ticket-alt'},
                {path: '/log', text: '更新日志', icon: 'fas fa-align-justify'},
                {path: '/contact', text: '联系我们', icon: 'fas fa-mobile-alt'},
                {path: '/user', text: '我的', icon: 'fas fa-user'},
            ]
        }
    },
    methods:{
       changeMenuCount:function(){
           this.count += 1;
           console.log(this.count);
            if(this.count == 3){
                this.Bdisplay = false;
                this.menus[0].text = '又被爸爸改了回来'
            }
            
       },
        
    },
    mounted(){
        //this.$store.dispatch('setActive',0 )
        // console.log(this.count)

        if(this.count == 1){
            this.menus[0].text = '被自己mounted修改'
        }
    }

}
</script>
