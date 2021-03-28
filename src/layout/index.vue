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
import Navbar from "./components/Navbar";
import AppMain from "./components/AppMain";
export default {
  name: "index",
  // eslint-disable-next-line vue/no-unused-components
  components: {AppMain, Navbar}
}
</script>

<style scoped>
.Base_Container {

}
.Header_Wrapper{

}
.Main_Wrapper{
  height: 650px;
  /*height: 100%;*/
  /*position:relative;*/
  /*overflow-y: hidden;*/
  background: #eff2f2;
}

</style>
