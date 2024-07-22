// ? Import Tailwind Css & swiper
import "../css/app.css";
import "swiper/css";
import "swiper/css/pagination";
// ? Define vue, pinia store
import { createApp } from "vue";
import { createPinia } from "pinia";
import { Icon } from "@iconify/vue";
// ? import Layouts & Components
import router from "./router";
import DefaultLayout from "@/layouts/DefaultLayouts.vue";
import NavbarComponent from "@/components/navbar/NavbarComponent.vue";
import NavItem from "@/components/navbar/NavItem.vue";
import App from "@/components/App.vue";
import Accordion from "@/components/accordion/Accordion.vue";
import ButtonHamburger from "@/components/base/ButtonHamburger.vue";
import Button from "@/components/base/ButtonComponent.vue";
import FooterComponent from "@/components/footer/FooterComponent.vue";
import Brands from "@/components/brand/Brand.vue";
import TestimoniCard from '@/components/testimoni/TestimoniCard.vue';
import CardsDefault from './components/card/CardsDefault.vue';
import Cards from './components/card/Cards.vue';
import HeroImage from './components/hero/HeroImage.vue';
import HeroText from './components/hero/HeroText.vue';
import DefaultSwipper from './components/swipper/DefaultSwipper.vue';
import Quote from './components/quote/Quote.vue';
import CardsGallery from './components/gallery/CardsGallery.vue';
import PromotionCard from './components/card/PromotionCard.vue';
import PromotionForm from './components/form/PromotionForm.vue';
import CardArticle from './components/card/CardArticle.vue';
import test from './components/card/test.vue';
import CardTesti from './components/card/CardTesti.vue';
// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";
import CardPrice from './components/card/CardPrice.vue';
// ? Initial configuration & Global Registration Component
const app = createApp();
// register Swiper custom elements
register();
app.component("App", App)
    .component("DefaultLayout", DefaultLayout)
    .component("NavbarComponent", NavbarComponent)
    .component("NavItem", NavItem)
    .component("ButtonHamburger", ButtonHamburger)
    .component("Button", Button)
    .component("Cards", Cards)
    .component("IconVue", Icon)
    .component("FooterComponent", FooterComponent)
    .component("Brands", Brands)
    .component("TestimoniCard", TestimoniCard)
    .component("CardsDefault", CardsDefault)
    .component("HeroImage", HeroImage)
    .component("HeroText", HeroText)
    .component("DefaultSwipper", DefaultSwipper)
    .component("Quote", Quote)
    .component("CardsGallery", CardsGallery)
    .component("Accordion", Accordion)
    .component("PromotionCard", PromotionCard)
    .component("PromotionForm", PromotionForm)
    .component("CardArticle", CardArticle)
    .component("CardPrice", CardPrice)
    .component("test", test)
    .component("CardTesti", CardTesti)
    .use(router)
    .use(createPinia())
    .mount("#app");
