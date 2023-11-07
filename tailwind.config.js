/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './components/**/*.{js,vue,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './nuxt.config.{js,ts}',
        './node_modules/flowbite/**/*.{js,ts}',
    ],
    theme: {
        fontFamily: {
            sans: ['Montserrat'],
            serif: ['Montserrat'],
            mono: ['Montserrat'],
            display: ['Montserrat'],
            body: ['Montserrat'],
        },
        extend: {
            colors: {
                'sips-orange': '#F36D25',
                'sips-navy': '#1A3668',
                'sips-green': '#2D9A47',
                'sips-maroon': '#8F1736',
            },
            backgroundImage: {
                texture: "url('/assets/img/we-are-sips-digital.webp')",
            },
            animation: {
                'infinite-scroll': 'infinite-scroll 50s linear infinite',
            },
            keyframes: {
                'infinite-scroll': {
                    from: { transform: 'translateX(0)' },
                    to: { transform: 'translateX(-100%)' },
                },
            },
        },
    },
    plugins: [require('flowbite/plugin')],
    safelist: [
        {
            pattern: /(bg|text|border)-sips-(orange|navy|green|maroon)/,
        },
    ],
};
