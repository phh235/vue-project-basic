<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="topnav">
    <img class="logo" width="40" height="40" src="@/assets/logo.svg" alt="Vue logo" />
    <RouterLink to="/">
      <div class="btn btn-primary">Home</div>
    </RouterLink>
    <RouterLink to="/create">
      <div class="btn btn-secondary">Create</div>
    </RouterLink>
  </div>
  <router-view></router-view>
</template>

<style scoped></style>
