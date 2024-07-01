<script setup>
import { useTodoStore } from "@/store/TodoStore";
import { ref } from "vue";

const user = ref(null);
const store = useTodoStore();
</script>

<template>
  <main style="padding: 2rem">
    <!-- Todo Item {{ router.params.id }} -->
    <div class="card-item">
      <h2>{{ store.detailUser.email }}</h2>
      <h2>{{ store.detailUser.name }}</h2>
      <h2>{{ store.detailUser.phone }}</h2>
      <button style="background-color: #c20000; color: #fff">Delete</button>
    </div>
  </main>
</template>
