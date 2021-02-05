<template>
  <el-container style="height:100%;overflow-y: hidden" class="test">
    <el-tabs type="card" style="height: 100%;width: 100%">
      <el-tab-pane label="常见问题" name="first" class="el_tab_pane">
        <Question/>
      </el-tab-pane>
      <el-tab-pane label="问题反馈" name="second" class="el_tab_pane">
        <FeedBack/>
      </el-tab-pane>
      <el-tab-pane label="联系我们" name="third" class="el_tab_pane">
        <Contact/>
      </el-tab-pane>
    </el-tabs>
  </el-container>

</template>

<script>
import Question from "./help/Question";
import FeedBack from "./help/FeedBack";
import Contact from "./help/Contact";
export default {
  name: "Help",
  components: {Contact, FeedBack, Question}
}
</script>

<style scoped>
.el_tab_pane{
  overflow-y: scroll;
  height: 100%
}

/*整体部分*/
::-webkit-scrollbar
{
  width: 2px;
  height: 2px;
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
  border-radius: 2px;
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

<style>
  .el-tabs__content{
    height: 100%;
  }
</style>
