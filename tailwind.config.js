/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                heading: ['Poppins', 'sans-serif'],
            },
            fontSize: {
                base: ['16px', '1.6'],
            },
            lineHeight: {
                relaxed: '1.75',
            },
        },
    },
    plugins: [],
}
