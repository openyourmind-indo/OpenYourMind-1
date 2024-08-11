<template>
    <div class="d-flex min-vh-100 align-items-center justify-content-center bg-light">
        <div class="p-4 shadow-sm card w-100" style="max-width: 400px;">
            <h2 class="mb-4 card-title">Register</h2>
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
                    <label for="phone_number" class="form-label">Phone Number</label>
                    <input v-model="phone_number" type="text" class="form-control" id="phone_number"
                        placeholder="Phone Number" required>
                </div>
                <div class="mb-3">
                    <label for="birth_date" class="form-label">Birth Date</label>
                    <input v-model="birth_date" type="date" class="form-control" id="birth_date" required>
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Password</label>
                    <input v-model="password" type="password" class="form-control" id="password" placeholder="Password"
                        required>
                </div>
                <div class="mb-3">
                    <label for="password_confirmation" class="form-label">Confirm Password</label>
                    <input v-model="password_confirmation" type="password" class="form-control"
                        id="password_confirmation" placeholder="Confirm Password" required>
                </div>
                <button type="submit" class="btn btn-primary w-100">Register</button>
            </form>
        </div>
    </div>
</template>

<script>
import { register } from '../authService';

export default {
    data() {
        return {
            name: '',
            email: '',
            phone_number: '',
            birth_date: '',
            password: '',
            password_confirmation: ''
        };
    },
    methods: {
        async register() {
            try {
                const response = await register({
                    name: this.name,
                    email: this.email,
                    phone_number: this.phone_number,
                    birth_date: this.birth_date,
                    password: this.password,
                    password_confirmation: this.password_confirmation
                });
                console.log("register berhasil tinggal membuat token")
                if (!response.token) {
                    throw new Error(response.errors ? JSON.stringify(response.errors) : response.error || 'Registration failed');
                }

                console.log("membuat token");
                localStorage.setItem('token', response.token);
                localStorage.setItem('userRole', response.role);
                console.log("token dan role berhasil dibuat, lanjut ke page home");
                this.$router.push({ name: 'home' });
            } catch (error) {
                console.error('Error registering:', error);
                alert(error.message);
            }
        }
    }
};
</script>
