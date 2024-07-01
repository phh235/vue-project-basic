<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const router = useRoute();
const user = ref(null);

onMounted(() => {
  (async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${router.params.id}`);
    const data = await res.json();
    user.value = data;
  })();
});
</script>

<template>
  <main style="padding: 2rem">
    <!-- Todo Item {{ router.params.id }} -->
    <div class="card-item">
      <h2>{{ user?.email }}</h2>
      <h2>{{ user?.name }}</h2>
      <h2>{{ user?.phone }}</h2>
      <h2>{{ user?.username }}</h2>
      <h2>{{ user?.website }}</h2>
      <button style="background-color: #c20000; color: #fff">Delete</button>
    </div>
  </main>
</template>
