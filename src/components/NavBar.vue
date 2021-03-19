<template>
  <div id="navbar">
    <div class="NavBar_NavigationWrapper">
      <div class="NavBar_NavigationContainer">
        <el-row :gutter="20" class="el-row">
            <el-col :span="4">
              <div class="grid-content bg-purple">
                  <i class="el-icon-check"></i>*Hub
              </div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content bg-purple-light">
                  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                    <el-menu-item index="1">动态</el-menu-item>
                    <el-submenu index="2">
                      <template slot="title">分析</template>
                      <el-menu-item index="2-1">一天</el-menu-item>
                      <el-menu-item index="2-2">一周</el-menu-item>
                      <el-menu-item index="2-3">一月</el-menu-item>
                    </el-submenu>
                    <el-menu-item index="3">社群发现</el-menu-item>
                    <el-menu-item index="4" disabled>今日爱国</el-menu-item>
                    <el-menu-item index="4"><a href="https://github.com/causehhc" target="_blank">友链</a></el-menu-item>
                  </el-menu>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content bg-purple">
<!--                  <el-input-->
<!--                      placeholder="搜索"-->
<!--                      prefix-icon="el-icon-search"-->
<!--                      v-model="input2">-->
<!--                  </el-input>-->
              </div>
            </el-col>
            <el-col :span="4">
              <div class="grid-content bg-purple-light">
                  <i class="el-icon-edit"></i>
              </div>
            </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style scoped>
.el-row {
  margin-bottom: 20px;
  display: flex;
  flex-wrap: wrap;
  align-items:center;
}
.bg-purple {
  background: #99a9bf;
  min-width: 100%;
  height: 100%;
  margin-right: 20px;
  transition: all .5s;
}
.bg-purple-light {
  background: #e5e9f2;
  min-width: 100%;
  height: 100%;
  margin-right: 20px;
  transition: all .5s;
}
</style>
