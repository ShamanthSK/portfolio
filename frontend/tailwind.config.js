/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#06131f',
        mist: '#eef6ff',
        cyanGlow: '#6ee7f9',
        tealGlow: '#34d399',
        coralGlow: '#ff7b72',
        goldGlow: '#ffd166',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 20px 60px rgba(0, 0, 0, 0.18)',
      },
      backgroundImage: {
        mesh:
          'radial-gradient(circle at top left, rgba(110, 231, 249, 0.18), transparent 30%), radial-gradient(circle at 80% 20%, rgba(255, 123, 114, 0.2), transparent 28%), radial-gradient(circle at 50% 80%, rgba(52, 211, 153, 0.15), transparent 30%)',
      },
    },
  },
  plugins: [],
};
