<template>
    <div class="mHome">
        <div class="hBody">
            <hd />
            <main class="mainer">
                <div>
                    <catalog />
                </div>
               
            </main>
        </div>
        <menus />
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
            
        }
    },
    components:{
        hd,
        catalog,
        menus,
    },
    methods:{
        
    },
    mounted(){
        
    }
}
</script>

