import styled from 'styled-components'
import { Colors } from '../../styles'

export const CardContainer = styled.div`
  width: auto;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 5rem;
  gap: 1rem;

  img {
    max-width: auto;
    width: 100%;
    height: auto;
    border-radius: 8px;
    object-fit: cover;
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
    height: 125px;
    display: flex;
    align-items: center;
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
    width: 150px;
    max-width: 100%;
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
  }
`
