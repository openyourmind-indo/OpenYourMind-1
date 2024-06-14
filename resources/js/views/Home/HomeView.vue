<script setup>
import { useStoreData } from '../../store/StoreApi.js'
import { ref, onMounted } from 'vue'
const store = useStoreData()
const data = ref([
    {
        id: 1,
        title: 'Holistic approach',
        description: 'Lorem ipsum dolor sit amet consectetur. Convallis est urna adipiscing fringilla nulla diam lorem non mauris.'
    },
    {
        id: 2,
        title: 'Expertise Team',
        description: 'Lorem ipsum dolor sit amet consectetur. Convallis est urna adipiscing fringilla nulla diam lorem non mauris.'
    },
    {
        id: 3,
        title: 'Accessibility',
        description: 'Lorem ipsum dolor sit amet consectetur. Convallis est urna adipiscing fringilla nulla diam lorem non mauris.'
    },
])
</script>
<template>
    <DefaultLayout>
        <section class="">
            <div class="grid max-w-screen-xl px-4 mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12">
                <div class="mr-auto place-self-center lg:col-span-7">
                    <h1
                        class="max-w-2xl mb-4 text-4xl font-semibold leading-none tracking-tight text-primary-title md:text-5xl xl:text-6xl font-secondary">
                        Healthy Minds, Happy Lives <span class="text-primary-text-brown">Mental Health</span>
                        Consultancy
                    </h1>
                    <p class="py-8 text-lg font-normal font-main text-primary-title">
                        Lorem ipsum dolor sit amet consectetur. Convallis est urna adipiscing fringilla nulla diam lorem
                        non mauris. Ultrices aliquet at quam.
                    </p>
                    <Button
                        class="px-2 py-2 text-sm font-bold text-center text-white transition-all rounded-lg md:px-12 md:py-3 font-secondary bg-secondary-green md:rounded-full hover:shadow-lg"
                        title="Get Started" />
                </div>
                <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
                    <img src="../../../public/hero.svg" alt="mockup">
                </div>
            </div>
        </section>
        <section class="flex flex-col items-center justify-center md:flex-row">
            <CardsDefault :data="data" />
        </section>
    </DefaultLayout>
</template>
