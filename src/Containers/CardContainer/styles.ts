import styled, { keyframes } from 'styled-components'

import { breakpoints, Colors } from '../../styles'

export const Projects = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  align-items: start;
  width: 100%;
  gap: 18px;

  @media (max-width: ${breakpoints.laptop}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`

export const State = styled.div`
  width: 100%;
  padding: 18px;
  border-radius: 16px;
  background: ${Colors.surface};
  border: 1px solid ${Colors.border};

  h2 {
    margin: 0;
    font-size: 1.1rem;
    letter-spacing: -0.01em;
  }

  p {
    margin: 8px 0 0;
    color: ${Colors.textMuted};
  }
`

export const StateActions = styled.div`
  margin-top: 12px;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`

export const StateButton = styled.button`
  height: 40px;
  padding: 0 12px;
  border-radius: 12px;
  border: 1px solid ${Colors.border};
  background: ${Colors.surfaceStrong};
  color: ${Colors.whiteFontColor};
  font-weight: 800;
  cursor: pointer;
  transition: transform 0.15s ease, background-color 0.2s ease;

  &:hover {
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }

  &:focus-visible {
    outline: 2px solid rgba(30, 144, 255, 0.7);
    outline-offset: 2px;
  }
`

const shimmer = keyframes`
  0% { background-position: 0% 50%; }
  100% { background-position: 100% 50%; }
`

export const SkeletonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  align-items: start;
  width: 100%;
  gap: 18px;

  @media (max-width: ${breakpoints.laptop}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`

export const SkeletonCard = styled.div`
  height: 420px;
  border-radius: 18px;
  border: 1px solid ${Colors.border};
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.05),
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0.05)
  );
  background-size: 200% 200%;
  animation: ${shimmer} 1.2s ease-in-out infinite;
`
