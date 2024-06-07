/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
    ],
    theme: {
        fontFamily: {
            'body': ["Inter", "sans-serif"],
        },
        extend: {
            colors: {
                'primary-main': '#CC7655',
                'primary-title': '#1A1A1A',
                'primary-text-brown': '#EC744A',
                'primary-bg-brown': '#D17957',
                'primary-bg-brown-gradient': '#E39374',
                'secondary-green': '#007D6E',
                // ? pallete for login page
                'secondary-green-login': '#43A478',
                'secondary-green-login-button': '#59B17B',
                'secondary-login-input': '#ECECEC',
            },
        },
    },
    plugins: [],
}

