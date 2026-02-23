import styled from 'styled-components'
import { breakpoints, Colors } from '../../styles'

export const CardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  margin: 0;
  padding: 16px;
  gap: 14px;
  overflow: hidden;
  border-radius: 18px;
  border: 1px solid ${Colors.border};
  background: ${Colors.surface};
  transition: transform 0.15s ease, background-color 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    background: ${Colors.surfaceStrong};
    box-shadow: 0 16px 50px rgba(0, 0, 0, 0.35);
  }

  img {
    max-width: 100%;
    width: 100%;
    height: 220px;
    border-radius: 14px;
    object-fit: cover;
    border: 1px solid ${Colors.border};
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
    padding: 14px;

    img {
      height: 200px;
    }
  }
`

export const CardInfos = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  gap: 10px;

  h2 {
    margin: 0;
    font-size: 1.25rem;
    letter-spacing: -0.02em;
  }

  h4 {
    margin: 0;
    font-size: 0.95rem;
    color: ${Colors.textMuted};
    letter-spacing: -0.01em;
  }

  p {
    margin: 0;
    color: ${Colors.textMuted};
    line-height: 1.55;
  }
`

export const TechnologiesContainer = styled.div`
  display: flex;
  justify-content: flex-start;

  p {
    font-weight: bold;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin: 0;
    padding: 0;
    list-style: none;
    justify-content: flex-start;
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
  justify-content: flex-start;
  margin-top: 6px;
  gap: 10px;
  flex-wrap: wrap;

  @media (max-width: ${breakpoints.laptop}) {
    gap: 10px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    gap: 10px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    gap: 0.75rem;
    width: 100%;
  }

  @media (max-width: 450px) {
    flex-direction: column;
    align-items: stretch;
    width: 100%;
    gap: 0.75rem;
  }
`
