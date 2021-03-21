<template>
  <div class="AppMain_Wrapper">
    <el-col :span="20">
      <CardsList/>
<!--      <test/>-->
    </el-col>
    <el-col :span="4">
      <UserSidebar/>
    </el-col>
  </div>
</template>

<script>
import CardsList from "@/components/layout/AppMain/CardsList/index";
import UserSidebar from "@/components/layout/AppMain/UserSidebar/index";

import test from '@/components/layout/AppMain/CardsList/test'

export default {
  name: "index",
  // eslint-disable-next-line vue/no-unused-components
  components: {CardsList, UserSidebar, test},
}
</script>

<style scoped>
.AppMain_Wrapper{

  /*background: #1ff2f2;*/
}
</style>
