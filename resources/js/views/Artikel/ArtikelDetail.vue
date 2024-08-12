<script setup>
import { ref, watch, onMounted, computed } from 'vue'
import { useStoreBrand } from '../../store/useStoreBrand';
import { useStoreCard } from '../../store/StoreCard';
import { useStoreAccordion } from '../../store/useStoreAccordion';
import { useStoreGallery } from '../../store/useStoreGallery';
import { useArticle } from '../../store/article/useArticle';
import { storeToRefs } from 'pinia';
import { useRoute } from 'vue-router'
import { useAttrs } from 'vue';
const { TestimoniData, BrandsData } = storeToRefs(useStoreBrand())
const { CardsData, CardPrice, CardTesti } = storeToRefs(useStoreCard())
const { ArticleData } = storeToRefs(useArticle())
const { FaqData } = storeToRefs(useStoreAccordion())
const { ImageData } = storeToRefs(useStoreGallery())
const route = useRoute()
const dataView = ref(null)

const TableView = () => {
    console.log('ArticleData:', ArticleData.value)
    console.log('Route params:', route.params.id)
    dataView.value = ArticleData.value.filter(details => details.id === Number(route.params.id))
}
const real = computed(() => ArticleData.value.filter(item => item.id === Number(route.params.id)))
// Watch for changes in ArticleData and route
watch([ArticleData, route], () => {
    TableView()
}, { immediate: true })

onMounted(() => {
    TableView()
    console.log(real.value);
})
const attrs = useAttrs();
</script>

<template>
    <DefaultLayout>
        <!-- Hero Section -->
        <section class="bg-center bg-cover bg-hero-bg ">
            <div class="container">
                <div class="max-w-screen-xl px-4 mx-auto lg:grid lg:gap-0">
                    <div class="py-24 mr-auto lg:pl-24 xl:pl-12 place-self-center">
                        <h1
                            class="max-w-2xl mb-4 text-4xl font-semibold leading-none tracking-tight text-white md:text-5xl font-secondary">
                            Articel Detail
                        </h1>
                        <p class="pt-4 pb-8 text-lg font-normal text-white font-main">
                            Lorem ipsum dolor sit amet consectetur. Convallis est urna adipiscing fringilla nulla diam
                            lorem
                            non mauris. Ultrices aliquet at quam.
                        </p>
                        <!-- <Button
                            class="px-6 py-2 text-sm font-bold text-center text-white transition-all rounded-lg md:px-12 md:py-3 font-secondary bg-secondary-green md:rounded-full hover:shadow-lg"
                            title="Get Started" />
                        <ul class="flex flex-row items-start justify-start py-8">
                            <li v-for="item in BrandsData" :key="item">
                                <Brands :data="item" />
                            </li>
                        </ul> -->
                    </div>
                    <!-- <div class="hidden lg:mt-40 lg:col-span-5 lg:flex">
                        <img src="../../../public/hero.svg" alt="mockup" class="w-96 h-72">
                    </div> -->
                </div>
            </div>
        </section>
        <!-- PromotionCard -->
        <section v-for="(item, index) in dataView" :key="index" class="py-16">
            <div class="container">


                <img class="h-auto max-w-full" :src="item.img" alt="image description">
                <div class="grid grid-cols-12">
                    <div class="col-span-9">
                        <header class="text-5xl font-bold text-black font-secondary">
                            {{ item.title }}
                        </header>
                        <p class="text-lg font-normal text-black font-main">
                            {{ item.description }}
                        </p>
                    </div>
                    <div class="col-span-3">okj</div>
                </div>
            </div>
        </section>
        <!-- PromotionCard -->
        <section class="py-16 bg-cover bg-hero-pattern1">
            <PromotionCard title="Join To Our Newsletter" description="Lorem ipsum dolor sit amet consectetur. Convallis est urna adipiscing fringilla nulla diam lorem non
            mauris. Ultrices aliquet at quam adipiscing feugiat interdum mattis. Placerat donec risus diam sed
            et. A in ullamcorper ipsum.">
                <PromotionForm />
            </PromotionCard>
        </section>
        <!-- Testimonials -->
        <section class="container py-16">
            <div class="px-4 mx-auto lg:grid lg:gap-0 xl:gap-0 lg:grid-cols-12">
                <HeroText header="Team Conselor" title="Caring for Your Mental Health Get to Know Our Team of Experts">
                </HeroText>
                <div class="lg:col-span-6">
                    <CardTestimonial :data="CardTesti"></CardTestimonial>
                </div>
            </div>
        </section>
    </DefaultLayout>
</template>
