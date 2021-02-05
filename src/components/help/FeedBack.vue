<template>
  <div>
    <el-form label-width="80px">
      <el-form-item label="简要描述">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="联系方式">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="类别">
        <el-select  placeholder="请选择问题类别">
          <el-option label="订单" value="order"></el-option>
          <el-option label="使用" value="use"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="详情描述">
        <el-input type="textarea"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary">提交</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "FeedBack"
}
</script>

<style scoped>

</style>
