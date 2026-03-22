import styled, { keyframes } from 'styled-components'

import { breakpoints, Colors } from '../../styles'

export const Container = styled.div`
  width: 100%;
`

export const CarouselFrame = styled.div`
  width: 100%;
  position: relative;
  padding: 0 56px 40px;

  .swiper {
    position: relative;
    z-index: 1;
    overflow: hidden;
    cursor: grab;
    touch-action: pan-y;
  }

  .swiper:active {
    cursor: grabbing;
  }

  .swiper-pagination-bullet {
    background: rgba(255, 255, 255, 0.35);
    opacity: 1;
  }

  .swiper-pagination-bullet-active {
    background: ${Colors.whiteFontColor};
  }

  @media (max-width: ${breakpoints.tablet}) {
    padding: 0 48px 36px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 0 16px 34px;
  }

  @media (max-width: ${breakpoints.small}) {
    padding: 0 12px 32px;
  }
`

export const NavButton = styled.button<{ $direction: 'prev' | 'next' }>`
  position: absolute;
  top: 50%;
  z-index: 5;
  transform: translateY(-50%);
  ${(p) => (p.$direction === 'prev' ? 'left: 0;' : 'right: 0;')}

  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: ${Colors.surface};
  border: 1px solid ${Colors.border};
  color: ${Colors.whiteFontColor};
  cursor: pointer;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  transition:
    transform 0.15s ease,
    background-color 0.2s ease,
    border-color 0.2s ease;

  &:hover {
    background: ${Colors.surfaceStrong};
    border-color: ${Colors.surfaceStrong};
    transform: translateY(-50%) translateY(-1px);
  }

  &:active {
    transform: translateY(-50%);
  }

  &:focus-visible {
    outline: 2px solid rgba(30, 144, 255, 0.7);
    outline-offset: 2px;
  }

  &::before {
    content: ${(p) => (p.$direction === 'prev' ? "'‹'" : "'›'")};
    font-size: 26px;
    line-height: 1;
    font-weight: 900;
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 40px;
    height: 40px;

    &::before {
      font-size: 22px;
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    display: none;
  }
`

export const Pagination = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 4;
  display: flex;
  align-items: center;
  justify-content: center;
`

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
  transition:
    transform 0.15s ease,
    background-color 0.2s ease;

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
