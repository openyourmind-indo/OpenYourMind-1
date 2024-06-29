<template>
    <section class="flex items-center justify-center p-8 bg-stripes bg-cover min-h-screen lg:min-h-[519px]">
        <div class="flex flex-col items-center text-center text-white p-4 lg:p-12 relative">
            <img src="../../../public/placeholder/left-quote.svg" class="quote-icon top-left-quote" alt="Left Quote" />
            <blockquote class="quote-text">
                {{ quote }}
            </blockquote>
            <img src="../../../public/placeholder/right-quote.svg" class="quote-icon bottom-right-quote"
                alt="Right Quote" />
        </div>
    </section>
</template>

<script setup>
defineProps({
    quote: {
        type: String,
        required: true,
    }
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap');

:root {
    --quote-icon-size: 54px;
    --quote-icon-large-size: 92px;
}

.bg-stripes {
    background-image: url('../../../public/placeholder/quote-bg.png');
    background-size: cover;
    background-position: center;
}

.quote-text {
    font-size: clamp(2rem, 4vw, 3.375rem);
    font-weight: bold;
    font-family: 'Manrope', sans-serif;
    max-width: 80%;
    line-height: 1.2;
}

.quote-icon {
    width: var(--quote-icon-size);
    height: var(--quote-icon-size);
    position: absolute;
}

.top-left-quote {
    top: 0;
    left: 10%;
    transform: translate(-170%, -60%);
    width: var(--quote-icon-large-size);
    height: var(--quote-icon-large-size);
}

.bottom-right-quote {
    bottom: 0;
    right: 10%;
    transform: translate(50%, 10%);
    width: var(--quote-icon-large-size);
    height: var(--quote-icon-large-size);
}

@media (min-width: 1024px) {
    .top-left-quote {
        left: 20%;
    }

    .bottom-right-quote {
        right: 20%;
    }
}

@media (max-width: 1735px) {
    .bottom-right-quote {
        transform: translateY(50%);
    }
}

@media (max-width: 1024px) {

    .top-left-quote {
        transform: translate(10%, -100%);
    }

}
</style>
