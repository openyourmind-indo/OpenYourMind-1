<script setup>
import { useStoreBrand } from '../../store/useStoreBrand';
import { useStoreCard } from '../../store/StoreCard';
import { useStoreAccordion } from '../../store/useStoreAccordion';
import { useStoreGallery } from '../../store/useStoreGallery';
import { useArticle } from '../../store/article/useArticle';
import { storeToRefs } from 'pinia';
import hero from 'public/hero.svg'
const { TestimoniData, BrandsData } = storeToRefs(useStoreBrand())
const { CardsData, CardPrice, CardTesti } = storeToRefs(useStoreCard())
const { ArticleData } = storeToRefs(useArticle())
const { FaqData } = storeToRefs(useStoreAccordion())
const { ImageData } = storeToRefs(useStoreGallery())
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
                            Service
                        </h1>
                        <p class="pt-4 pb-8 text-lg font-normal text-white font-main">
                            Lorem ipsum dolor sit amet consectetur. Convallis est urna adipiscing fringilla nulla diam
                            lorem
                            non mauris. Ultrices aliquet at quam.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <!-- Services -->
        <section class="container py-16">
            <CardsDefault title="Services" description="Empowering Minds Our Mental Health Consulting Services" />
            <DefaultSwipper />
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
