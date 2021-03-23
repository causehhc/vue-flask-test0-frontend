<template>
  <div class="AppMain_Wrapper">
    <el-col :span="20">
      <router-view :key="key" />
    </el-col>
    <el-col :span="4">
      <UserSidebar/>
    </el-col>
  </div>
</template>

<script>
import UserSidebar from "./UserSidebar";

export default {
  name: "index",
  // eslint-disable-next-line vue/no-unused-components
  components: {UserSidebar},
  computed: {
    key() {
      return this.$route.path
    }
  }
}
</script>

<style scoped>

</style>
