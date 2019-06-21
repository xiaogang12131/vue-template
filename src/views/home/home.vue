<template>
  <div class="wrapper">
    <head-bar></head-bar>
    <aside-bar></aside-bar> 
    <div class="section" :class="{'section-collapse':isCollapse}">
      <router-view></router-view>
    </div>   
  </div>
</template>

<script>
  import {mapState,mapMutations,mapGetters,mapActions} from 'vuex'
  import headBar from 'components/headBar/headBar.vue'
  import asideBar from 'components/asideBar/asideBar.vue'
  export default {
    components:{
      headBar,asideBar
    },
    computed:{
      ...mapState([
        'isCollapse'
      ])
    },
    data(){
      return {
      }
    },
    mounted(){

    }
  }
</script>

<style lang="stylus" scoped>
  @import 'home.styl'
</style>