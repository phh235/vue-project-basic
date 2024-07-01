<script setup>
import { reactive } from "vue";

const todoData = reactive({
  email: "",
  username: "",
  phone: "",
  website: "",
});

const handleCreateNewData = async () => {
  console.log(todoData);
};
</script>

<template>
  <main style="padding: 2rem">
    <h1 style="font-weight: bold">Create Todo</h1>
    <div style="margin-top: 1rem">
      <input type="text" placeholder="Email" v-model="todoData.email" />
    </div>
    <div style="margin-top: 1rem">
      <input type="text" placeholder="Username" v-model="todoData.username" />
    </div>
    <div style="margin-top: 1rem">
      <input type="text" placeholder="Phone" v-model="todoData.phone" />
    </div>
    <div style="margin-top: 1rem">
      <input type="text" placeholder="Website" v-model="todoData.website" />
    </div>
    <div class="btn btn-primary" style="margin-top: 1rem" @click="handleCreateNewData">
      Create new
    </div>
  </main>
</template>
