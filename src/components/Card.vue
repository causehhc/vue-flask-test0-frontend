<template>
  <el-card class="box-card" shadow="hover">
      <div slot="header" class="clearfix">
        <span>标题</span>
        <el-dropdown style="float: right">
          <span class="el-dropdown-link">
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>举报</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div class="text item">
        正文
      </div>
      <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
  </el-card>
</template>

<script>
export default {
  name: "Card"
}
</script>

<style scoped>
.text {
  font-size: 14px;
}
.item {
  margin-bottom: 18px;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both
}
.box-card {
  width: 480px;

}

</style>
