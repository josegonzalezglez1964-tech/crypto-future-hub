/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cyberBg: '#030712',     // Negro profundo espacial
        cyberCard: '#0b1329',   // Azul grisáceo oscuro para contenedores
        neonCyan: '#00f5ff',    // Cian brillante interactivo
        neonPurple: '#9d4edd',  // Púrpura de gobernanza y premium
      },
      boxShadow: {
        'neon-glow': '0 0 15px rgba(0, 245, 255, 0.4)',
        'purple-glow': '0 0 15px rgba(157, 78, 221, 0.4)',
      }
    },
  },
  plugins: [],
}
