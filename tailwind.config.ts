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
        aeh: {
          '50': '#f5f8f6',
          '100': '#dfe8e4',
          '200': '#bfd0c9',
          '300': '#98b0a7',
          '400': '#759287',
          '500': '#577569',
          '600': '#445d54',
          '700': '#394c45',
          '800': '#313e3a',
          '900': '#2b3632',
          '950': '#161d1b',
        },
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
