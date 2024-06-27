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
      password: ''
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
        localStorage.setItem('token', response.token);
        this.$router.push({ name: 'home' });
      } catch (error) {
        console.error(error);
      }
    }
  }
};
</script>
<!-- <script>
export default {
    data() {
        return {
            email: '',
            password: ''
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

                if (response.ok) {
                    const user = await response.json();
                    localStorage.setItem('user', JSON.stringify(user));
                    this.$router.push({ name: 'beranda' }); e
                } else {
                    const error = await response.json();
                    alert(error.error);
                }
            } catch (error) {
                console.error('Error logging in:', error);
            }
        }
    }
};
</script> -->
