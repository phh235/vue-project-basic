import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { useRoute } from "vue-router";

export const useTodoStore = defineStore("todos", () => {
  const router = useRoute();
  const txtSearch = ref("");
  const users = ref([
    {
      id: "1",
      name: "phh235",
      email: "phh235@gmail.com",
      phone: "0355670875",
    },
    {
      id: "2",
      name: "datbq",
      email: "datbui185@gmail.com",
      phone: "123456789",
    },
  ]);

  const handleChangeTxtSearch = (value) => {
    txtSearch.value = value;
  };

  const handleCreateUSer = (body) => {
    users.value.push(body)
  }

  const detailUser = computed(() => {
    return users.value.find((item) => item.id === router.params.id);
  });

  const filterUsers = computed(() => {
    return users.value.filter(
      (item) =>
        item.name.toUpperCase().indexOf(txtSearch.value.toUpperCase()) !== -1 ||
        item.email.toUpperCase().indexOf(txtSearch.value.toUpperCase()) !== -1
    );
  });

  return { users, txtSearch, detailUser, filterUsers, handleChangeTxtSearch, handleCreateUSer };
});
