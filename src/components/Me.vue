<template>
  <div style="overflow:hidden;">
    <el-row style="height:9%;position: inherit;background-color: #86bdf4">
      <el-col :span="18" >
        <el-menu router mode="horizontal" background-color="#86bdf4" default-active="me_info">
          <el-menu-item index="/me/info" >我的信息</el-menu-item>
          <el-menu-item index="/me/order">订单</el-menu-item>
          <el-menu-item index="/me/setting">设置</el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="6" >
        <el-radio-group v-model="isSellerView" style="margin-top: 12px" v-if="isSeller">
          <el-radio-button :label="false">个人视图</el-radio-button>
          <el-radio-button :label="true">卖家视图</el-radio-button>
        </el-radio-group>
      </el-col>
    </el-row>



    <router-view style="height: 91%"/>
  </div>
</template>

<script>
export default {
  name: "Me",
  data(){
    return{
      isSellerView:false,
      isSeller:true,
    }
  }
}
</script>

<style scoped>

  .el-menu.el-menu--horizontal{
    border-bottom: none;
  }
</style>
