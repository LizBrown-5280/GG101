<template>
  <div><h2 @click="test">Dyes</h2></div>
</template>

<script setup>
let a = 1
console.log('a = ', a)

function test() { 
  a = 10
  console.log('a = ', a)
}

</script>

<style>

</style>