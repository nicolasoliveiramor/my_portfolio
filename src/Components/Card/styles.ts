import styled from 'styled-components'
import { breakpoints, Colors } from '../../styles'

export const CardContainer = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 5rem;
  gap: 1rem;
  overflow: hidden;

  img {
    max-width: auto;
    width: 100%;
    height: auto;
    border-radius: 8px;
    object-fit: cover;
  }

  @media (max-width: ${breakpoints.mobile}) {
    max-width: 100vw;
    width: 100%;

    img {
      width: 100%;
    }
  }

  @media (max-width: ${breakpoints.laptop}) {
    height: auto;
    margin: 2rem 0;
  }
`

export const CardInfos = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  h2 {
    text-align: center;
  }

  p {
    min-width: 250px;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
  }
`

export const TechnologiesContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  p {
    font-weight: bold;
  }
`

export const CardButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  gap: 2rem;

  button {
    width: 175px;
    height: 60px;
    background-color: ${Colors.blueButtonColor};
    border: none;
    border-radius: 8px;
    margin: 0.25rem 0;
    font-weight: bold;
    font-size: 1rem;

    &:hover {
      background-color: ${Colors.blueButtonHover};
      cursor: pointer;
      transition: all 0.1s ease-in-out;
      transform: scale(0.95);
    }

    a {
      text-align: center;
      padding: 1rem;
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    button {
      width: 90%;

      a {
        padding: 0;
      }
    }
  }
`
