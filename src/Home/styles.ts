import { styled } from 'styled-components'
import { breakpoints, Colors } from '../styles'

export const HomeContent = styled.div`
  max-width: 100vw;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  gap: 10rem;

  img {
    max-width: 550px;
    width: 100%;
    height: 550px;
    border-radius: 8px;
    object-fit: cover;
  }

  @media (max-width: ${breakpoints.tablet}) {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
`

export const HomeApresentation = styled.div`
  width: 100%;
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

  @media (max-width: ${breakpoints.tablet}) {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    div {
      align-items: center;
    }
  }
`

export const HomeButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  @media (max-width: ${breakpoints.tablet}) {
    gap: 1rem;
  }
`

export const HomeButtonList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 3rem;

  button {
    width: 225px;
    font-weight: bold;
    font-size: 1rem;
    border: none;
    border-radius: 8px;
    background-color: ${Colors.blueButtonColor};
    color: ${Colors.whiteFontColor};
    padding: 1rem;
    overflow-y: hidden;

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

  @media (max-width: ${breakpoints.mobile}) {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: ${breakpoints.tablet}) {
    gap: 1rem;
  }
`
