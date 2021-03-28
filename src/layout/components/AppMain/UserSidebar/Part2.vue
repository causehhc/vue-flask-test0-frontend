<template>
  <!--  <el-card class="box-card">-->
  <!--    <div slot="header" class="clearfix">-->
  <!--      <span style="left: -40px;position: relative">我的世界</span>-->
  <!--&lt;!&ndash;      <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>&ndash;&gt;-->
  <!--    </div>-->
  <!--    <div v-for="o in 4" :key="o" class="text item">-->
  <!--      <el-link :underline="false" style="font-family:Arial;font-size: large;left: -30px;top: 20px">-->
  <!--        小明-->
  <!--      </el-link>-->
  <!--    </div>-->
  <!--  </el-card>-->
  <el-table  @row-click="openDetails"

             :data="tableData"
             class="box-card"
             :header-cell-style="{color:'#333',fontFamily:'微软雅黑',fontSize:'16px',fontWeight:'540'}"
  >
    <el-table-column
        prop="date"
        label="我的世界"
        width="244">
      <!--      <template slot-scope="scope">-->
      <!--        <img  :src="scope.row.img" alt="" style="width: 50px;height: 50px">-->
      <!--      </template>-->
      <template slot-scope="scope">
        <p>{{ scope.row.date}}</p>
        <p style="position: absolute;top: 30px;font-size: 10px">{{ scope.row.date}}</p>
        <el-avatar shape="square" :src="scope.row.image" ></el-avatar>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  methods: {
    openDetails (row, event, column) {
      console.log(row, event, column)
      window.location.href="https://hao.360.com/?a1004"
    },
  },
  data() {
    return {
      tableData: [{
        date: '2016-05-02',
        image:"https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"

      }, {
        date: '2016-05-04',
        image:"https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
      }, {
        date: '2016-05-01',
        image:"https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
      }, {
        date: '2016-05-03',
        image:"https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
      }]
    }
  }
}

</script>


<style scoped>
.box-card{
  border-radius:10px;
  width: 280px;
  position: relative;
  left: -280px;
  /*background-color: red;*/
}
.box-card p{
  font-size: 15px;
  position:absolute;
  left: 60px;
  top:0px;
}
</style>
