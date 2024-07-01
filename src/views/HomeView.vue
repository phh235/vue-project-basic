<script setup>
import { useTodoStore } from "@/store/TodoStore";
import { computed, onMounted, ref } from "vue";
import { useRouter } from "vue-router";

const store = useTodoStore();
const router = useRouter();

// onMounted(() => {
//   (async () => {
//     const res = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await res.json();
//     users.value = data;
//   })();
// });

// const filterUsers = computed(() => {
//   return users.value.filter(
//     (item) =>
//       item.name.toUpperCase().indexOf(txtSearch.value.toUpperCase()) !== -1 ||
//       item.email.toUpperCase().indexOf(txtSearch.value.toUpperCase()) !== -1
//   );
// });
</script>

<template>
  <main style="padding: 2rem">
    <input
      type="text"
      placeholder="Enter search here"
      @input="(event) => store.handleChangeTxtSearch(event.target.value)"
    />
    <div class="group-card">
      <!-- <div v-if="filterUsers.length === 0">No results found</div> -->
      <div class="card-item" v-for="user in store.filterUsers">
        <div @click="router.push({ path: `todo/${user?.id}` })">
          <h2>{{ user?.name }}</h2>
          <i>{{ user?.email }}</i>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped></style>
