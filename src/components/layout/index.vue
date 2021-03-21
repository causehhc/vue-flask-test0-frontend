<template>
  <div class="Base_Container">
    <el-container>
      <el-header class="Header_Wrapper">
        <Navbar/>
      </el-header>
      <el-main class="Main_Wrapper">
        <AppMain/>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import Navbar from "@/components/layout/Navbar";
import AppMain from "@/components/layout/AppMain";
export default {
name: "index",
  components: {AppMain, Navbar}
}
</script>

<style scoped>
.Base_Container {

}
.Header_Wrapper{

}
.Main_Wrapper{
  background: #eff2f2;
}

</style>
