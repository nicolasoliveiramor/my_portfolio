import { css, styled } from 'styled-components'

import { Colors, heights } from '../../../styles'

const controlStyles = css<{
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
  text-align: center;
  transition:
    transform 0.15s ease,
    background-color 0.2s ease,
    box-shadow 0.2s ease;
  width: ${(p) => (p.compact ? '140px' : '210px')};
  min-height: ${(p) => (p.compact ? '60px' : '66px')};

  &:hover {
    background-color: ${Colors.blueButtonHover};
    transform: translateY(-1px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
  }

  &:active {
    transform: translateY(0);
  }

  &:focus-visible {
    outline: 2px solid rgba(255, 255, 255, 0.7);
    outline-offset: 2px;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    box-shadow: none;
    transform: none;
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

export const AnimatedButton = styled.button<{
  compact?: boolean
  fluidMobile?: boolean
}>`
  ${controlStyles}
`

export const AnimatedLink = styled.a<{
  compact?: boolean
  fluidMobile?: boolean
}>`
  ${controlStyles}
  text-decoration: none;
`
