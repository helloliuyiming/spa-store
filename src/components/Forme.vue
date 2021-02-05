<template>
  <div style="height: 100%">
    <GoodsSort/>
  </div>

</template>

<script>
import GoodsSort from "./GoodsSort";
export default {
  name: "Foryou",
  components: {GoodsSort}
}
</script>

<style scoped>





/*整体部分*/
::-webkit-scrollbar
{
  width: 5px;
  height: 10px;
}
/*滑动轨道*/
::-webkit-scrollbar-track
{
  border-radius: 0px;
  background: none;
}
/*滑块*/
::-webkit-scrollbar-thumb
{
  border-radius: 5px;
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.2);
  background-color: rgba(255,255,255,.75)
}
/*滑块效果*/
::-webkit-scrollbar-thumb:hover
{
  border-radius: 5px;
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.2);
  background-color: rgba(85, 85, 85, 0.4);
}
</style>
