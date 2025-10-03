import { styled } from 'styled-components'

import { Colors, heights } from '../../../styles'

export const AnimatedButton = styled.button`
  position: relative;
  z-index: 2;
  padding: 1.25rem 2.5rem;
  font-weight: bold;
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  color: ${Colors.whiteFontColor};
  background-color: ${Colors.blueButtonColor};
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  width: 180px;
  min-height: 60px;

  &:hover {
    transform: scale(0.9);
  }

  &:active {
    transform: scale(0.85);
  }

  @media (max-height: ${heights.maxHeight}) {
    padding: 0.9rem 1.6rem;
    min-height: 48px;
    width: 160px;
    font-size: 0.95rem;
  }
`
