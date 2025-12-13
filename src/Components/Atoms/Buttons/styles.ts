import { styled } from 'styled-components'

import { Colors, heights } from '../../../styles'

export const AnimatedButton = styled.button<{
  compact?: boolean
  fluidMobile?: boolean
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${(p) => (p.compact ? '1rem 2rem' : '1.25rem 2.5rem')};
  font-weight: bold;
  font-size: ${(p) => (p.compact ? '0.95rem' : '1rem')};
  border: none;
  border-radius: 8px;
  color: ${Colors.whiteFontColor};
  background-color: ${Colors.blueButtonColor};
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  width: ${(p) => (p.compact ? '140px' : '210px')};
  min-height: ${(p) => (p.compact ? '60px' : '66px')};

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    color: inherit;
    text-decoration: none;
    white-space: wrap;
  }

  &:hover {
    transform: scale(0.9);
  }

  &:active {
    transform: scale(0.85);
  }

  &:focus-visible {
    outline: 2px solid rgba(255, 255, 255, 0.7);
    outline-offset: 2px;
  }

  @media (max-height: ${heights.maxHeight}) {
    padding: ${(p) => (p.compact ? '0.8rem 1.4rem' : '0.9rem 1.6rem')};
    min-height: ${(p) => (p.compact ? '46px' : '48px')};
    width: ${(p) => (p.compact ? '150px' : '160px')};
    font-size: ${(p) => (p.compact ? '0.9rem' : '0.95rem')};
  }

  @media (max-width: 450px) {
    width: ${(p) => (p.fluidMobile ? '100%' : p.compact ? '170px' : '180px')};
    max-width: ${(p) => (p.fluidMobile ? '100%' : 'none')};
    padding: ${(p) =>
      p.fluidMobile
        ? p.compact
          ? '0.85rem 1.1rem'
          : '0.95rem 1.25rem'
        : p.compact
          ? '1rem 2rem'
          : '1.25rem 2.5rem'};
    min-height: ${(p) =>
      p.fluidMobile
        ? p.compact
          ? '46px'
          : '50px'
        : p.compact
          ? '54px'
          : '60px'};
    font-size: ${(p) =>
      p.fluidMobile
        ? p.compact
          ? '0.9rem'
          : '0.95rem'
        : p.compact
          ? '0.95rem'
          : '1rem'};
  }
`
