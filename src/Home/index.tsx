import { useDispatch, useSelector } from 'react-redux'

import { useGetPresentationQuery, useGetSkillsQuery } from '../services/api'
import { RootReducer } from '../store'
import { setComponent } from '../store/reducers/render'
import { setSection } from '../store/reducers/render'

import { CardContainer } from '../Containers/CardContainer'
import { HomeContainer } from '../Containers/HomeContainer'
import { Button } from '../Components/Atoms/Buttons'
import { Loader } from '../Components/Loader'

import * as S from './styles'

export const Home = () => {
  const dispatch = useDispatch()
  const activeComponent = useSelector(
    (state: RootReducer) => state.render.activeComponent
  )
  const activeSection = useSelector(
    (state: RootReducer) => state.render.activeSection
  )

  const handleRender = (type: 'frontend' | 'fullstack') => {
    if (activeComponent === type && activeSection) {
      dispatch(setSection(false))
      dispatch(setComponent(null))
    } else {
      dispatch(setComponent(type))
      dispatch(setSection(true))
    }
  }

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

  if (presentationError || skillsError) {
    return (
      <div className="container">
        <h2>
          Ocorreu um erro ao carregar os dados. Por favor, tente novamente mais
          tarde.
        </h2>
      </div>
    )
  }

  if (presentationLoading || skillsLoading) {
    return <Loader />
  }

  return (
    <>
      <HomeContainer className="Apresentacao" background="left">
        <S.HomeContent>
          <S.HomeApresentation>
            {presentationData &&
              presentationData.items.map((item) => (
                <div key={item.id}>
                  <h2>{item.title}</h2>
                  <span>{item.description}</span>
                </div>
              ))}
            <h2>{skillsData?.sectionTitle}</h2>
            {skillsData && (
              <div>
                {skillsData.items.map((item) => (
                  <div key={item.id}>
                    <ul>
                      {item.technologies.map((tech) => (
                        <li key={`${item.id}-${tech}`}>{tech}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </S.HomeApresentation>
          <img src={presentationData?.image ?? ''} alt="Imagem do Perfil" />
        </S.HomeContent>
        <S.HomeButtonContainer>
          <S.HomeButtonList>
            <li>
              <Button>
                <a
                  href="https://github.com/nicolasoliveiramor"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Meu GitHub
                </a>
              </Button>
            </li>
            <li>
              <Button>
                <a
                  href="https://www.linkedin.com/in/nicolasoliveiramor"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </Button>
            </li>
            <li>
              <Button>
                <a href="/curriculo/cv_nicolas_oliveira_mor.pdf" download>
                  Currículo
                </a>
              </Button>
            </li>
          </S.HomeButtonList>
          <S.HomeButtonList>
            <li>
              <Button
                onClick={() => {
                  handleRender('frontend')
                }}
              >
                Projetos Front-End
              </Button>
            </li>
            <li>
              <Button
                onClick={() => {
                  handleRender('fullstack')
                }}
              >
                Projetos Full-Stack
              </Button>
            </li>
          </S.HomeButtonList>
        </S.HomeButtonContainer>
      </HomeContainer>
      {activeSection === true ? (
        <HomeContainer background="right">
          {activeComponent === 'frontend' && (
            <S.Section className="container">
              <CardContainer project="frontend" />
            </S.Section>
          )}
          {activeComponent === 'fullstack' && (
            <S.Section className="container">
              <h1>Não há projetos no momento...</h1>
            </S.Section>
          )}
        </HomeContainer>
      ) : null}
    </>
  )
}
