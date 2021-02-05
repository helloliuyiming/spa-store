<template>
  <div id="container">
    <el-container style="height: 100%">
      <el-aside>

        <el-menu style="margin-top: 10px" router>

          <el-menu-item>
            <el-image
              style="width: 80px; height: 50px"
              :src="logo_url"
              :fit="fit"/>
          </el-menu-item>

          <el-menu-item>
            <h1 style="height: 50px">Explore</h1>
          </el-menu-item>

          <el-menu-item index="/home">
            <i class="el-icon-s-home"></i>
            <span slot="title">首页</span>
          </el-menu-item>

          <el-menu-item index="/forme">
            <i class="el-icon-s-shop"></i>
            <span slot="title">推荐</span>
          </el-menu-item>

          <el-menu-item index="/cart">
            <el-badge :value="cart_count">
              <i class="el-icon-s-goods"></i>
            </el-badge>
            <span slot="title">购物车</span>
          </el-menu-item>

          <el-menu-item index="/ask">
            <i class="el-icon-upload"></i>
            <span slot="title">求好物</span>
          </el-menu-item>

          <el-menu-item index="/me">
            <i class="el-icon-user-solid"></i>
            <span slot="title">个人中心</span>
          </el-menu-item>

          <el-menu-item index="/help" style="margin-top: 80px">
            <i class="el-icon-help"></i>
            <span slot="title">推广</span>
          </el-menu-item>
          <el-menu-item index="/help">
            <i class="el-icon-help"></i>
            <span slot="title">帮助</span>
          </el-menu-item>
        </el-menu>
      </el-aside>

      <el-main id="main">
        <router-view style="height: 100%"/>
      </el-main>

    </el-container>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      logo_url:'',
      fit:'',
      cart_count:5
    }
  },
  methods:{

  },


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #container{
    background-color: white;
    border-radius: 25px;
    width: 90%;
    height: 90%;
    padding: 20px;
    /*-webkit-box-shadow: inset 0 0 10px gray;*/

    /*-moz-box-shadow: inset 0 0 10px gray;*/

    /*box-shadow: inset 0 0 10px gray;*/
  }

  #main{
    padding: 20px;
    height: 100%;
  }
</style>
<style>
#app{
  background-color: #BCE7F0;
}
</style>
