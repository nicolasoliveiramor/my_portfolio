import styled from 'styled-components'
import { breakpoints, Colors } from '../../styles'

export const CardContainer = styled.div`
  width: 100%;
  height: 824px;
  min-height: 824px;
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
  transition:
    transform 0.15s ease,
    background-color 0.2s ease,
    box-shadow 0.2s ease;

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
    flex: 0 0 auto;
  }

  h2 {
    margin: 0;
    font-size: 1.25rem;
    letter-spacing: -0.02em;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  @media (max-width: ${breakpoints.laptop}) {
    height: 824px;
    min-height: 824px;
    margin: 0;
    padding: 14px;
  }

  @media (max-width: 768px) {
    height: auto;
    min-height: auto;
  }

  @media (max-width: ${breakpoints.mobile}) {
    height: auto;
    width: 100%;
    padding: 14px;
    gap: 12px;

    img {
      width: 100%;
      height: 180px;
    }
  }

  @media (max-width: ${breakpoints.small}) {
    padding: 12px;
    gap: 10px;

    img {
      height: 160px;
    }

    h2 {
      font-size: 1.05rem;
    }
  }
`

export const CardInfos = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  gap: 10px;
  flex: 1;
  min-height: 0;

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
    overflow-wrap: anywhere;
  }

  @media (max-width: ${breakpoints.mobile}) {
    gap: 8px;

    h4 {
      font-size: 0.9rem;
    }
  }

  @media (max-width: ${breakpoints.small}) {
    p {
      font-size: 0.95rem;
    }
  }
`

export const DescriptionWrapper = styled.div<{
  $expanded?: boolean
}>`
  flex: 1;
  min-height: 0;
  overflow: hidden;
  overflow-y: ${(p) => (p.$expanded ? 'auto' : 'hidden')};
  padding-right: ${(p) => (p.$expanded ? '4px' : '0')};
`

export const DescriptionText = styled.p<{
  $expanded?: boolean
}>`
  margin: 0;
  color: ${Colors.textMuted};
  line-height: 1.58;
  overflow-wrap: anywhere;
  display: ${(p) => (p.$expanded ? 'block' : '-webkit-box')};
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${(p) => (p.$expanded ? 'unset' : '4')};
  overflow: ${(p) => (p.$expanded ? 'visible' : 'hidden')};
`

export const ToggleDescriptionButton = styled.button`
  width: fit-content;
  padding: 0;
  border: 0;
  background: transparent;
  color: #93c5fd;
  font-size: 0.95rem;
  font-weight: 700;
  line-height: 1;
  cursor: pointer;
  transition: color 0.24s ease;

  &:hover {
    color: #bfdbfe;
  }

  &:active {
    color: #dbeafe;
  }

  &:focus-visible {
    outline: 2px solid rgba(147, 197, 253, 0.75);
    outline-offset: 4px;
    border-radius: 8px;
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

  @media (max-width: ${breakpoints.small}) {
    ul {
      gap: 0.35rem;
    }

    ul li {
      padding: 0.28rem 0.5rem;
      border-radius: 7px;
      font-size: 0.82rem;
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
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  margin-top: auto;
  padding-top: 6px;
  gap: 10px;
  width: 100%;

  a,
  button {
    width: 100%;
  }
`
