<template>
  <div>
    <el-container style="height: 100%">
      <el-header>
        <el-row>
          <el-col :span=11 :offset=1>
            <el-input prefix-icon="el-icon-search" placeholder="请输入内容"/>
          </el-col>

          <el-col :span=2 :offset=4>
            <el-button icon="el-icon-view" @click="isShowFilter=true">筛选</el-button>
          </el-col>

          <el-col :span=4 :offset=1>
            <el-select placeholder="排序规则" value="" @change="updateSort">
              <el-option
                v-for="item in sort_types"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-col>
        </el-row>


        <el-row type="flex" justify="space-around" v-show="isShowFilter">
          <el-form :inline="true" :model="filter_info" size="mini" status-icon rules="filter_rules">

            <el-form-item label="语言">
              <el-select v-model="filter_info.select_language" multiple placeholder="请选择">
                <el-option
                  v-for="item in language_options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>

            <el-form-item label="卖家">
              <el-select v-model="filter_info.sellers" multiple placeholder="请选择">
                <el-option
                  v-for="item in seller_optons"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>

            <el-form-item label="价格区间" prop="start_price">
              <el-input v-model="filter_info.start_price"/>
            </el-form-item>

            <el-form-item>
              <el-button type="primary" @click="onFilterSubmit">过滤</el-button>
            </el-form-item>
          </el-form>
        </el-row>
      </el-header>

      <el-main id="goods-list">
        <GoodSItem class="goods-item"></GoodSItem>
        <GoodSItem class="goods-item"></GoodSItem>
        <GoodSItem class="goods-item"></GoodSItem>
        <GoodSItem class="goods-item"></GoodSItem>
        <GoodSItem class="goods-item"></GoodSItem>
        <GoodSItem class="goods-item"></GoodSItem>
        <GoodSItem class="goods-item"></GoodSItem>
        <GoodSItem class="goods-item"></GoodSItem>
        <GoodSItem class="goods-item"></GoodSItem>
        <GoodSItem class="goods-item"></GoodSItem>
        <br>
        <el-pagination
          background
          layout="prev, pager, next"
          :total="1000">
        </el-pagination>
      </el-main>

    </el-container>



  </div>
</template>

<script>
import GoodSItem from "./item/GoodSItem";
export default {
  name: "Home",
  components: {GoodSItem},
  data () {
    var validateStartPrice = (rule,value,callback)=>{
        if (isNaN(Number(value))){
          callback(new Error('输入不是数字'));
        }

      }
      var validateEndPrice = (rule,value,callback)=>{

      }
    return {
      sort_types:[
        {label:"按发布日期",value:"按发布日期"},
        {label:"按受欢迎程度",value:"按受欢迎程度"},
        {label:"按系统推荐",value:"按系统推荐"},
      ],
      language_options:[
        {label:"英语",value:"英语"},
        {label:"日语",value:"日语"},
        {label:"德语",value:"德语"},
        {label:"法语",value:"法语"},
        {label:"拉丁语",value:"拉丁语"},
        {label:"俄语",value:"俄语"},
      ],
      seller_optons:[
        {label:"英语",value:"英语"},
      ],
      filter_info:{
        start_price:0,
        end_price:0,
        select_language:[],
        tags:[],
        sellers:[],
      },

      filter_rules:{
        start_price: [
          { validator: validateStartPrice, trigger: 'blur' }
        ],
        end_price:[
          {validator:validateEndPrice,trigger: 'blur'}
        ]
      },

      isShowFilter:false,
    }
  },

  methods:{
    updateSort(value){
      console.log("当前选中的值为："+value)
    },
    onFilterSubmit(){

    }
  }
}


</script>

<style scoped>
  #goods-list{
    margin-top: 20px;
    padding: 0px 0px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    height: 100%;
  }
  .goods-item{
    margin: 10px;
    float: left;
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
