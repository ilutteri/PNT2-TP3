<template>

    <section class="src-components-form">
        <div class="jumbotron">
            <h3>Ingreso de Datos</h3>
            <hr>
            <br>

            <form @submit.prevent="enviar()">

                <!-- Nombre -->
                <div class="form-group">
                    <label for="nombre">Nombre</label>
                    <input id="nombre" type="text" class="form-control" v-model.trim="formData.nombre"
                        @input="formDirty.nombre = true">

                    <!-- Validaciones -->
                    <div v-if="!formData.nombre && formDirty.nombre" class="alert alert-danger mt-1">
                        <span v-if="!formData.nombre">Campo requerido</span>
                    </div>
                    <div v-else-if="!this.validateNombre() && formDirty.nombre" class="alert alert-danger mt-1">
                        <span>El nombre debe tener entre 5 y 15 caracteres </span>
                    </div>
                </div>

                <!-- Edad -->
                <div class="form-group">
                    <label for="edad">Edad</label>
                    <input id="edad" type="number" class="form-control" v-model.trim="formData.edad"
                        @input="formDirty.edad = true">

                    <!-- Validaciones -->
                    <div v-if="!formData.edad && formDirty.edad" class="alert alert-danger mt-1">
                        <span v-if="!formData.edad">Campo requerido</span>
                    </div>
                    <div v-else-if="!this.validateEdad() && formDirty.edad" class="alert alert-danger mt-1">
                        <span>La edad debe ser entre 18 y 120</span>
                    </div>
                </div>

                <!-- Email -->
                <div class="form-group">
                    <label for="email">Email</label>
                    <input id="email" type="email" class="form-control" v-model.trim="formData.email"
                        @input="formDirty.email = true">

                    <!-- Validaciones -->
                    <div v-if="!formData.email && formDirty.email" class="alert alert-danger mt-1">
                        <span v-if="!formData.email">Campo requerido</span>
                    </div>
                    <div v-else-if="!this.validateEmail() && formDirty.email" class="alert alert-danger mt-1">
                        <span>La direccion de email debe ser valida</span>
                    </div>
                </div>

                <div class="table-responsive">
                    <table class="table">
                        <tr>
                            <th>Nombre</th>
                            <th>Edad</th>
                            <th>Email</th>
                        </tr>

                        <tr>
                            <td>{{ formData.nombre }}</td>
                            <td>{{ formData.edad }}</td>
                            <td>{{ formData.email }}</td>
                        </tr>
                    </table>
                </div>

                <button class="btn btn-success my-3" v-if="this.camposValidados()" type="submit"
                    @click="this.enviar">Enviar</button>

            </form>
        </div>

    </section>

</template>

<script lang="js">

export default {
    name: 'src-components-form',
    props: [],
    mounted() {

    },

    data() {
        return {
            formData: this.getInitialData(),
            formDirty: this.getInitialData()
        }
    },

    methods: {
        getInitialData() {
            return {
                nombre: null,
                edad: null,
                email: null,
            }
        },
        validateNombre() {
            let nombre = this.formData.nombre;
            if (!nombre) return false
            return nombre.length >= 5 && nombre.length <= 15;
        },
        validateEdad() {
            let edad = this.formData.edad;
            if (!edad) return false
            return edad >= 18 && edad <= 120;
        },
        validateEmail() {
            let email = this.formData.email;
            if (!email) return false
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email)
        },
        camposValidados() {
            return this.validateNombre() && this.validateEdad() && this.validateEmail();
        },
        enviar() {
            console.log({ ...this.formData })
            // serviciosUsuarios.post(this.formData)

            this.formData = this.getInitialData();
            this.formDirty = this.getInitialData();
        },
    },

    computed: {
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
