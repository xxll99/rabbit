<script setup>
import TheWelcome from '../components/TheWelcome.vue'

const date=new Date()
let formDate=date.format('yyyyMMdd')
console.log(formDate)
</script>

<template>
  <main>
    <TheWelcome />
    <textarea maxlength="1000"></textarea>
  </main>
</template>
