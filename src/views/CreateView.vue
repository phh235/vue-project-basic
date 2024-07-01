<script setup>
import { useTodoStore } from "@/store/TodoStore";
import { reactive } from "vue";
import { useRouter } from "vue-router";

const store = useTodoStore();
const router = useRouter();

const todoData = reactive({
  email: "",
  username: "",
  phone: "",
  website: "",
});

const handleCreateNewData = async () => {
  store.handleCreateUSer({ id: String(Math.random()), ...todoData });
  router.push("/");
};
</script>

<template>
  <main style="padding: 2rem">
    <h1 style="font-weight: bold">Create Todo</h1>
    <div style="margin-top: 1rem">
      <input type="text" placeholder="Email" v-model="todoData.email" />
    </div>
    <div style="margin-top: 1rem">
      <input type="text" placeholder="Name" v-model="todoData.name" />
    </div>
    <div style="margin-top: 1rem">
      <input type="text" placeholder="Phone" v-model="todoData.phone" />
    </div>
    <div class="btn btn-primary" style="margin-top: 1rem" @click="handleCreateNewData">
      Create new
    </div>
  </main>
</template>
