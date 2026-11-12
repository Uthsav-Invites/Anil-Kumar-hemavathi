/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./App.tsx",
        "./constants.tsx",
    ],
    theme: {
        extend: {
            fontFamily: {
                traditional: ['Cinzel', 'serif'],
                script: ['Great Vibes', 'cursive'],
                serif: ['Playfair Display', 'serif'],
            },
        },
    },
    plugins: [],
}
