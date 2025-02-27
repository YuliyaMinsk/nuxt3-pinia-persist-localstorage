<template>
  <div>
    <h1>User: {{ user.name }}</h1>
    <input v-model="newName" placeholder="Enter new name" />
    <button @click="updateName">Update Name</button>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useMainStore } from '~/stores/main';

const store = useMainStore();
const user = computed(() => store.user);

const newName = ref('');

const updateName = () => {
  if (newName.value.trim()) {
    store.updateName(newName.value);
    newName.value = '';
  }
};
</script>
