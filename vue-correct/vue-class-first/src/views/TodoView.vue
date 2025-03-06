<template>

<div>
   <!--  <h2>Todo list:</h2>
    <p>{{ myString }}</p>
    <input type="text" v-model="myString">
    <hr>
    <button @click="toggle">Click me to toggle</button>
    <p v-if="toggleVis">This text will be toggled on and off</p> -->
    <div v-for="product in myProducts" :key="product">
      <h4>{{ product.title }}</h4>
      <p>{{ product.price }}</p> 
    </div>


</div>


</template>


<script setup>
import { ref } from 'vue'
let myProducts = ref([{
    title: "product One", price: 30
},
{
    title: "product Two", price: 40 
}])



/* let toggleVis = ref(true)

function toggle() {
    toggleVis.value = !toggleVis.value
}
console.log("test")
let myString = ref("")
console.log(myString) */

</script>


<style scoped>
h4 {
    color: green;
}

</style>