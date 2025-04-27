import { createGlobalStyle } from 'styled-components'

export const Colors = {
  whiteFontColor: '#fff',
  blackFontColor: '#000',
  blueButtonColor: '#1E90FF',
  blueButtonHover: '#125699 ',
  darkThemeColor: '#222',
  lightThemeColor: '#fff'
}

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    font-family: 'Poppins', sans-serif;
    color: ${Colors.whiteFontColor};
  }

  body {
    background: linear-gradient(to left, ${Colors.darkThemeColor}, #111);
  }

  .container {
    max-width: 100vw;
    width: 100%;
    height: 100vh;
    margin: 0 auto;
  }
`
