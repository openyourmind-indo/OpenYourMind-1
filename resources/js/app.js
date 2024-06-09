// ? Import Tailwind Css
import '../css/app.css';
// ? Define vue, pinia store
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Icon } from '@iconify/vue'
// ? import Layouts & Components
import router from './router'
import DefaultLayout from '@/layouts/DefaultLayouts.vue'
import NavbarComponent from '@/components/navbar/NavbarComponent.vue'
import NavItem from '@/components/navbar/NavItem.vue'
import App from '@/components/App.vue'
import ButtonHamburger from '@/components/base/ButtonHamburger.vue';
import Button from '@/components/base/ButtonComponent.vue';
// ? Initial configuration & Global Registration Component
const app = createApp()
app.component('App', App)
    .component('DefaultLayout', DefaultLayout)
    .component('NavbarComponent', NavbarComponent)
    .component('NavItem', NavItem)
    .component('ButtonHamburger', ButtonHamburger)
    .component('Button', Button)
    .component('IconVue', Icon)
    .use(router)
    .use(createPinia())
    .mount('#app')
