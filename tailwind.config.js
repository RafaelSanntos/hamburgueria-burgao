/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html', // Inclui o arquivo index.html na raiz do projeto
    './styles/**/*.{css}', // Inclui arquivos CSS na pasta styles
  ],
  theme: {
    fontFamily: {
      'sans': ['Robot', 'sans-serif']
    },
    extend: {
      backgroundImage:{
        "home": "url('/assets/bg.png')"
      }
    },
  },
  plugins: [],
}

