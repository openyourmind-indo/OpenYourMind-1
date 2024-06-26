// ? State management pinia for handle large data procces from backend
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
export const useSwiperStore = defineStore('useSwiperStore', () => {
    // ? state
    const swiperEl = ref(null);
    const SwiperData = ref(Array.from({ length: 4 }, () => ({
        title: 'We Want to Hear You',
        description: 'Lorem ipsum dolor sit amet consectetur Convallis est',
    })))
    // ? method
    const swiperMethod = () => {
        Object.assign(swiperEl.value, {
            slidesPerView: 1,
            spaceBetween: 0,
            pagination: {
                clickable: true,
            },
            breakpoints: {
                768: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
            },
        });
        swiperEl.value.initialize();
    }
    return { swiperEl, swiperMethod, SwiperData }
})
