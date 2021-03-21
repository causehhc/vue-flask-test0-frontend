<template>
  <div class="UserSidebar_Wrapper">
    <el-row>
      <Part1/>
    </el-row>
    <el-row>
      <Part2/>
    </el-row>
    <el-row>
      <Part3/>
    </el-row>
  </div>
</template>

<script>
import Part1 from "@/components/layout/AppMain/UserSidebar/Part1";
import Part2 from "@/components/layout/AppMain/UserSidebar/Part2";
import Part3 from "@/components/layout/AppMain/UserSidebar/Part3";

export default {
  name: "index",
  components: {Part1, Part2, Part3}
}
</script>

<style scoped>
.UserSidebar_Wrapper{
  text-align: center;
  /*margin-top: 18px;*/
  background: #1ff2f2;
}
</style>
