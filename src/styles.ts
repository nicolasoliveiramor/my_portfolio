import { createGlobalStyle } from 'styled-components'

export const Colors = {
  whiteFontColor: '#fff',
  blackFontColor: '#000',
  blueButtonColor: '#1E90FF',
  blueButtonHover: '#125699 ',
  darkThemeColor: '#222',
  lightThemeColor: '#fff'
}

export const breakpoints = {
  laptop: '1445px',
  desktop: '1025px',
  tablet: '769px',
  mobile: '426px',
  small: '325px'
}

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    font-family: 'Poppins', sans-serif;
    color: ${Colors.whiteFontColor};
    text-decoration: none;
    overflow-x: hidden;
  }

  body {
    background: linear-gradient(to left, ${Colors.darkThemeColor}, #111);
  }

  .container {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
`
