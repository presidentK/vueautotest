<template>
  <div class="hello">
    <el-button @click="showMsg">弹框</el-button>
    <el-button @click='changeParentData("ss_child")'>change parent data</el-button>
    <p>provide data:{{pData.p1}}</p>
    <input  type="text"/>
    <button @click="login">登录</button>
    <div>登录会话:</div>
    <p>用户名：{{$store.state.login.username?$store.state.login.username:'--'}}&nbsp;&nbsp;登录时间：{{$store.state.login.loginTime|formateDate}}</p>
    <Child @changep='consoleChange($event)'></Child>
  </div>
</template>

<script lang="ts">
//  import Vue from 'vue';
  import {Vue,Component,Prop,Model,Emit,Inject} from 'vue-property-decorator';
  import axios from 'axios'
  import {Action} from 'vuex-class'
  import {LoginParam} from '../store/action/loginAction'
  import mtrand from '../util/mtrand';
  import DateUtil from '../util/date'
  import Child from './child.vue'


  @Component({filters:{
      formateDate(date,formate){
          return DateUtil.formate(new Date(date));
      }
  },components:{Child}})
  class HelloWorld extends Vue {
    @Action('login') loginCheckOut:(payload:LoginParam)=>void;
    @Model('change') name;
    @Inject() pData:object;
    msg : string='Welcome to Your Vue.js App';
    n:String='--';
    constructor(){
        super()
    }
    created(){
      this.$on('changep',()=>{
        console.log('parent received change_P')
      })
      console.log(this)
    }
    consoleChange(s){
      console.log('parent received change_P:'+s)
    }
    beforeRouteEnter(to,from,next){
        console.log('router enter')
        next()
    }

    showMsg(){
        this.$msgbox({
            title:'test',
            message:'msgbox is worked!'
        })
    }

    login(){
        console.log(this.pData);
       axios({url:'/mock/fetchData'}).then((res)=>{
           console.log(res)
       })
        this.loginCheckOut({pwd:'p',username:'u'});
       
    }
    say(){
        console.log(mtrand.rand(1,2));
        this.handleChange('changed');
    }
  
    @Emit('change')
    handleChange(s:string):void{
        this.n=s;
        console.log(this.name)
    }
    @Emit('change_pdata')
    changeParentData(s:string){
      console.log('change pdata trigger')
    }
  }
  export default HelloWorld;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
