import { styled } from 'styled-components'
import { breakpoints, heights } from '../styles'

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

  @media (max-height: ${heights.maxHeight}) {
    gap: 2rem;

    img {
      height: 300px;
      max-width: 320px;
    }
  }

  @media (max-height: ${heights.minHeight}) {
    img {
      height: 220px;
      max-width: 240px;
    }
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

  @media (max-height: ${heights.maxHeight}) {
    h2 {
      margin: 0.5rem 0;
      font-size: 1.25rem;
    }

    span {
      font-size: 0.95rem;
    }

    div {
      margin-bottom: 0.35rem;
    }
  }

  @media (max-height: ${heights.minHeight}) {
    h2 {
      font-size: 1.1rem;
    }

    span {
      font-size: 0.9rem;
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

  @media (max-height: ${heights.maxHeight}) {
    gap: 1rem;
  }
`

export const HomeButtonList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 3rem;

  @media (max-width: ${breakpoints.mobile}) {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: ${breakpoints.tablet}) {
    gap: 1rem;
  }

  @media (max-height: ${heights.maxHeight}) {
    gap: 1rem;
  }
`

export const Section = styled.section`
  min-height: 100svh;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-height: ${heights.maxHeight}) {
    min-height: auto;
    padding: 1rem 0;
  }
`