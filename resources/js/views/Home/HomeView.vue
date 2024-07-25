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
                        class="px-6 py-2 text-sm font-bold text-center text-white transition-all rounded-lg md:px-12 md:py-3 font-secondary bg-secondary-green md:rounded-full hover:shadow-lg"
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
        <!-- Testimoni -->
        <TestimoniCard :data="TestimoniData"></TestimoniCard>
        <!-- Why? -->
        <CardsDefault title="Why?" description="Why Our Mental Health Consultants are the Best Choice">
            <Cards :data="CardsData" />
        </CardsDefault>
        <!-- About Us -->
        <section class="container py-16">
            <div class="px-4 mx-auto lg:grid lg:gap-0 xl:gap-0 lg:grid-cols-12">
                <HeroImage :data="hero" />
                <HeroText
                    description="Lorem ipsum dolor sit amet consectetur. Convallis est urna adipiscing fringilla nulla diam lorem non mauris. Ultrices aliquet at quam adipiscing feugiat interdum mattis. Placerat donec risus diam sed et. A in ullamcorper ipsum justo vestibulum sit cursus A risus donec eget enim"
                    header="About Us" title="Discover the Faces Behind Our Mental Health Consultancy">
                    <Button
                        class="px-6 py-2 text-sm font-bold text-center text-white transition-all rounded-lg md:px-12 md:py-3 font-secondary bg-secondary-green md:rounded-full hover:shadow-lg"
                        title="See Detail" />
                </HeroText>
            </div>
        </section>
        <!-- Services -->
        <section class="container py-16">
            <CardsDefault title="Services" description="Empowering Minds Our Mental Health Consulting Services" />
            <DefaultSwipper />
        </section>
        <!-- Our Founder -->
        <section class="py-16 bg-cover bg-hero-pattern">
            <div class="container px-4 mx-auto lg:grid lg:gap-0 xl:gap-0 lg:grid-cols-12">
                <HeroImage :data="hero" />
                <HeroText className="text-white pt-2 lg:pt-0" header="Our Founder" title="Sahda Salsabila Rojadi">
                    <div class="flex-col items-start justify-center">
                        <div class="flex flex-row items-start gap-5 pb-4">
                            <IconVue icon="academicons:acclaim-square" class="text-white size-[84px]" />
                            <div class="flex flex-col items-start text-white">
                                <h1 class="text-xl font-bold font-secondary">Professional Growth</h1>
                                <p class="pr-10 text-base font-normal lg:pr-20 font-main opacity-80">
                                    Lorem ipsum dolor sit amet consectetur.
                                    Convallis est urna adipiscing fringilla nulla
                                </p>
                            </div>
                        </div>
                    </div>
                </HeroText>
            </div>
        </section>
        <!-- Team conselor -->
        <section class="container py-16">
            <div class="px-4 mx-auto lg:grid lg:gap-0 xl:gap-0 lg:grid-cols-12">
                <HeroText
                    description="Lorem ipsum dolor sit amet consectetur. Convallis est urna adipiscing fringilla nulla diam lorem non mauris. Ultrices aliquet at quam adipiscing feugiat interdum mattis. Placerat donec risus diam sed et. A in ullamcorper ipsum justo vestibulum sit cursus A risus donec eget enim"
                    header="Team Conselor" title="Caring for Your Mental Health Get to Know Our Team of Experts">
                    <Button
                        class="px-6 py-2 text-sm font-bold text-center text-white transition-all rounded-lg md:px-12 md:py-3 font-secondary bg-primary-text-brown md:rounded-full hover:shadow-lg"
                        title="See Detail" />
                </HeroText>
                <HeroImage :data="hero" />
            </div>
        </section>
        <!-- Quote-->
        <section class="container py-16">
            <Quote
                title="Self-care is not a luxury. It's a necessity. Without it, we cannot be our best selves, mentally, emotionally, or physically." />
        </section>
        <!-- Quote-->
        <section class="container py-16 pl-4">
            <CardsGallery title="A Gallery of Mental Health Themes Through Art"
                description="Lorem ipsum dolor sit amet consectetur. Convallis est urna adipiscing fringilla nulla diam lorem non mauris. Ultrices aliquet at quam adipiscing."
                :data="ImageData" />
        </section>
        <!-- PromotionCard -->
        <section class="py-16 bg-cover bg-hero-pattern1">
            <PromotionCard title="Join To Our Newsletter" description="Lorem ipsum dolor sit amet consectetur. Convallis est urna adipiscing fringilla nulla diam lorem non
            mauris. Ultrices aliquet at quam adipiscing feugiat interdum mattis. Placerat donec risus diam sed
            et. A in ullamcorper ipsum.">
                <PromotionForm />
            </PromotionCard>
        </section>
        <!-- Princing -->
        <CardsDefault class="grid grid-cols-1 place-items-center " title="Pricing"
            description="Choose of Mental Health Consultation Packages for Your Needs">
            <!-- <CardPrice></CardPrice> -->
            <test :data="CardPrice"></test> <!-- <h1>ok</h1> -->
        </CardsDefault>
        <!-- Maps -->
        <section class="container py-16">
            <CardsDefault title="Maps" description="Mapping Out Mental Health Consulting Strategies" />
            <MapsVue />
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
        <!-- Accordion -->
        <section>
            <Accordion :data="FaqData"></Accordion>
        </section>
        <!-- articel -->
        <CardsDefault title="Article" description="Our Articel For You">
            <CardArticle :data="ArticleData" />
        </CardsDefault>
    </DefaultLayout>
</template>
