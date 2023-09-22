import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        aeh_primary: '#84A095',
        aeh_secondary: '#EFE9E2',
        aeh_tertiary: '#3F5032',
        aeh_quaternary: '#A5A5A5',
      },
      backgroundImage: {
        aeh_bg_1:
          'url("https://res.cloudinary.com/caskchain/image/upload/v1695035708/AEHGroup/aeh_bg_1.png")',
        aeh_bg_2:
          'url("https://res.cloudinary.com/caskchain/image/upload/v1695115179/AEHGroup/aeh_bg_2.png")',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
