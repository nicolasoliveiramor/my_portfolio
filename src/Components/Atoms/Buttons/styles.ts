import { styled } from 'styled-components'

import { Colors, heights } from '../../../styles'

export const AnimatedButton = styled.button<{ compact?: boolean }>`
  position: relative;
  z-index: 2;
  padding: ${(p) => (p.compact ? '1rem 2rem' : '1.25rem 2.5rem')};
  font-weight: bold;
  font-size: ${(p) => (p.compact ? '0.95rem' : '1rem')};
  border: none;
  border-radius: 8px;
  color: ${Colors.whiteFontColor};
  background-color: ${Colors.blueButtonColor};
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  width: ${(p) => (p.compact ? '150px' : '180px')};
  min-height: ${(p) => (p.compact ? '54px' : '60px')};

  &:hover {
    transform: scale(0.9);
  }

  &:active {
    transform: scale(0.85);
  }

  @media (max-height: ${heights.maxHeight}) {
    padding: ${(p) => (p.compact ? '0.8rem 1.4rem' : '0.9rem 1.6rem')};
    min-height: ${(p) => (p.compact ? '46px' : '48px')};
    width: ${(p) => (p.compact ? '140px' : '160px')};
    font-size: ${(p) => (p.compact ? '0.9rem' : '0.95rem')};
  }
`
