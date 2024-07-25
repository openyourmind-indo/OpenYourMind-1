/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
        "./node_modules/flowbite/**/*.js"
    ],
    theme: {
        fontFamily: {
            main: ["Poppins", "sans-serif"],
            secondary: ["Manrope", "sans-serif"],
        },
        extend: {
            backgroundImage: {
                'hero-pattern': "url('/resources/public/bg/bg-founder.svg')",
                'hero-pattern1': "url('/resources/public/bg/newspaper.png')",
                'hero-bg': "url('/resources/public/hero-bg.svg')",
                // 'newsletter-pattern': "url('resources/public/bg/newspaper.png')"
            },
            colors: {
                "card-white": "#F6F5F5",
                "hero-main": "#FCF8F4",
                "primary-main": "#CC7655",
                "primary-title": "#1A1A1A",
                "primary-text-brown": "#EC744A",
                "primary-bg-brown": "#D17957",
                "primary-bg-brown-gradient": "#E39374",
                "secondary-green": "#007D6E",
                // ? pallete for login page
                "secondary-green-login": "#43A478",
                "secondary-green-login-button": "#59B17B",
                "secondary-login-input": "#ECECEC",
            },
            fontSize: {
                "faq-title": "54px",
                "faq-header": "22px",
                "accordion-title": "28px",
                "accordion-content": "18px",
            },
        },
    },
    plugins: [
        require('flowbite/plugin')
    ]
}
