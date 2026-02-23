import { keyframes, styled } from 'styled-components'

import { Colors } from '../../styles'

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

export const LoaderDiv = styled.div`
  width: 100%;
  min-height: 100svh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
`

export const Spinner = styled.div`
  width: 18px;
  height: 18px;
  border-radius: 999px;
  border: 2px solid ${Colors.border};
  border-top-color: ${Colors.blueButtonColor};
  animation: ${spin} 0.8s linear infinite;
`

export const LoaderText = styled.span`
  color: ${Colors.textMuted};
  font-weight: 700;
`
