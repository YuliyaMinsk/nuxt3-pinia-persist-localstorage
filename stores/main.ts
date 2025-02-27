import { defineStore } from 'pinia';

export const useMainStore = defineStore('main', {
  state: () => ({
    user: {
      name: 'John Doe',
      role: 'admin',
    },
  }),
  actions: {
    updateName(newName: string) {
      this.user.name = newName;
    },
  },
  persist: true,
});

