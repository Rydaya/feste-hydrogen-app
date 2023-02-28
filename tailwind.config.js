/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        fill: 'var(--color-fill)',
        textBase: 'var(--color-text-base)',
        textWhite: 'var(--color-text-white)',
        green: 'var(--color-green)',
        blue: 'var(--color-blue)',
        yellow: 'var(--color-yellow)',
        purple: 'var(--color-purple)',
        bgProduct: 'var(--color-bg-product)',
      },
      fontFamily: {
        sansSerif: ['"Platform"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['"GTSuperDisplay"', 'ui-serif'],
        serifText: ['"GTSuperText"', 'ui-serif'],
      },
      fontSize: {
        xs: ['0.75rem','0.75rem'], //12px
        s: ['0.875rem','0.875rem'], //14px
        m: ['1rem','1rem'], //16px
        l: ['1.5rem','1.5rem'], //24px
        xl: ['2rem','2rem'], //32px
        '2xl': ['4rem','4rem'], //64px
        '3xl': ['5rem','5rem'], //80px
      },
      screens: {
        xs: '450px',
      },
    },
  },
  plugins: [],
};
