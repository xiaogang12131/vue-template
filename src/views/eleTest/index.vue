<template>
  <div>
      <div class="el-mt-1" v-for="(item,index) in elCascaders" :key="index">
        <button v-if="index == '0'" type="button" @click="addElCascaders">加</button>
        <button v-if="index != '0'" type="button" @click="deleteElCascaders(index)">减</button>
        <el-cascader
          v-model="item.selectOptions"
          :options="item.options"
          @change="handleChange"
          @active-item-change="((val)=>{handleItemChange(val,index)})"
          :props="props"
        ></el-cascader>
      </div>
      <div class="el-mt-1"> 
        <el-date-picker
          v-model="dateValue"
          type="date"
          placeholder="选择日期">
        </el-date-picker>
      </div>
      <div class="el-mt-1">
          <el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button>
          <el-dialog
            title="提示"
            :visible.sync="dialogVisible"
            width="30%">
            <span>这是一段信息</span>
            <span slot="footer" class="dialog-footer">
              <el-button @click="dialogVisible = false">取 消</el-button>
              <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
          </el-dialog>
      </div>
      <div>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </div>
  </div>
</template>

<script>
  import { cityList } from 'http/api'
  export default {
    components:{
    },
    data() {
      return {
        elCascaders:[],
        props: {
          value: 'label',
          children: 'cities'
        },
        dateValue:"",
        dialogVisible: false
      };
    },
    methods: {
      handleChange(val){
        console.log(val);
        this.selectOptions = val;
      },
      handleItemChange(val,index) {
        console.log('active item:', val,index);
        const cityOptions = this.elCascaders[index].options;
        cityOptions.forEach((item,index) => {
          if(item.label == '江苏'){
            item.cities = [{ label: '南京'}] 
          }else if(item.label == "浙江"){
            item.cities = [{ label: '杭州'}] 
          }
        });
      },
      addElCascaders(){
        const cityOptionsItem = {
          "options":[
            {
              "label": "江苏",
              "cities": []
            }, {
              "label": "浙江",
              "cities": []
            }
          ]
        };
        this.elCascaders.push(cityOptionsItem);
      },
      deleteElCascaders(index){
        this.elCascaders.splice(index,1);
      }
    },
    created(){
      cityList().then((res)=>{
        this.elCascaders = res.data.elCascaders;
      })
    },
    mounted(){
    }
  }
  
</script>

<style lang="stylus" scoped>
</style>