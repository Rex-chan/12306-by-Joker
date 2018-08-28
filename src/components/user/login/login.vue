<template>
    <div class="d-login">
        <h1>MOMENT</h1>
        <input type="tel" placeholder="请输入11位手机号" class="tel" v-model="data.username"/>
        <input type="password" placeholder="请输入6-16密码" class="password" v-model="data.password"/>
        <p>{{this.data.fullname}}</p>
        <p class="error">{{data.error}}</p>
        <input type="button" value="登录" class="btn" @click = "login"/>
        <router-link to="/register" class="register">注册帐号</router-link>
    </div>
    
</template>

<script>
    import './login.scss';
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
            login:function(){
                superagent.post('http://10.3.133.12:8081/login').set({
                    'Content-Type': 'application/x-www-form-urlencoded'
                }).send({username:this.data.username,password:this.data.password})
                .end((err,res) => {
                    console.log(res.body);
                    var result = res.body;
                    if(!result.status){
                        this.data.error = "用户名或密码不正确"
                    }else{
                        this.data.error = "";
                    }
                })
            }
        }
    }

</script>