<template>
  <div id="app" class='c1 c2' data-org='pf.com'>
    <el-button @click='changeData'>change provide data</el-button>
    <router-view/>
  </div>
</template>

<script lang='ts'>
//import Vue from 'vue';
import {Vue,Component,Prop,Provide} from 'vue-property-decorator';
import './router-hook';

interface PData{
  p1:string,
  p2:number
}

@Component({})
export default class App extends Vue{
  age:number;
  created(){
    this.$on('change_pdata',(s)=>{
      this.pData.p1='lol'
    })
  }
  @Provide() pData:PData={
    p1:'ss',
    p2:222
  }
  @Prop({default:'hello pf'})
  msg : string;

  changeData(){
    this.pData.p1='ss_2'
  }
  showAlert() : void{
      console.log(this.msg);
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
