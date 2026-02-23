import { css, styled } from 'styled-components'
import { breakpoints, Colors } from '../styles'

const floatingPanel = css`
  background: rgba(17, 18, 22, 0.55);
  border: 1px solid ${Colors.border};
  box-shadow: 0 18px 70px rgba(0, 0, 0, 0.45);
  backdrop-filter: blur(12px);
`

export const Page = styled.div`
  min-height: 100svh;
`

export const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(17, 18, 22, 0.72);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid ${Colors.border};
`

export const HeaderInner = styled.div`
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
`

export const Brand = styled.a`
  font-weight: 800;
  letter-spacing: -0.02em;
  font-size: 1rem;
  white-space: nowrap;
`

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 6px;

  @media (max-width: ${breakpoints.tablet}) {
    display: none;
  }
`

export const NavLink = styled.a`
  padding: 10px 12px;
  border-radius: 10px;
  color: ${Colors.textMuted};
  transition:
    background-color 0.2s ease,
    color 0.2s ease;

  &:hover {
    background: ${Colors.surface};
    color: ${Colors.whiteFontColor};
  }

  &:focus-visible {
    outline: 2px solid rgba(30, 144, 255, 0.7);
    outline-offset: 2px;
  }
`

export const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

export const OutlineLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  padding: 0 12px;
  border-radius: 12px;
  border: 1px solid ${Colors.border};
  background: transparent;
  color: ${Colors.whiteFontColor};
  font-weight: 700;
  transition:
    background-color 0.2s ease,
    border-color 0.2s ease;

  &:hover {
    background: ${Colors.surface};
    border-color: ${Colors.surfaceStrong};
  }

  &:focus-visible {
    outline: 2px solid rgba(30, 144, 255, 0.7);
    outline-offset: 2px;
  }
`

export const GhostLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  padding: 0 12px;
  border-radius: 12px;
  color: ${Colors.textMuted};
  font-weight: 700;
  transition:
    background-color 0.2s ease,
    color 0.2s ease;

  &:hover {
    background: ${Colors.surface};
    color: ${Colors.whiteFontColor};
  }

  &:focus-visible {
    outline: 2px solid rgba(30, 144, 255, 0.7);
    outline-offset: 2px;
  }
`

export const Hero = styled.section`
  scroll-margin-top: 90px;
  padding: 72px 0 48px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: -40px;
    height: 140px;
    background:
      radial-gradient(
        900px 120px at 50% 10%,
        rgba(255, 255, 255, 0.045),
        transparent 70%
      ),
      linear-gradient(180deg, rgba(255, 255, 255, 0.02), transparent 65%);
    opacity: 0.55;
    pointer-events: none;
  }
`

export const Section = styled.section`
  scroll-margin-top: 90px;
  padding: 88px 0;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: -70px;
    height: 140px;
    background:
      radial-gradient(
        900px 120px at 50% 60%,
        rgba(255, 255, 255, 0.04),
        transparent 72%
      ),
      linear-gradient(
        180deg,
        transparent,
        rgba(255, 255, 255, 0.018),
        transparent
      );
    opacity: 0.55;
    pointer-events: none;
  }

  @media (max-width: ${breakpoints.tablet}) {
    padding: 72px 0;
  }
`

export const SectionInner = styled.div`
  position: relative;
  z-index: 1;
`

export const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  align-items: center;
  gap: 48px;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 28px;
  }
`

export const HeroText = styled.div`
  ${floatingPanel}
  padding: 18px 18px;
  border-radius: 18px;

  h1 {
    margin: 10px 0 10px;
    font-size: 3rem;
    line-height: 1.05;
    letter-spacing: -0.035em;
  }

  p {
    margin: 0;
    max-width: 60ch;
    color: ${Colors.textMuted};
    font-size: 1.05rem;
  }

  @media (max-width: ${breakpoints.tablet}) {
    padding: 16px 16px;

    h1 {
      font-size: 2.25rem;
    }
  }
`

export const Kicker = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 10px;
  border-radius: 999px;
  background: ${Colors.surface};
  border: 1px solid ${Colors.border};
  color: ${Colors.textMuted};
  font-weight: 700;
  font-size: 0.85rem;
`

export const HeroActions = styled.div`
  margin-top: 18px;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`

export const PrimaryButton = styled.button`
  height: 46px;
  padding: 0 16px;
  border-radius: 14px;
  border: 1px solid rgba(30, 144, 255, 0.28);
  background: ${Colors.blueButtonColor};
  color: ${Colors.whiteFontColor};
  font-weight: 800;
  cursor: pointer;
  transition:
    transform 0.15s ease,
    background-color 0.2s ease;

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
`

export const SecondaryButton = styled.button`
  height: 46px;
  padding: 0 16px;
  border-radius: 14px;
  border: 1px solid ${Colors.border};
  background: ${Colors.surface};
  color: ${Colors.whiteFontColor};
  font-weight: 800;
  cursor: pointer;
  transition:
    transform 0.15s ease,
    background-color 0.2s ease;

  &:hover {
    background: ${Colors.surfaceStrong};
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

export const HeroMedia = styled.div`
  width: 100%;
  max-width: 420px;
  justify-self: end;

  img {
    width: 100%;
    height: 420px;
    object-fit: cover;
    border-radius: 18px;
    border: 1px solid ${Colors.border};
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
    background: ${Colors.surface};
  }

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 380px;
    justify-self: start;

    img {
      height: 360px;
    }
  }
`

export const ImagePlaceholder = styled.div`
  width: 100%;
  height: 420px;
  border-radius: 18px;
  border: 1px solid ${Colors.border};
  background:
    radial-gradient(
      400px 260px at 20% 20%,
      rgba(30, 144, 255, 0.25),
      transparent 60%
    ),
    radial-gradient(
      320px 220px at 80% 30%,
      rgba(125, 211, 252, 0.18),
      transparent 60%
    ),
    ${Colors.surface};
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);

  @media (max-width: ${breakpoints.tablet}) {
    height: 360px;
  }
`

export const SectionHeader = styled.div`
  max-width: 72ch;
  ${floatingPanel}
  padding: 16px 16px;
  border-radius: 18px;

  h2 {
    margin: 0 0 10px;
    font-size: 2rem;
    letter-spacing: -0.02em;
  }

  p {
    margin: 0;
    color: ${Colors.textMuted};
  }
`

export const AboutGrid = styled.div`
  margin-top: 26px;
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 22px;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`

export const AboutText = styled.div`
  display: grid;
  gap: 16px;

  > div {
    ${floatingPanel}
    padding: 16px 16px;
    border-radius: 18px;
  }

  h3 {
    margin: 0 0 6px;
    font-size: 1.2rem;
    letter-spacing: -0.015em;
  }

  p {
    margin: 0;
    color: ${Colors.textMuted};
  }
`

export const AboutHighlights = styled.div`
  display: grid;
  gap: 12px;
`

export const HighlightCard = styled.div`
  padding: 14px 14px;
  border-radius: 16px;
  background: ${Colors.surface};
  border: 1px solid ${Colors.border};

  h3 {
    margin: 0 0 4px;
    font-size: 1rem;
  }

  p {
    margin: 0;
    color: ${Colors.textMuted};
  }
`

export const SkillsGrid = styled.div`
  margin-top: 22px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`

export const SkillPill = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 10px 12px;
  border-radius: 999px;
  background: ${Colors.surface};
  border: 1px solid ${Colors.border};
  color: ${Colors.whiteFontColor};
  font-weight: 700;
  font-size: 0.95rem;
`

export const FilterBar = styled.div`
  margin-top: 18px;
  ${floatingPanel}
  display: inline-flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 10px;
  border-radius: 18px;
  max-width: 100%;
`

export const FilterButton = styled.button<{ $active?: boolean }>`
  height: 40px;
  padding: 0 12px;
  border-radius: 999px;
  border: 1px solid
    ${(p) => (p.$active ? 'rgba(30, 144, 255, 0.35)' : Colors.border)};
  background: ${(p) =>
    p.$active ? 'rgba(30, 144, 255, 0.14)' : Colors.surface};
  color: ${(p) => (p.$active ? Colors.whiteFontColor : Colors.textMuted)};
  font-weight: 800;
  cursor: pointer;
  transition:
    background-color 0.2s ease,
    border-color 0.2s ease,
    transform 0.15s ease;

  &:hover {
    background: ${(p) =>
      p.$active ? 'rgba(30, 144, 255, 0.18)' : Colors.surfaceStrong};
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

export const ProjectsWrap = styled.div`
  margin-top: 22px;
`

export const ContactGrid = styled.div`
  margin-top: 22px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`

export const ContactCard = styled.a`
  padding: 16px;
  border-radius: 16px;
  background: ${Colors.surface};
  border: 1px solid ${Colors.border};
  transition:
    transform 0.15s ease,
    background-color 0.2s ease,
    border-color 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    background: ${Colors.surfaceStrong};
    border-color: ${Colors.surfaceStrong};
  }

  &:focus-visible {
    outline: 2px solid rgba(30, 144, 255, 0.7);
    outline-offset: 2px;
  }

  h3 {
    margin: 0 0 6px;
    font-size: 1.05rem;
  }

  p {
    margin: 0;
    color: ${Colors.textMuted};
  }
`

export const Footer = styled.footer`
  padding: 28px 0 38px;
  border-top: 1px solid ${Colors.border};
  background: rgba(17, 18, 22, 0.4);
`

export const FooterInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;

  p {
    margin: 0;
    color: ${Colors.textMuted};
  }

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const BackToTop = styled.button`
  height: 40px;
  padding: 0 12px;
  border-radius: 12px;
  border: 1px solid ${Colors.border};
  background: ${Colors.surface};
  color: ${Colors.whiteFontColor};
  font-weight: 800;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background: ${Colors.surfaceStrong};
  }

  &:focus-visible {
    outline: 2px solid rgba(30, 144, 255, 0.7);
    outline-offset: 2px;
  }
`

export const ErrorContainer = styled.div`
  padding: 96px 0;

  h2 {
    margin: 0;
    font-size: 1.25rem;
  }
`
