<template>
  <el-card class="box-card" shadow="hover">
    <div slot="header" class="clearfix">
      <span>
        {{postTitle}}
      </span>
      <el-button style="float: right; padding: 3px 0" type="text">
        举报
      </el-button>
    </div>
    <div class="text-item">
      {{postContent}}
    </div>
    <div class="img-item">
<!--      <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">-->
<!--      <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">-->
    </div>
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
  width: 100%;
  border-radius: 20px
}
.img-item{
  margin-left: 10px;
}

.image {
  /*width: 100%;*/
  margin-top: 5px;
  margin-right: 5px;
  border-radius: 10px
}
</style>
