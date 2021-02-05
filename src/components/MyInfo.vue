<template>
<div id="container">
  <el-row style="height: 100%">
    <el-col :span="12" style="height: 100%">
      <el-card body-style="padding:0px" style="height: 28%">
        <el-row>
          <el-col :span="8">
            <el-image  :src="circleUrl"></el-image>
          </el-col>
          <el-col :offset="1" :span="14" style="padding: 10px">

            <p>title</p>
            <p>积分：522</p>
            <p>加入xxx的第222天</p>

            <el-button type="primary" icon="el-icon-edit" round size="mini" style="float: right"></el-button>
          </el-col>
        </el-row>
      </el-card>

      <el-card id="order_main_section">
        <el-row type="flex" justify="space-around" id="order_progress_section">
          <el-col :span="5" style="text-align: center;">
            <a href="#" class="order_process_link">
              <el-avatar :src="circleUrl"/>
              <p class="title">全部</p>
            </a>
          </el-col>
          <el-col :span="5" style="text-align: center;">
            <a href="#" class="order_process_link">
              <el-badge value="5">
                <el-avatar :src="circleUrl"/>
              </el-badge>
              <p class="title">代发货</p>
            </a>

          </el-col>
          <el-col :span="5" style="text-align: center;">
            <a href="#" class="order_process_link">
              <el-badge value="5">
                <el-avatar :src="circleUrl"/>
              </el-badge>
              <p class="title">代收获</p>
            </a>
          </el-col>
          <el-col :span="5" style="text-align: center;">
            <a href="#" class="order_process_link">
              <el-badge value="5">
                <el-avatar :src="circleUrl"/>
              </el-badge>
              <p class="title">售后/退货</p>
            </a>
          </el-col>
        </el-row>
        <p style="margin:0px;text-align: center">消息</p>
        <el-divider style="margin: 0"></el-divider>

        <div id="order_message_section">
          <h1>T</h1>
          <h1>T</h1>
          <h1>T</h1>
          <h1>T</h1>
          <h1>T</h1>
          <h1>T</h1>
          <h1>T</h1>
          <h1>T</h1>
          <h1>T</h1>
          <h1>T</h1>
          <h1>T</h1>
          <h1>T</h1>
          <h1>T</h1>
          <h1>T</h1>
          <h1>T</h1>
          <h1>T</h1>
          <h1>T</h1>
          <h1>T</h1>
        </div>

      </el-card>

    </el-col>
    <el-col :offset="1" :span="11" style="height: 100%">
      <el-card id="system_message_section">
        <div>
          <h1>T</h1>
          <h1>T</h1>
          <h1>T</h1>
          <h1>T</h1>
          <h1>T</h1>
          <h1>T</h1>
          <h1>T</h1>
          <h1>T</h1>
          <h1>T</h1>
          <h1>T</h1>
          <h1>T</h1>
          <h1>T</h1>
          <h1>T</h1>
          <h1>T</h1>
          <h1>T</h1>
          <h1>T</h1>
          <h1>T</h1>
          <h1>T</h1>
          <h1>T</h1>
          <h1>T</h1>
          <h1>T</h1>
          <h1>T</h1>
        </div>

      </el-card>
    </el-col>
  </el-row>
</div>
</template>

<script>
export default {
  name: "MyInfo",
  data(){
    return{
      circleUrl:"/static/image/avatar.png",
    }
  }

}
</script>

<style scoped>
  #container{
    padding: 5px;
  }
  #order_main_section{
    margin-top: 1%;
    height: 68.5%
  }

  #order_progress_section{
    height: 20%
  }
  #order_message_section{
    overflow-y: scroll;
    margin-top: 0px;
    height: 73%
  }

  #system_message_section{
    overflow-y: scroll;
    height: 98%;
  }

  .order_process_link{
    text-decoration: none;
    color:#000000;
  }

  .order_process_link .title{
    margin: 10px;
  }



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

<style>
#order_main_section .el-card__body{
  height: 100%;
  padding: 3%;
}
</style>
