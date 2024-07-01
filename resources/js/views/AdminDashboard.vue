<template>
<h1>Ini dashboard admin</h1>
<button @click="logout">Logout</button>
</template>
<script>
export default {
  methods: {
    logout() {
      // Hapus token dari localStorage
      localStorage.removeItem('token');
      localStorage.removeItem('userRole');
      // Alihkan ke halaman login
      this.$router.push({ name: 'login' });
    }
  }
}
</script>