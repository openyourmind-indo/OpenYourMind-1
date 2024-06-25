<script setup>
import { useStoreBrand } from '../../store/useStoreBrand';
import { storeToRefs } from 'pinia';
const { TestimoniData } = storeToRefs(useStoreBrand())
</script>
<template>
    <DefaultLayout>
        <section class="container">
            <div class="max-w-screen-xl px-4 mx-auto lg:grid lg:gap-0 xl:gap-0 lg:grid-cols-12">
                <div class="mr-auto place-self-center lg:col-span-7">
                    <h1
                        class="max-w-2xl mb-4 text-4xl font-semibold leading-none tracking-tight text-primary-title md:text-5xl xl:text-6xl font-secondary">
                        Healthy Minds, Happy Lives <span class="text-primary-text-brown">Mental Health</span>
                        Consultancy
                    </h1>
                    <p class="pt-4 pb-8 text-lg font-normal font-main text-primary-title">
                        Lorem ipsum dolor sit amet consectetur. Convallis est urna adipiscing fringilla nulla diam lorem
                        non mauris. Ultrices aliquet at quam.
                    </p>
                    <Button
                        class="px-2 py-2 text-sm font-bold text-center text-white transition-all rounded-lg md:px-12 md:py-3 font-secondary bg-secondary-green md:rounded-full hover:shadow-lg"
                        title="Get Started" />
                    <ul class="flex flex-row items-start justify-start py-8">
                        <li v-for="item in BrandsData" :key="item">
                            <Brands :data="item" />
                        </li>
                    </ul>
                </div>
                <div class="hidden lg:mt-40 lg:col-span-5 lg:flex">
                    <img src="../../../public/hero.svg" alt="mockup" class="w-96 h-72">
                </div>
            </div>
        </section>
        <TestimoniCard :data="TestimoniData"></TestimoniCard>
    </DefaultLayout>
</template>
