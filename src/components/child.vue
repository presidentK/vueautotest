<template>
    <div class='child'>
        <el-button @click='changeP'>modify parent data</el-button>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import {Component,Emit} from 'vue-property-decorator'
@Component({})
export default class Child extends Vue{
    // created(){
    //     this.$on('change_p',()=>{
    //         console.log('child received change_P')
    //     })
    // }
    changeP(){
        this.$emit('changep','11')
    }
}
</script>

