<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item :to="{ path: matcheds[index].path }" v-for="(item, index) in metas" :key="index">{{item}}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
  export default{
    data(){
      return{
        metas:[],
        matcheds:[]
      }
    },
    created(){
      this.metas = this.$route.meta;
      this.matcheds = this.$route.matched;
    }
  }
</script>