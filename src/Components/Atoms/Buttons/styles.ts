import { css, styled } from 'styled-components'

import { Colors, heights } from '../../../styles'

const controlStyles = css<{
  compact?: boolean
  fluidMobile?: boolean
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  height: 46px;
  padding: 0 16px;
  font-weight: 800;
  font-size: 1rem;
  border: 1px solid rgba(30, 144, 255, 0.28);
  border-radius: 14px;
  color: ${Colors.whiteFontColor};
  background: ${Colors.blueButtonColor};
  cursor: pointer;
  text-align: center;
  line-height: 1.2;
  letter-spacing: 0.01em;
  transition:
    transform 0.15s ease,
    background-color 0.2s ease,
    opacity 0.2s ease;
  width: 100%;

  &:hover {
    background: ${Colors.blueButtonHover};
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }

  &:focus-visible {
    outline: 2px solid rgba(30, 144, 255, 0.7);
    outline-offset: 2px;
  }

  &:disabled {
    opacity: 0.55;
    cursor: not-allowed;
    background: ${Colors.blueButtonColor};
    transform: none;
  }

  @media (max-height: ${heights.maxHeight}) {
    min-height: 46px;
  }

  @media (max-width: 325px) {
    height: 54px;
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
