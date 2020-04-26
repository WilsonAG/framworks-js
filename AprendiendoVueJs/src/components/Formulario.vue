<template>
  <div class="general">
    <Slider title="Formulario" />
    <div class="center">
      <section class="content">
        <h2 class="subheader">Formulario</h2>

        <form class="mid-form" @submit.prevent="mostrarUsuario()">
          <div class="form-group">
            <label for="name">Nombre:</label>
            <input type="text" name="name" id="name" v-model="user.nombre" />
            <div v-if="submitted && !$v.user.nombre.required">Este campo es requerido</div>
            <div v-if="submitted && !$v.user.nombre.minLength">Este campo debe tener mas letras</div>
          </div>
          <div class="form-group">
            <label for="lastname">Apellido:</label>
            <input type="text" name="lastname" id="lastname" v-model="user.apellidos" />
            <div v-if="submitted && !$v.user.apellidos.required">Este campo es requerido</div>
            <div v-if="submitted && !$v.user.apellidos.minLength">Este campo debe tener mas letras</div>
          </div>
          <div class="form-group radio">
            <label for="name">Biografia:</label>
            <textarea name="bio" id cols="30" rows="10" v-model="user.bio"></textarea>
            <div v-if="submitted && !$v.user.bio.required">Este campo es requerido</div>
          </div>
          <div class="form-group radio">
            <input type="radio" name="genre" value="hombre" v-model="user.genero" /> Hombre
            <input type="radio" name="genre" value="mujer" v-model="user.genero" /> Mujer
            <input type="radio" name="genre" value="otro" v-model="user.genero" /> Otro
          </div>
          <div class="clearfix"></div>

          <input type="submit" value="Enviar" class="btn btn-success" />
        </form>

        <div class="datos" v-if="user && user.nombre && user.apellidos">
          <h3>{{user.nombre + ' ' + user.apellidos}}</h3>
        </div>
      </section>
      <Sidebar />
    </div>
    <div class="clearfix"></div>
  </div>
</template>

<script>
import Sidebar from "./Sidebar.vue";
import Slider from "./Slider.vue";
import { required, minLength } from "vuelidate/lib/validators";

export default {
  name: "Formulario",
  components: {
    Sidebar,
    Slider
  },
  validations: {
    user: {
      nombre: {
        required,
        minLength: minLength(2)
      },
      apellidos: {
        required,
        minLength: minLength(2)
      },
      bio: {
        required
      }
    }
  },
  data() {
    return {
      submitted: false,
      user: {
        nombre: null,
        apellidos: null,
        bio: null,
        genero: null
      }
    };
  },
  methods: {
    mostrarUsuario() {
      this.submitted = true;

      this.$v.$touch();
      if (this.$v.$invalid) {
        return false;
      }

      alert("enviar forms");
    }
  }
};
</script>

<style>
</style>