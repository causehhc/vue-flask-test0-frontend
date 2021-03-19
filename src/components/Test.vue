<template>
  <div id="test">
    <el-container>
      <el-header>
          <navbar/>
      </el-header>
      <el-main>
        <viewmain/>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar';
import ViewMain from '@/components/ViewMain';
export default {
  name: "Test",
  components: {
    // eslint-disable-next-line vue/no-unused-components
    'navbar': NavBar,
    // eslint-disable-next-line vue/no-unused-components
    'viewmain': ViewMain,
  },
}
</script>

<style scoped>
#test {
  /*text-align: center;*/
  /*align-items:center;*/
}

</style>
