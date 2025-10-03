import styled from 'styled-components'

import { breakpoints, Colors, heights } from '../../styles'

import { HomecontainerProps } from './'

export const HomeContainer = styled.div<HomecontainerProps>`
  max-width: 100vw;
  width: 100%;
  min-height: ${(props) => (props.className === 'Apresentacao' ? '100svh' : 'auto')};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    props.background === 'left'
      ? Colors.darkThemeColor
      : Colors.darkThemeColor};

  @media (max-width: ${breakpoints.mobile}) {
    min-height: auto;
    padding: 1rem;
  }

  @media (max-height: ${heights.maxHeight}) {
    min-height: auto;
    padding: 1rem 0;
    align-items: flex-start;
  }
`
