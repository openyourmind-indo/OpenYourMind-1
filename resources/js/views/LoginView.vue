<template>
  <div class="d-flex min-vh-100 align-items-center justify-content-center bg-light">
    <div class="card shadow-sm p-4 w-100" style="max-width: 400px;">
      <h2 class="card-title mb-4">Login</h2>
      <form @submit.prevent="login">
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input v-model="email" type="email" class="form-control" id="email" placeholder="Email" required>
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input v-model="password" type="password" class="form-control" id="password" placeholder="Password" required>
        </div>
        <button type="submit" class="btn btn-primary w-100">Login</button>
      </form>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      errorMessage: ''
    };
  },
  methods: {
    async login() {
      try {
        const response = await fetch('/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: this.email,
            password: this.password
          })
        });

        const data = await response.json();

        if (response.ok) {
          localStorage.setItem('token', data.token);
          this.$router.push({ name: 'home' });
        } else {
          this.errorMessage = data.message || 'Login failed. Please try again.';
        }
      } catch (error) {
        console.error(error);
        this.errorMessage = 'An error occurred. Please try again later.';
      }
    }
  }
};
</script>