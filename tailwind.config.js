/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#6e71a6',
                secondary: '#ff9f41',
                dark: '#0f172a',
                border: '#f1f5f9',
                muted: '#475569',
                background: '#fafafe',
            },
            fontFamily: {
                sans: ['Gudea', 'sans-serif'],
                heading: ['Poppins', 'sans-serif'],
            },
            borderRadius: {
                '3xl': '32px',
                '4xl': '48px',
            },
            spacing: {
                '18': '4.5rem',
            }
        },
    },
    plugins: [],
}
