import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const Projects = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: stretch;
  align-items: start;
  width: 100%;
  box-sizing: border-box;
  gap: 2rem;
  padding: 0 1.5rem;

  @media (max-width: ${breakpoints.desktop}) {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 1.25rem;
    padding: 0 1rem;
  }

  @media (min-width: ${breakpoints.desktop}) and (max-width: ${breakpoints.laptop}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1.5rem;
    padding: 0 1rem;
  }
`
