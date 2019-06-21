<template>
  <div>
    <p v-if="show">{{show}}</p>
    <p>{{count}}</p>
    <button @click="_stateUpdate">点击</button>
  </div>
</template>

<script>
  import {mapState,mapMutations,mapGetters,mapActions} from 'vuex'
  export default{
    components:{},
    data(){
      return{
        show:false
      }
    },
    computed:{
      ...mapState([
        'count'
      ])
    },
    methods:{
      ...mapMutations([
        'countAdd'
      ]),
      _stateUpdate(){
        this.countAdd(99);
        this.show = !this.show;
      },
      _showToggle(){

      }
    },
    mounted(){
      
    }
  }
</script>

<style lang="stylus" scoped>
  button
    font-size:20px
    &:hover
      color:red
      font-weight:bolder
    
</style>