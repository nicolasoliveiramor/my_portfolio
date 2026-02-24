import { useState } from 'react'

import { useGetPresentationQuery, useGetSkillsQuery } from '../services/api'

import { CardContainer } from '../Containers/CardContainer'
import { Loader } from '../Components/Loader'

import * as S from './styles'

export const Home = () => {
  const [projectFilter, setProjectFilter] = useState<
    'all' | 'frontend' | 'fullstack'
  >('all')

  const {
    data: presentationData,
    isLoading: presentationLoading,
    isError: presentationError
  } = useGetPresentationQuery()
  const {
    data: skillsData,
    isLoading: skillsLoading,
    isError: skillsError
  } = useGetSkillsQuery()

  const scrollTo = (id: string) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  if (presentationError || skillsError) {
    return (
      <S.Page>
        <S.ErrorContainer className="container">
          <h2>
            Ocorreu um erro ao carregar os dados. Por favor, tente novamente
            mais tarde.
          </h2>
        </S.ErrorContainer>
      </S.Page>
    )
  }

  if (presentationLoading || skillsLoading) {
    return <Loader />
  }

  const heroTitle =
    presentationData?.items?.[0]?.title ?? 'Olá, eu sou o Nicolas'
  const heroDescription =
    presentationData?.items?.[0]?.description ??
    'Desenvolvedor focado em construir interfaces rápidas, acessíveis e com ótimo acabamento.'
  const heroImage = presentationData?.image ?? ''

  const skills =
    skillsData?.items.flatMap((item) => item.technologies).filter(Boolean) ?? []

  const aboutItems = (presentationData?.items ?? []).slice(0, 2)

  return (
    <S.Page>
      <S.Header>
        <S.HeaderInner className="container">
          <S.Brand href="#inicio">Nicolas Oliveira</S.Brand>
          <S.Nav>
            <S.NavLink href="#sobre">Sobre</S.NavLink>
            <S.NavLink href="#skills">Skills</S.NavLink>
            <S.NavLink href="#projetos">Projetos</S.NavLink>
            <S.NavLink href="#contato">Contato</S.NavLink>
          </S.Nav>
          <S.HeaderActions>
            <S.OutlineLink
              href="/curriculo/cv_nicolas_oliveira_mor_full_stack_engineer.pdf"
              download
            >
              CV
            </S.OutlineLink>
            <S.GhostLink
              href="https://github.com/nicolasoliveiramor"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </S.GhostLink>
            <S.GhostLink
              href="https://www.linkedin.com/in/nicolasoliveiramor"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </S.GhostLink>
          </S.HeaderActions>
        </S.HeaderInner>
      </S.Header>

      <main>
        <S.Hero id="inicio">
          <S.SectionInner className="container">
            <S.HeroGrid>
              <S.HeroText>
                <S.Kicker>Portfolio</S.Kicker>
                <h1>{heroTitle}</h1>
                <p>{heroDescription}</p>
                <S.HeroActions>
                  <S.PrimaryButton
                    type="button"
                    onClick={() => {
                      scrollTo('projetos')
                    }}
                  >
                    Ver projetos
                  </S.PrimaryButton>
                  <S.SecondaryButton
                    type="button"
                    onClick={() => {
                      scrollTo('contato')
                    }}
                  >
                    Falar comigo
                  </S.SecondaryButton>
                </S.HeroActions>
              </S.HeroText>

              <S.HeroMedia>
                {heroImage ? (
                  <img src={heroImage} alt="Imagem do Perfil" />
                ) : (
                  <S.ImagePlaceholder aria-hidden="true" />
                )}
              </S.HeroMedia>
            </S.HeroGrid>
          </S.SectionInner>
        </S.Hero>

        <S.Section id="sobre">
          <S.SectionInner className="container">
            <S.SectionHeader>
              <h2>Sobre</h2>
              <p>Um resumo rápido e objetivo sobre mim e meu foco.</p>
            </S.SectionHeader>
            <S.AboutGrid>
              <S.AboutText>
                {aboutItems.map((item) => (
                  <div key={item.id}>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                ))}
              </S.AboutText>
              <S.AboutHighlights>
                <S.HighlightCard>
                  <h3>Foco</h3>
                  <p>Front-end e experiência do usuário.</p>
                </S.HighlightCard>
                <S.HighlightCard>
                  <h3>Qualidade</h3>
                  <p>Performance, acessibilidade e consistência visual.</p>
                </S.HighlightCard>
                <S.HighlightCard>
                  <h3>Entrega</h3>
                  <p>Projetos com boa arquitetura e manutenção fácil.</p>
                </S.HighlightCard>
              </S.AboutHighlights>
            </S.AboutGrid>
          </S.SectionInner>
        </S.Section>

        <S.Section id="skills">
          <S.SectionInner className="container">
            <S.SectionHeader>
              <h2>{skillsData?.sectionTitle ?? 'Skills'}</h2>
              <p>Tecnologias e ferramentas que uso no dia a dia.</p>
            </S.SectionHeader>
            <S.SkillsGrid>
              {skills.map((tech) => (
                <S.SkillPill key={tech}>{tech}</S.SkillPill>
              ))}
            </S.SkillsGrid>
          </S.SectionInner>
        </S.Section>

        <S.Section id="projetos">
          <S.SectionInner className="container">
            <S.SectionHeader>
              <h2>Projetos</h2>
              <p>Alguns projetos selecionados, com filtro por categoria.</p>
            </S.SectionHeader>
            <S.FilterBar aria-label="Filtros de projetos">
              <S.FilterButton
                type="button"
                $active={projectFilter === 'all'}
                aria-pressed={projectFilter === 'all'}
                onClick={() => setProjectFilter('all')}
              >
                Todos
              </S.FilterButton>
              <S.FilterButton
                type="button"
                $active={projectFilter === 'frontend'}
                aria-pressed={projectFilter === 'frontend'}
                onClick={() => setProjectFilter('frontend')}
              >
                Frontend
              </S.FilterButton>
              <S.FilterButton
                type="button"
                $active={projectFilter === 'fullstack'}
                aria-pressed={projectFilter === 'fullstack'}
                onClick={() => setProjectFilter('fullstack')}
              >
                Fullstack
              </S.FilterButton>
            </S.FilterBar>
            <S.ProjectsWrap>
              <CardContainer project={projectFilter} />
            </S.ProjectsWrap>
          </S.SectionInner>
        </S.Section>

        <S.Section id="contato">
          <S.SectionInner className="container">
            <S.SectionHeader>
              <h2>Contato</h2>
              <p>Vamos conversar? Escolha um canal abaixo.</p>
            </S.SectionHeader>
            <S.ContactGrid>
              <S.ContactCard
                href="https://www.linkedin.com/in/nicolasoliveiramor"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>LinkedIn</h3>
                <p>Mensagem direta e networking.</p>
              </S.ContactCard>
              <S.ContactCard
                href="https://github.com/nicolasoliveiramor"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>GitHub</h3>
                <p>Repositórios, contribuições e código.</p>
              </S.ContactCard>
              <S.ContactCard
                href="https://wa.me/5511933961754"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>WhatsApp</h3>
                <p>Me chame no WhatsApp</p>
              </S.ContactCard>
            </S.ContactGrid>
          </S.SectionInner>
        </S.Section>
      </main>

      <S.Footer>
        <S.FooterInner className="container">
          <p>© {new Date().getFullYear()} Nicolas Oliveira</p>
          <S.BackToTop
            type="button"
            onClick={() => {
              scrollTo('inicio')
            }}
          >
            Voltar ao topo
          </S.BackToTop>
        </S.FooterInner>
      </S.Footer>
    </S.Page>
  )
}
