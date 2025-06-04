import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const Projects = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  align-items: center;

  @media (max-width: ${breakpoints.desktop}) {
    display: flex;
    flex-direction: column;
  }

  @media (min-width: ${breakpoints.desktop}) and (max-width: ${breakpoints.laptop}) {
    grid-template-columns: repeat(2, 1fr);
  }
`
