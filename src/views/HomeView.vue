<script setup>
import TheWelcome from '../components/TheWelcome.vue'

const date=new Date()
let input = ref('')

let formDate=date.format('yyyyMMdd')
console.log(formDate)

function Password(e){
  if(e.key==13){
    console.log(input.value)
  }
}

</script>

<template>
  <main>
    <TheWelcome />
    <textarea maxlength="1000"></textarea>
    <el-input type="password" v-model="input" placeholder="请输入内容" @keydown="Password"/>

  </main>
</template>
