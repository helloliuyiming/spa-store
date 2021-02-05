<template>
  <el-card>
    <el-row>
      <el-col :offset="1" :span="1">
        <el-avatar></el-avatar>
      </el-col>
      <el-col :span="1">
        <p>{{type}}</p>
      </el-col>
      <el-col :span="2" :offset="18">
        <el-button>
          更多
        </el-button>
      </el-col>
    </el-row>
    <GoodSItem/>
    <GoodSItem/>
    <GoodSItem/>
    <GoodSItem/>
    <GoodSItem/>
    <GoodSItem/>
    <GoodSItem/>
    <GoodSItem/>
    <GoodSItem/>
    <GoodSItem/>
    <GoodSItem/>
    <GoodSItem/>

  </el-card>
</template>

<script>
import GoodSItem from "./item/GoodSItem";
export default {
  name: "GoodsSort",
  components: {GoodSItem},
  data(){
    return{
      type:'推荐'
    }
  }
}
</script>

<style scoped>

</style>
