import { motion } from 'framer-motion'

import { useGetPresentationQuery, useGetSkillsQuery } from '../services/api'

import { CardContainer } from '../Containers/CardContainer'
import { Loader } from '../Components/Loader'

import * as S from './styles'

const viewportOnce = { once: true, amount: 0.25 } as const

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: 'easeOut' }
  }
} as const

const fadeDown = {
  hidden: { opacity: 0, y: -18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: 'easeOut' }
  }
} as const

const slideRight = {
  hidden: { opacity: 0, x: 24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.85, ease: 'easeOut' }
  }
} as const

const slideLeft = {
  hidden: { opacity: 0, x: -24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.85, ease: 'easeOut' }
  }
} as const

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } }
} as const

export const Home = () => {
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

  return (
    <S.Page>
      <S.Header>
        <S.HeaderInner className="container">
          <S.Brand href="#inicio">Nicolas Oliveira Mor</S.Brand>
          <S.Nav>
            <S.NavLink href="#sobre">Sobre</S.NavLink>
            <S.NavLink href="#skills">Skills</S.NavLink>
            <S.NavLink href="#projetos">Projetos</S.NavLink>
            <S.NavLink href="#contato">Contato</S.NavLink>
          </S.Nav>
          <S.HeaderActions>
            <S.OutlineLink
              href="https://github.com/nicolasoliveiramor"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </S.OutlineLink>
            <S.OutlineLink
              href="https://www.linkedin.com/in/nicolasoliveiramor"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </S.OutlineLink>
          </S.HeaderActions>
        </S.HeaderInner>
      </S.Header>

      <main>
        <S.Hero id="inicio">
          <S.SectionInner className="container">
            <S.HeroGrid>
              <S.HeroText>
                <motion.div
                  variants={stagger}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.div variants={fadeDown}>
                    <S.Kicker>Portfolio</S.Kicker>
                  </motion.div>
                  <motion.h1 variants={slideLeft}>{heroTitle}</motion.h1>
                  <motion.p variants={slideLeft}>{heroDescription}</motion.p>
                  <motion.div variants={fadeUp}>
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
                  </motion.div>
                </motion.div>
              </S.HeroText>

              <S.HeroMedia>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.85, ease: 'easeOut' }}
                >
                  {heroImage ? (
                    <img src={heroImage} alt="Imagem do Perfil" />
                  ) : (
                    <S.ImagePlaceholder aria-hidden="true" />
                  )}
                </motion.div>
              </S.HeroMedia>
            </S.HeroGrid>
          </S.SectionInner>
        </S.Hero>

        <S.Section id="sobre">
          <S.SectionInner className="container">
            <motion.div
              variants={slideLeft}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
            </motion.div>
            <motion.div
              variants={slideRight}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              <S.AboutHighlights style={{ justifyContent: 'center' }}>
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
            </motion.div>
          </S.SectionInner>
        </S.Section>

        <S.Section id="skills">
          <S.SectionInner className="container">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              <S.SectionHeader>
                <h2>{skillsData?.sectionTitle ?? 'Skills'}</h2>
                <p>Tecnologias e ferramentas que uso no dia a dia.</p>
              </S.SectionHeader>
            </motion.div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              <S.SkillsGrid>
                {skills.map((tech) => (
                  <S.SkillPill key={tech}>{tech}</S.SkillPill>
                ))}
              </S.SkillsGrid>
            </motion.div>
          </S.SectionInner>
        </S.Section>

        <S.Section id="projetos">
          <S.SectionInner className="container">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              <S.SectionHeader>
                <h2>Projetos</h2>
                <p>Arraste para o lado para ver meus trabalhos recentes.</p>
              </S.SectionHeader>
            </motion.div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              <S.ProjectsWrap>
                <CardContainer />
              </S.ProjectsWrap>
            </motion.div>
          </S.SectionInner>
        </S.Section>

        <S.Section id="contato">
          <S.SectionInner className="container">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              <S.SectionHeader>
                <h2>Contato</h2>
                <p>Vamos conversar? Escolha um canal abaixo.</p>
              </S.SectionHeader>
            </motion.div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
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
            </motion.div>
          </S.SectionInner>
        </S.Section>
      </main>

      <S.Footer>
        <S.FooterInner className="container">
          <p>© {new Date().getFullYear()} Nicolas Oliveira Mor</p>
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
