<template>
  <div >
    <el-card class="item" shadow="hover">
      <el-row>
        <el-col :span="10">
          <el-image class="item-thumb" src="static/image/faf8525941c37da9.jpg.webp" fit="fit"></el-image>
        </el-col>
        <el-col :offset="1" :span="13">
          <h5 class="item-title">这是title这是title这是title这是title这是title这是title这是title</h5>
          <h5 class="item-price">$99.99</h5>
          <div class="item-tags">
            <el-tag v-for="tag in tags" size="mini">{{tag}}</el-tag>
          </div>

          <p class="item-description">这是说明...这是说明...这是说明...这是说明...这是说明...这是说明...</p>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "GoodSItem",
  data(){
    return {
      tags:['tag1','tag2','tag3']
    }
  }
}

</script>

<style scoped>
  .item{
    background-color: whitesmoke;
    border-radius: 10px;
    width: 420px;
    height: 180px;
    padding: 0px;
  }
  .item-title{
    margin: 0;
  }
  .item-price{
    color: red;
    margin: 0;
    margin-top: 5px;
  }
  .item-tags{
    margin-top: 5px;
  }
  .item-thumb{
    margin: 0;
    height: 160px;
  }
  .item-description{
    margin: 0;
    margin-top: 5px;
    font-size: 13px;
  }
</style>
