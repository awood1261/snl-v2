/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        PrimaryCtaSurface: '#aa4701',
        PrimaryCtaSurfaceTop: '#aa4e06',
        PrimaryCtaSurfaceBtm: '#9b420a',
        PrimaryCtaText: '#df8232',
        PrimaryBgSurface: '#160d0c',
        SecondaryContentSurface: '#1a1110',
        SecondaryInputSurface: '#2a211f',
        SecondaryContentText: '#97633f',
        MainNavText: '#a66327',
        SecondaryCtaTopSurface: '#c1701c',
        SecondaryCtaBtmSurface: '#ad590d',
        SecondaryCtaText: '#732902',
        VinylWhiskeySurface: '#181815'
      },
      fontFamily: {
        'sans': ['Montserrat', 'sans-serif'],
        'serif': ['Abril Fatface', 'serif'],
      },
    },
  },
  plugins: [],
}
