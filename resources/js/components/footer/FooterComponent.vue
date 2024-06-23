<script setup>
import BrandLogo from 'public/Logo.svg'
import CallIcon from 'public/call.svg'
import MessageIcon from 'public/message.svg'
import LocationIcon from 'public/location.svg'
</script>

<template>
    <footer class="bg-primary-bg-brown">
        <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 ">
            <div class="md:flex md:justify-between ">
                <div class="mb-6 md:mb-0">
                    <a href="/" class="flex items-center">
                        <img :src="BrandLogo" class="h-8 pr-1" alt="OYM Logo" />
                        <span
                            class="self-center text-3xl md:text-2xl sm:text-xl font-bold whitespace-nowrap dark:text-white">Open
                            Your Mind</span>
                    </a>
                    <div class="mt-4 text-2xl md:text-1xl sm:text-lg text-white dark:text-white">
                        <p>
                            <span style="display: block; line-height: 1.5;">Lorem ipsum dolor sit amet
                                consectetur.</span>
                            <span style="display: block; line-height: 1.5;">Convallis est urna.</span>
                        </p>
                    </div>

                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full">
                    <div>
                        <h2 class="mb-4 font-bold text-3xl md:text-2xl sm:text-xl text-white dark:text-white">Services
                        </h2>
                        <ul class=" text-lg md:text-base sm:text-sm text-white dark:text-white">
                            <li class="mb-3">
                                <a href="/" class="hover:underline">Free Consultant</a>
                            </li>
                            <li class="mb-3">
                                <a href="/" class="hover:underline">We Want to Hear You</a>
                            </li>
                            <li class="mb-3">
                                <a href="/" class="hover:underline">Sharing and Bonding</a>
                            </li>
                            <li class="mb-3">
                                <a href="/" class="hover:underline">Podcast</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 class="mb-4 font-bold text-3xl md:text-2xl sm:text-xl text-white dark:text-white">Contact
                        </h2>
                        <ul class="text-lg md:text-base sm:text-sm text-white dark:text-white">
                            <li class="mb-4 flex items-center">
                                <img :src="CallIcon" class="h-6 w-6 mr-2" alt="Call Icon" />
                                <a href="tel:+628xxxxxxxxxxx" class="hover:underline">+62 8xxxxxxxxxxx</a>
                            </li>
                            <li class="mb-4 flex items-center">
                                <img :src="MessageIcon" class="h-6 w-6 mr-2" alt="Message Icon" />
                                <a href="mailto:openyourmind@gmail.com"
                                    class="hover:underline">openyourmind@gmail.com</a>
                            </li>
                            <li class="mb-4 flex items-center">
                                <img :src="LocationIcon" class="h-6 w-6 mr-2" alt="Location Icon" />
                                <div>
                                    <a href="https://www.google.com/maps/search/?api=1&query=Jl.+Letjen+Sutoyo+1,+Jember,+Jawa+Timur"
                                        class="hover:underline block">
                                        <span class="block">Jl. Letjen Sutoyo 1,</span>
                                        <span class="block">Jember, Jawa Timur</span>
                                    </a>
                                </div>
                            </li>

                        </ul>
                    </div>

                    <div>
                        <h2 class="mb-4 font-bold text-3xl md:text-2xl sm:text-xl text-white dark:text-white">Links</h2>
                        <ul class=" text-lg md:text-base sm:text-sm text-white dark:text-white">
                            <li class="mb-3">
                                <a href="/" class="hover:underline">Privacy Policy</a>
                            </li>
                            <li class="mb-3">
                                <a href="/" class="hover:underline">Term Of Use</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 class="mb-4 font-bold text-3xl md:text-2xl sm:text-xl text-white dark:text-white">Maps</h2>
                        <iframe class="w-full h-40"
                            src="https://www.openstreetmap.org/export/embed.html?bbox=113.708%2C-8.264%2C113.715%2C-8.255&amp;layer=mapnik"
                            allowfullscreen></iframe>
                    </div>
                </div>
            </div>
            <hr class="my-6 border-2 border-white sm:mx-auto dark:border-white lg:my-6" />
            <div class="flex flex-col items-center">
                <div class="flex flex-col items-center">
                    <div class="flex mb-4">
                        <a href="#" class="text-white hover:text-gray-500 mx-2">
                            <svg width="31" height="30" viewBox="0 0 31 30" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.5" y="0.000244141" width="30" height="30" rx="15" fill="#FCF8F4" />
                                <path
                                    d="M20.381 7.50024C20.7914 7.50024 21.1851 7.67584 21.4753 7.9884C21.7655 8.30096 21.9286 8.72488 21.9286 9.16691V20.8336C21.9286 21.2756 21.7655 21.6995 21.4753 22.0121C21.1851 22.3246 20.7914 22.5002 20.381 22.5002H9.54762C9.13716 22.5002 8.74352 22.3246 8.45329 22.0121C8.16305 21.6995 8 21.2756 8 20.8336V9.16691C8 8.72488 8.16305 8.30096 8.45329 7.9884C8.74352 7.67584 9.13716 7.50024 9.54762 7.50024H20.381ZM19.994 20.4169V16.0002C19.994 15.2797 19.7283 14.5887 19.2552 14.0793C18.7821 13.5698 18.1405 13.2836 17.4714 13.2836C16.8137 13.2836 16.0476 13.7169 15.6762 14.3669V13.4419H13.5173V20.4169H15.6762V16.3086C15.6762 15.6669 16.156 15.1419 16.7518 15.1419C17.0391 15.1419 17.3147 15.2648 17.5178 15.4836C17.721 15.7024 17.8351 15.9992 17.8351 16.3086V20.4169H19.994ZM11.0024 12.1336C11.3472 12.1336 11.6778 11.9861 11.9216 11.7235C12.1654 11.461 12.3024 11.1049 12.3024 10.7336C12.3024 9.95858 11.722 9.32524 11.0024 9.32524C10.6555 9.32524 10.3229 9.47362 10.0777 9.73774C9.83242 10.0018 9.69464 10.3601 9.69464 10.7336C9.69464 11.5086 10.2827 12.1336 11.0024 12.1336ZM12.078 20.4169V13.4419H9.93452V20.4169H12.078Z"
                                    fill="#CC7655" />
                            </svg>
                            <span class="sr-only">Instagram page</span>
                        </a>
                        <a href="#" class="text-white hover:text-gray-500 mx-2">
                            <svg width="31" height="30" viewBox="0 0 31 30" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.5" y="0.000244141" width="30" height="30" rx="15" fill="#FCF8F4" />
                                <path
                                    d="M20.381 7.50024C20.7914 7.50024 21.1851 7.67584 21.4753 7.9884C21.7655 8.30096 21.9286 8.72488 21.9286 9.16691V20.8336C21.9286 21.2756 21.7655 21.6995 21.4753 22.0121C21.1851 22.3246 20.7914 22.5002 20.381 22.5002H9.54762C9.13716 22.5002 8.74352 22.3246 8.45329 22.0121C8.16305 21.6995 8 21.2756 8 20.8336V9.16691C8 8.72488 8.16305 8.30096 8.45329 7.9884C8.74352 7.67584 9.13716 7.50024 9.54762 7.50024H20.381ZM19.994 20.4169V16.0002C19.994 15.2797 19.7283 14.5887 19.2552 14.0793C18.7821 13.5698 18.1405 13.2836 17.4714 13.2836C16.8137 13.2836 16.0476 13.7169 15.6762 14.3669V13.4419H13.5173V20.4169H15.6762V16.3086C15.6762 15.6669 16.156 15.1419 16.7518 15.1419C17.0391 15.1419 17.3147 15.2648 17.5178 15.4836C17.721 15.7024 17.8351 15.9992 17.8351 16.3086V20.4169H19.994ZM11.0024 12.1336C11.3472 12.1336 11.6778 11.9861 11.9216 11.7235C12.1654 11.461 12.3024 11.1049 12.3024 10.7336C12.3024 9.95858 11.722 9.32524 11.0024 9.32524C10.6555 9.32524 10.3229 9.47362 10.0777 9.73774C9.83242 10.0018 9.69464 10.3601 9.69464 10.7336C9.69464 11.5086 10.2827 12.1336 11.0024 12.1336ZM12.078 20.4169V13.4419H9.93452V20.4169H12.078Z"
                                    fill="#CC7655" />
                            </svg>
                            <span class="sr-only">Facebook page</span>
                        </a>
                        <a href="#" class="text-white hover:text-gray-500 mx-2">
                            <svg width="31" height="30" viewBox="0 0 31 30" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.5" y="0.000244141" width="30" height="30" rx="15" fill="#FCF8F4" />
                                <path
                                    d="M20.381 7.50024C20.7914 7.50024 21.1851 7.67584 21.4753 7.9884C21.7655 8.30096 21.9286 8.72488 21.9286 9.16691V20.8336C21.9286 21.2756 21.7655 21.6995 21.4753 22.0121C21.1851 22.3246 20.7914 22.5002 20.381 22.5002H9.54762C9.13716 22.5002 8.74352 22.3246 8.45329 22.0121C8.16305 21.6995 8 21.2756 8 20.8336V9.16691C8 8.72488 8.16305 8.30096 8.45329 7.9884C8.74352 7.67584 9.13716 7.50024 9.54762 7.50024H20.381ZM19.994 20.4169V16.0002C19.994 15.2797 19.7283 14.5887 19.2552 14.0793C18.7821 13.5698 18.1405 13.2836 17.4714 13.2836C16.8137 13.2836 16.0476 13.7169 15.6762 14.3669V13.4419H13.5173V20.4169H15.6762V16.3086C15.6762 15.6669 16.156 15.1419 16.7518 15.1419C17.0391 15.1419 17.3147 15.2648 17.5178 15.4836C17.721 15.7024 17.8351 15.9992 17.8351 16.3086V20.4169H19.994ZM11.0024 12.1336C11.3472 12.1336 11.6778 11.9861 11.9216 11.7235C12.1654 11.461 12.3024 11.1049 12.3024 10.7336C12.3024 9.95858 11.722 9.32524 11.0024 9.32524C10.6555 9.32524 10.3229 9.47362 10.0777 9.73774C9.83242 10.0018 9.69464 10.3601 9.69464 10.7336C9.69464 11.5086 10.2827 12.1336 11.0024 12.1336ZM12.078 20.4169V13.4419H9.93452V20.4169H12.078Z"
                                    fill="#CC7655" />
                            </svg>
                            <span class="sr-only">Youtube page</span>
                        </a>
                        <a href="#" class="text-white hover:text-gray-500 mx-2">
                            <svg width="31" height="30" viewBox="0 0 31 30" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.5" y="0.000244141" width="30" height="30" rx="15" fill="#FCF8F4" />
                                <path
                                    d="M20.381 7.50024C20.7914 7.50024 21.1851 7.67584 21.4753 7.9884C21.7655 8.30096 21.9286 8.72488 21.9286 9.16691V20.8336C21.9286 21.2756 21.7655 21.6995 21.4753 22.0121C21.1851 22.3246 20.7914 22.5002 20.381 22.5002H9.54762C9.13716 22.5002 8.74352 22.3246 8.45329 22.0121C8.16305 21.6995 8 21.2756 8 20.8336V9.16691C8 8.72488 8.16305 8.30096 8.45329 7.9884C8.74352 7.67584 9.13716 7.50024 9.54762 7.50024H20.381ZM19.994 20.4169V16.0002C19.994 15.2797 19.7283 14.5887 19.2552 14.0793C18.7821 13.5698 18.1405 13.2836 17.4714 13.2836C16.8137 13.2836 16.0476 13.7169 15.6762 14.3669V13.4419H13.5173V20.4169H15.6762V16.3086C15.6762 15.6669 16.156 15.1419 16.7518 15.1419C17.0391 15.1419 17.3147 15.2648 17.5178 15.4836C17.721 15.7024 17.8351 15.9992 17.8351 16.3086V20.4169H19.994ZM11.0024 12.1336C11.3472 12.1336 11.6778 11.9861 11.9216 11.7235C12.1654 11.461 12.3024 11.1049 12.3024 10.7336C12.3024 9.95858 11.722 9.32524 11.0024 9.32524C10.6555 9.32524 10.3229 9.47362 10.0777 9.73774C9.83242 10.0018 9.69464 10.3601 9.69464 10.7336C9.69464 11.5086 10.2827 12.1336 11.0024 12.1336ZM12.078 20.4169V13.4419H9.93452V20.4169H12.078Z"
                                    fill="#CC7655" />
                            </svg>
                            <span class="sr-only">Twitter page</span>
                        </a>
                        <a href="#" class="text-white hover:text-gray-500 mx-2">
                            <svg width="31" height="30" viewBox="0 0 31 30" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.5" y="0.000244141" width="30" height="30" rx="15" fill="#FCF8F4" />
                                <path
                                    d="M20.381 7.50024C20.7914 7.50024 21.1851 7.67584 21.4753 7.9884C21.7655 8.30096 21.9286 8.72488 21.9286 9.16691V20.8336C21.9286 21.2756 21.7655 21.6995 21.4753 22.0121C21.1851 22.3246 20.7914 22.5002 20.381 22.5002H9.54762C9.13716 22.5002 8.74352 22.3246 8.45329 22.0121C8.16305 21.6995 8 21.2756 8 20.8336V9.16691C8 8.72488 8.16305 8.30096 8.45329 7.9884C8.74352 7.67584 9.13716 7.50024 9.54762 7.50024H20.381ZM19.994 20.4169V16.0002C19.994 15.2797 19.7283 14.5887 19.2552 14.0793C18.7821 13.5698 18.1405 13.2836 17.4714 13.2836C16.8137 13.2836 16.0476 13.7169 15.6762 14.3669V13.4419H13.5173V20.4169H15.6762V16.3086C15.6762 15.6669 16.156 15.1419 16.7518 15.1419C17.0391 15.1419 17.3147 15.2648 17.5178 15.4836C17.721 15.7024 17.8351 15.9992 17.8351 16.3086V20.4169H19.994ZM11.0024 12.1336C11.3472 12.1336 11.6778 11.9861 11.9216 11.7235C12.1654 11.461 12.3024 11.1049 12.3024 10.7336C12.3024 9.95858 11.722 9.32524 11.0024 9.32524C10.6555 9.32524 10.3229 9.47362 10.0777 9.73774C9.83242 10.0018 9.69464 10.3601 9.69464 10.7336C9.69464 11.5086 10.2827 12.1336 11.0024 12.1336ZM12.078 20.4169V13.4419H9.93452V20.4169H12.078Z"
                                    fill="#CC7655" />
                            </svg>
                            <span class="sr-only">Linkedin page</span>
                        </a>
                    </div>
                </div>
                <span class="text-xl text-white sm:text-center dark:text-white">copyright 2023 @openyourmind</span>
            </div>
        </div>
    </footer>
</template>

<style scoped>
@media (max-width: 768px) {
    footer .grid {
        grid-template-columns: 1fr !important;
    }

    footer .sm\:justify-center {
        justify-content: center !important;
    }
}
</style>
