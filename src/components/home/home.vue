<template>
    <div class="mHome">
        <transition name="fade">
            <div class="hBody">
                <hd />
                <main class="mainer">
                    <div>
                        <input type="button" :value="count" @click="changeHomeCount" style="width:50px; height:50px; font-size:50px">
                        <catalog />
                    </div>
                    
                </main>
            </div>
        </transition>
        <menus ref='menu' />
    </div>
</template>

<script>
import hd from './header/header.vue';
import catalog from './catalog/catalog.vue';
import menus from '../menu/menu.vue';

import './home.scss';
 
export default {
    data(){
        return{
            count: 1,
        }
    },
    components:{
        hd,
        catalog,
        menus,
    },
    methods:{
        changeHomeCount:function(){
            this.count += 2;
            this.$refs.menu.changeMenuCount()
        }
    },
    mounted(){
        
    }
}
</script>

