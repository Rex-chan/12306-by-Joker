<template>
    <div class="log">
        <div class="logBody">
            <h1>更新日志</h1>
        </div>
        
        <menus />
        
    </div>
    
</template>

<script>
import './log.scss';
import menus from '../menu/menu.vue';
export default {
    data(){
        return{

        }
    },
    components:{
        menus
    }
}
</script>
