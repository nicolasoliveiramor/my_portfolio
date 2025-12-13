import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const CardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 1rem;
  gap: 1rem;
  overflow: hidden;

  img {
    max-width: 100%;
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
    margin: 0;
    padding: 0.75rem;
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
    min-height: 9rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
  }
`

export const TechnologiesContainer = styled.div`
  display: flex;
  justify-content: center;

  p {
    font-weight: bold;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin: 0.5rem 0 0;
    padding: 0;
    list-style: none;
    justify-content: center;
  }

  ul li {
    display: inline-flex;
    align-items: center;
    padding: 0.35rem 0.6rem;
    border-radius: 6px;
    background-color: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.12);
    font-size: 0.95rem;
    line-height: 1;
    white-space: nowrap;
  }

  @media (max-width: 768px) {
    ul {
      gap: 0.4rem;
    }
    ul li {
      padding: 0.3rem 0.55rem;
      font-size: 0.9rem;
    }
  }

  @media (max-height: 600px) {
    ul {
      gap: 0.35rem;
    }
    ul li {
      padding: 0.28rem 0.5rem;
      font-size: 0.85rem;
    }
  }
`

export const CardButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  gap: 2rem;

  @media (max-width: ${breakpoints.laptop}) {
    gap: 1.25rem;
  }

  @media (max-width: ${breakpoints.tablet}) {
    gap: 1rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    gap: 0.75rem;
    flex-wrap: wrap;
  }
`
