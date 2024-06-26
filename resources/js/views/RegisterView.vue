<template>
  <div class="d-flex min-vh-100 align-items-center justify-content-center bg-light">
    <div class="card shadow-sm p-4 w-100" style="max-width: 400px;">
      <h2 class="card-title mb-4">Register</h2>
      <form @submit.prevent="register">
        <div class="mb-3">
          <label for="name" class="form-label">Name</label>
          <input v-model="name" type="text" class="form-control" id="name" placeholder="Name" required>
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input v-model="email" type="email" class="form-control" id="email" placeholder="Email" required>
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input v-model="password" type="password" class="form-control" id="password" placeholder="Password" required>
        </div>
        <div class="mb-3">
          <label for="password_confirmation" class="form-label">Confirm Password</label>
          <input v-model="password_confirmation" type="password" class="form-control" id="password_confirmation" placeholder="Confirm Password" required>
        </div>
        <button type="submit" class="btn btn-primary w-100">Register</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
      password_confirmation: ''
    };
  },
  methods: {
  async register() {
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: this.name,
          email: this.email,
          password: this.password,
          password_confirmation: this.password_confirmation
        })
      });

      const text = await response.text(); // Tambahkan ini
      console.log('Response Text:', text); // Tambahkan ini

      if (response.ok) {
        const user = JSON.parse(text); // Ubah ini
        localStorage.setItem('user', JSON.stringify(user));
        this.$router.push({ name: 'home' });
      } else {
        const error = JSON.parse(text); // Ubah ini
        alert(error.errors ? JSON.stringify(error.errors) : error.error || 'Registration failed');
      }
    } catch (error) {
      console.error('Error registering:', error);
    }
  }
}
}
</script>
