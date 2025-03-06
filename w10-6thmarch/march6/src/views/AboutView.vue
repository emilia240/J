<template>
  <div class="about">
    <h1>This is an about page</h1>
    <!--   {{ todos.id }}
      {{ todos.userId }}
      {{ todos.title }}
      {{ todos.completed }} -->

      <div v-for="todo in todos" :key="todo">
      {{ todo.id }}:
      {{ todo.name }}:
      {{ todo.email }}:
      {{ todo.address.city }}
      </div>

  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
let todos = ref([])
let fetchTodos = async () => {
const response = await fetch('https://jsonplaceholder.typicode.com/users')
const data = await response.json()
todos.value = data
//console.log(data)
}

onMounted( () => {
  fetchTodos()
})

</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
