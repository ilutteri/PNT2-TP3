<template>
  <section class="src-components-usuarios">
    <div class="jumbotron">
      <h3>Tabla de Usuarios</h3>
      <hr>
      <br>

      <table class="table table-dark">
        <tr>
          <th>Id</th>
          <th>Nombre</th>
          <th>Mail</th>
          <th>Telefono</th>
        </tr>
        <tr v-for="(usuario, index) in usuarios" :key="index">
          <td>{{ usuario.id }}</td>
          <td>{{ usuario.nombre }}</td>
          <td>{{ usuario.email }}</td>
          <td>{{ usuario.telefono }}</td>
        </tr>
      </table>
    </div>
  </section>
</template>

<script>
import * as _usuariosService from '../services/usuarios'

export default {
  name: 'src-components-usuarios',
  props: [],
  data() {
    return {
      usuarios: []
    }
  },
  mounted() {
    this.cargarUsuarios();
  },
  methods: {
    async cargarUsuarios() {
      try {
        const response = await _usuariosService.getAll();
        this.usuarios = response;
      } catch (error) {
        console.error("No se cargaron los usuarios", error);
      }
    }
  }
}
</script>

<style scoped>
.src-components-usuarios {


}
</style>
