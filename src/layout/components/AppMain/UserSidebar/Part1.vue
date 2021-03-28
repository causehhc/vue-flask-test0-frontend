<template>
  <!--  <div>占</div>-->
  <div class="Vue" style="left: -300px;position: relative">
    <div class="demo-image">
      <div class="block"  v-for="fit in fits" :key="fit">
        <span class="demonstration">{{ fit }}</span>
        <el-image
            style="width: 120%; height: 130px;border-top-left-radius: 10px;border-top-right-radius:10px ;position: relative;left: 0px"
            :src="url"
            :fit="fit"
        ></el-image>
      </div>
    </div>
    <div class="demo-type" @click="sb">
      <div>
        <el-avatar @click="sb"
                   style="position: relative;left: -60px;z-index: 999;top: -20px"
                   src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
      </div>
    </div>
    <el-card class="box-card" style="background-color:azure;position:relative;top: -50px;width: 122%;left: -3px;height: 150px">
      <div v-for="o in 1" :key="o" class="text item" >
        <el-link :underline="false" style="font-family:Arial;font-size: large;left: -30px;top: 20px">
          小明
        </el-link>
        <el-link :underline="false" style="font-family:Arial;font-size: large;left: -65px;top: 60px">
          小红   |  小蓝
        </el-link>

      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  methods: {sb(){
      console.log(1)
      window.location.href="https://hao.360.com/?a1004"
    }},
  data() {
    return {
      fits: [''],
      url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
    }
  },

}
</script>

<style scoped>

</style>
