<template>
  <div class="content">
    <h1 class="subheader">{{titulo}}</h1>
    <h2>{{subtitulo}}</h2>
    <hr />
    <h2>Reactividad</h2>
    <input type="text" v-model="nombre" />
    <p>
      Mi nombre es:
      <strong>{{nombre}}</strong>
    </p>

    <pre>
        {{$data}}
    </pre>

    <h2>Directivas condicionales</h2>
    <input type="number" v-model="edad" />
    <p>
      Mi edad es:
      <strong>{{edad}}</strong>
    </p>

    <p style="color:red" v-if="edad>=18 && edad < 65">ERES MAYOR DE EDAD</p>
    <p style="color:purple" v-else-if="edad >=65">ERES DE AVANZADA EDAD</p>
    <p style="color:green" v-else>ERES MENOR DE EDAD</p>

    <h2>Directiva iterativa</h2>
    <ol>
      <li v-for="pelicula in  peliculas" :key="pelicula">{{pelicula}}</li>
    </ol>
  </div>
</template>

<script>
export default {
  name: "MiComponente",
  data() {
    return {
      titulo: "Mi Componente",
      subtitulo: "Soy el subtitulo de mi componente",
      nombre: null,
      edad: 18,
      peliculas: ["Batman v Sups", "Avengers", "FF"]
    };
  }
};
</script>