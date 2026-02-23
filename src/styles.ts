import { createGlobalStyle } from 'styled-components'

export const Colors = {
  whiteFontColor: '#fff',
  blackFontColor: '#000',
  blueButtonColor: '#1E90FF',
  blueButtonHover: '#125699',
  darkThemeColor: '#111216',
  lightThemeColor: '#fff',
  textMuted: 'rgba(255, 255, 255, 0.72)',
  surface: 'rgba(255, 255, 255, 0.06)',
  surfaceStrong: 'rgba(255, 255, 255, 0.1)',
  border: 'rgba(255, 255, 255, 0.12)'
}

export const breakpoints = {
  laptop: '1445px',
  desktop: '1025px',
  tablet: '769px',
  mobile: '450px',
  small: '325px'
}

export const heights = {
  maxHeight: '600px',
  minHeight: '450px'
}

export const GlobalStyle = createGlobalStyle`
  :root {
    color-scheme: dark;
  }

  * {
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    font-family: 'Poppins', system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
    line-height: 1.5;
    color: ${Colors.whiteFontColor};
    background:
      radial-gradient(
        1400px 1000px at 50% 45%,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 0.35) 58%,
        rgba(0, 0, 0, 0.88) 100%
      ),
      radial-gradient(900px 600px at 18% 12%, rgba(30, 144, 255, 0.16), transparent 62%),
      radial-gradient(700px 520px at 82% 28%, rgba(125, 211, 252, 0.1), transparent 62%),
      radial-gradient(900px 700px at 50% 110%, rgba(0, 0, 0, 0.55), transparent 55%),
      ${Colors.darkThemeColor};
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul, ol {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  img {
    display: block;
    max-width: 100%;
  }

  button, input, textarea, select {
    font: inherit;
    color: inherit;
  }

  .container {
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 24px;
  }
`
