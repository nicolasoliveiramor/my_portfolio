import styled from 'styled-components'
import { breakpoints } from '../../styles'

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
`
