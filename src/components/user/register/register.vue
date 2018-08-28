<template>
    <div class="d-login">
        <h1>MOMENT</h1>
        <input type="tel" placeholder="请输入11位手机号" class="tel" v-model="data.username"/>
        <input type="password" placeholder="请输入6-16密码" class="password" v-model="data.password"/>
        <p>{{this.data.fullname}}</p>
        <p class="error">{{data.error}}</p>
        <input type="button" value="注册" class="btn" @click="register"/>
    </div>
    
</template>

<script>
    import '../login/login.scss';
    import superagent from 'superagent';

    export default {
        data(){
            return {
                data:{
                    username:'',
                    password:'',
                    error:''
                }
            }
        },
        methods:{
            register:function(){
                superagent.post('http://10.3.133.12:8081/reg').set({
                    'Content-Type': 'application/x-www-form-urlencoded'
                }).send({username:this.data.username,password:this.data.password})
                .end((err,res) => {
                    var result = res.body;
                    console.log(result);
                    if(!result.status){
                        this.data.error = "用户名已存在"
                    }else{
                        this.data.error = "";
                        this.$router.push({name:'login'});
                    }
                })
            }
        }
    }

</script>