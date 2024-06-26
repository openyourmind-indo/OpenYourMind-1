<script setup>
import { useSwiperStore } from '../../store/swiper/useSwiperStore'
import { storeToRefs} from 'pinia'
import { onMounted } from 'vue';
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination } from 'swiper/modules';
const { swiperEl, SwiperData } = storeToRefs(useSwiperStore())
onMounted(() => swiperEl.value && useSwiperStore().swiperMethod());
</script>
<template>
    <swiper-container ref="swiperEl" class="mySwiper" init="false">
        <swiper-slide v-for="({title, description}, index) in SwiperData" :key="index">
            <div
                class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {{ title }}
                    </h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise
                    {{ description}}
                </p>
                <Button
                    class="px-6 py-2 text-sm font-bold text-center text-white transition-all rounded-lg md:px-12 md:py-3 font-secondary bg-secondary-green md:rounded-full hover:shadow-lg"
                    title="See Detail" />
            </div>
        </swiper-slide>
    </swiper-container>

</template>
