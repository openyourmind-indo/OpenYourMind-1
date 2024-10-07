// ? State management pinia for handle large data procces from backend
import { defineStore } from 'pinia'
import { ref, shallowRef } from 'vue'
import Api from '@/services/api'
import { useRouter } from 'vue-router'
export const useStoreAuth = defineStore('Auth', () => {
    const route = useRouter()
    // actions
    const register = async (values) => {
        try {
            const response = await Api.post('/api/register', {
                name: values.name,
                email: values.email,
                phone_number: values.phone_number,
                birth_date: values.birth_date,
                password: values.password,
                password_confirmation: values.password_confirmation
            })
            if (response.data.token) {
                localStorage.setItem('user', JSON.stringify({
                    token: response.data.token,
                    role: response.data.role
                }));
            }
            route.push({ name: 'Home' })
        } catch (error) {
            console.error(error);
        }
    }
    const validationRoute = (data) => {
        if (data === 'admin') {
            route.push({ name: 'adminDashboard' });
        } else {
            route.push({ name: 'Home' });
        }
    }
    const logout = () => {
        // Hapus token dari localStorage
        localStorage.removeItem('token');
        localStorage.removeItem('userRole');
        // Alihkan ke halaman login
        route.push({ name: 'login' });
    }
    const login = async (values) => {
        try {
            const response = await Api.post('/api/login', {
                email: values.email,
                password: values.password
            });
            if (response.statusText === 'OK') {
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('userRole', response.data.role); // Simpan role user di localStorage
                return validationRoute(response.data.role)
            }
        } catch (error) {
            console.error(error);
        }
    }
    return {
        login, register, validationRoute, logout
    }

})
