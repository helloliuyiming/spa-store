<template>
  <div id="container">
    <el-row style="height: 100%">
      <el-col :span="10" style="height: 100%">
        <el-image src="static/image/login-aside.jpg" style="height:100%;border-radius: 10px"/>
      </el-col>

      <el-col :offset="2" :span="12" style="height:100%;display: flex;justify-content: center;align-items: center;">
        <div>
          <h1>登陆</h1>

          <el-form model="login_info">
            <el-form-item>
              <el-input placeholder="请输入用户名/邮箱/手机号" v-model="login_info.email"/>
            </el-form-item>
            <el-form-item>
              <el-input placeholder="请输入密码" show-password v-model="login_info.password"></el-input>
            </el-form-item>
            <el-form-item>
              <el-checkbox name="type"> 登陆即代表同意《<el-link>用户协议</el-link>》《<el-link>隐私保护指引</el-link>》</el-checkbox>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">登陆</el-button>
              <el-button type="success" @click="register">注册</el-button>
            </el-form-item>
          </el-form>
        </div>


      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Login",
  data(){
    return{
      login_info:{
        email:"",
        password:""
      }
    }
  },
  methods:{
    register(){
      this.$router.push('/register');
    }
  }
}
</script>

<style scoped>
#container{
  background-color: white;
  border-radius: 10px;
  height: 80%;
  width: 70%;
  /*-webkit-box-shadow: inset 0 0 10px gray;*/

  /*-moz-box-shadow: inset 0 0 10px gray;*/

  /*box-shadow: inset 0 0 10px gray;*/
}

</style>
<style>
#app{
  background-color: gray;
}
</style>
