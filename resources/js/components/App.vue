<script setup></script>
<template>
    <!-- <div id="app"> -->
    <router-view></router-view>
    <!-- </div> -->
</template>

<!-- <script>
export default {
    name: 'App',
    data() {
        return {
            loaded: false,
            user: null
        };
    },
    async created() {
        try {
            const response = await fetch('/api/user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });
            if (response.ok) {
                this.user = await response.json();
                localStorage.setItem('user', JSON.stringify(this.user));
            } else {
                console.error('Error fetching user: Unauthorized or invalid token');
            }
        } catch (error) {
            console.error('Error fetching user:', error);
        } finally {
            this.loaded = true;
        }
    }
};
</script> -->
