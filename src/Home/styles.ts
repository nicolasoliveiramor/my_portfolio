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
    margin-right: 1.5rem;
  }

  @media (max-width: ${breakpoints.tablet}) {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    padding: 0 1rem;
  }

  @media (max-height: ${heights.maxHeight}) {
    gap: 2rem;
    padding: 0 1rem;

    img {
      height: 300px;
      max-width: 320px;
    }
  }

  @media (max-height: ${heights.minHeight}) {
    padding: 0 0.75rem;

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
  padding: 0 1.5rem;

  h2 {
    font-weight: bold;
    margin: 1rem 0;
  }

  span {
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

  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 0.25rem;
    padding: 0;
    justify-content: flex-start;

    li {
      display: inline-flex;
      align-items: center;
      padding: 0.35rem 0.6rem;
      border-radius: 6px;
      background-color: rgba(255, 255, 255, 0.08);
      border: 1px solid rgba(255, 255, 255, 0.12);
      font-size: 0.95rem;
      line-height: 1;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 0 1rem;

    div {
      align-items: center;
    }

    ul {
      justify-content: center;
    }
  }

  @media (max-height: ${heights.maxHeight}) {
    padding: 0 1rem;

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

    ul {
      gap: 0.35rem;

      li {
        font-size: 0.85rem;
        padding: 0.3rem 0.5rem;
      }
    }
  }

  @media (max-height: ${heights.minHeight}) {
    padding: 0 0.75rem;

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
