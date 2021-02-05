<template>
  <div id="container">
    <el-row style="height: 100%">
      <el-col :span="14" style="height:100%;display: flex;justify-content: center;align-items: center;">
        <div>
          <h1>注册</h1>
          <el-form model="register_info">
            <el-form-item label="邮箱">
              <el-input type="email" v-model="register_info.email"/>
            </el-form-item>
            <el-form-item label="密码">
              <el-input show-password v-model="register_info.password"></el-input>
            </el-form-item>
            <el-form-item label="确认密码">
              <el-input show-password v-model="register_info.rePassword"></el-input>
            </el-form-item>

            <el-form-item>
              <el-checkbox name="type"> 登陆即代表同意《<el-link>用户协议</el-link>》《<el-link>隐私保护指引</el-link>》</el-checkbox>
            </el-form-item>
            <el-form-item>
              <el-button type="plain" @click="onSubmit">取消</el-button>
              <el-button type="success" @click="register">注册</el-button>
            </el-form-item>
          </el-form>
        </div>

      </el-col>
      <el-col :offset="2" :span="8" style="height: 100%">
        <el-carousel height="100%" style="height:100%;border-radius: 10px">
          <el-carousel-item v-for="item in images" :key="item">
            <el-image :src="item"/>
          </el-carousel-item>
        </el-carousel>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Register",
  data:function (){
    return {
      images:['static/image/p1.jpg','static/image/p2.jpg','static/image/p3.jpg'],
      register_info:{
        email:"",
        password:"",
        rePassword:""
      }
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
.el-image{
  height: 100%;
}
</style>


