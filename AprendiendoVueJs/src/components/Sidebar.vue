<template>
  <aside class="sidebar">
    <div class="nav-blog sidebar-item">
      <h3>Puedes hacer esto</h3>
      <a href="#" class="btn btn-success">Crear articulo</a>
    </div>
    <div class="search sidebar-item">
      <h3>buscador</h3>
      <p>Busca lo que gustes</p>
      <form>
        <input type="text" name="search" />
        <input type="submit" value="Buscar" class="btn" />
      </form>
    </div>
  </aside>
</template>

<script>
export default {
  name: "Sidebar"
};
</script>