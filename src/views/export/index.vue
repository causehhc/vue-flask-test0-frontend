<template>
  <div class="export-container">
    export
    <ul class="list" v-infinite-scroll="fetchData" infinite-scroll-disabled="disabled">
      <li v-for="(i,index) in list" class="list-item" :key="index">
        <!--          i:{{i}}-->
        <!--          index:{{index}}-->
        <el-card class="box-card" shadow="hover">
          <div slot="header" class="clearfix">
          <span>
            {{i.postTitle}}
          </span>
            <el-button style="float: right; padding: 3px 0" type="text">
              举报
            </el-button>
          </div>
          <div class="text-item">
            {{i.postContent}}
          </div>
          <div class="img-item">
            <!--      <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">-->
            <!--      <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">-->
          </div>
        </el-card>
      </li>
    </ul>
    <div class="OtherNote">
      <p v-if="listLoading" style="margin-top:10px;" class="listLoading">
        <span></span>
      </p>
      <p v-if="noMore" style="margin-top:10px;font-size:13px;color:#ccc">没有更多了</p>
    </div>
  </div>
</template>

<script>
import { getList } from '@/api/export'
export default {
  name: "index",
  data() {
    return {
      count: 0,//起始页数值为0
      listLoading: false,
      totalPages: "",//取后端返回内容的总页数
      list: [] //后端返回的数组
    };
  },
  computed: {
    noMore() {
      //当起始页数大于总页数时停止加载
      return this.count >= this.totalPages - 1;
    },
    disabled() {
      return this.listLoading || this.noMore;
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      setTimeout(() => {
        this.count += 1;
        getList().then(response => {
          this.list = this.list.concat(response.body.content); //因为每次后端返回的都是数组，所以这边把数组拼接到一起
          this.totalPages = response.body.totalPages;
          this.listLoading = false
        });
      }, 10)
    }
  }
}
</script>

<style scoped>
.export-container {
  /*width: 100%;*/
  /*margin:  0 auto;*/
  /*background: #bfa2f2;*/
}
.list {
  padding: 0;
  font-size: 14px;
}
.list-item {
  /*width: 100%;*/
  /*display: block;*/
  /*overflow: hidden;*/
  /*text-overflow: ellipsis;*/
  /*white-space: nowrap;*/
  list-style: none;
  /*padding: 0 1rem;*/
  /*box-sizing: border-box;*/
  /*height: 70px;*/
  /*line-height: 70px;*/
  /*border-bottom: 5px solid #e7e7e7;*/

  /*position: relative;*/
  /*width: 100%;*/
  /*height: 100vh;*/
  display:flex;
  justify-content: center;
  /*align-items: center;*/

  margin-bottom: 18px;
  /*margin-top: 18px;*/
}
.OtherNote{
  text-align: center;
}
.loading span {
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 2px solid #409eff;
  border-left: transparent;
  animation: zhuan 0.5s linear infinite;
  border-radius: 50%;
}
@keyframes zhuan {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}


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
