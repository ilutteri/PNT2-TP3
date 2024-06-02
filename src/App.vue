<template>
  <div class="container mt-3">
    <div class="jumbotron">
      <h1>Programación en Nuevas Tecnologías II</h1>
      <hr>
      <h2>Trabajo Práctico N°3</h2>
      <br>
      <Navbar />
      <RouterView />
    </div>
  </div>
</template>

<script>

import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>
  .jumbotron{
    background-color: rgb(179, 176, 176);
  }

  body{
    background-color: #343A40
  }

  h1{
    color:darkgreen;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif
  }
  h2{
    font-style:italic;
    font-size: x-large;
  }
</style>
