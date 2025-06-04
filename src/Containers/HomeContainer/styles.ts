import styled from 'styled-components'

import { breakpoints, Colors } from '../../styles'

import { HomecontainerProps } from './'

export const HomeContainer = styled.div<HomecontainerProps>`
  max-width: 100vw;
  width: 100%;
  height: ${(props) => (props.className === 'Apresentacao' ? '100vh' : 'auto')};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    props.background === 'left'
      ? Colors.darkThemeColor
      : Colors.darkThemeColor};

  @media (max-width: ${breakpoints.mobile}) {
    height: auto;
  }
`
