<template>
    <div class="contact">
        <div class="contactBody">
            <h1>联系我们</h1>
        </div>
        
        <menus />
    </div>
    
</template>

<script>
import './contact.scss';
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
