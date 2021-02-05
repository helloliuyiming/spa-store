<template>
<el-container>
  <el-aside width="100px">
    <el-menu router>
      <el-menu-item>全部</el-menu-item>
      <el-menu-item>已完成</el-menu-item>
      <el-menu-item>待发货</el-menu-item>
      <el-menu-item>待收货</el-menu-item>
      <el-menu-item>售后</el-menu-item>
    </el-menu>
  </el-aside>
  <el-main>
    <router-view/>
  </el-main>
</el-container>
</template>

<script>
export default {
name: "MyOrder"
}
</script>

<style scoped>

</style>
