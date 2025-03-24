<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/category">Category Update</RouterLink>
      <RouterLink to="/products">Products Update</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped>

</style>
