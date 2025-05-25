import { styled } from 'styled-components'
import { Colors } from '../styles'

export const HomeSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const HomeContainer = styled.div`
  width: 60%;
  max-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`

export const HomeContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  gap: 4rem;

  img {
    max-width: 500px;
    width: 100%;
    height: 600px;
    border-radius: 8px;
    object-fit: cover;
  }
`

export const HomeApresentation = styled.div`
  max-width: 500px;
  width: 100%;
  max-height: 600px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    font-weight: bold;
    margin: 1rem 0;
  }

  span {
    max-width: 500px;
    width: 100%;
    font-size: 1rem;
    font-weight: normal;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    margin-bottom: 0.5rem;

    h4 {
      margin-bottom: 0.15rem;
    }
  }
`

export const HomeButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`

export const HomeButtonList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 3rem;

  button {
    width: 200px;
    font-weight: bold;
    font-size: 1rem;
    border: none;
    border-radius: 8px;
    background-color: ${Colors.blueButtonColor};
    color: ${Colors.whiteFontColor};
    padding: 1rem;

    &:hover {
      background-color: ${Colors.blueButtonHover};
      cursor: pointer;
      transition: all 0.1s ease-in-out;
      transform: scale(0.97);
    }

    a {
      padding: 2rem;
    }
  }
`

export const ProjectsSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`
