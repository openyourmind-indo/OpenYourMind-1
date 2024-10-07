<template>
    <DefaultLayout>
        <h1 class="text-2xl text-red-600">This is State:</h1>
       <button @click="logout">Logout</button>
    </DefaultLayout>
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