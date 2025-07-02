import { useDispatch, useSelector } from 'react-redux'

import { useGetPresentationQuery, useGetSkillsQuery } from '../services/api'
import { RootReducer } from '../store'
import { setComponent } from '../store/reducers/render'
import { setSection } from '../store/reducers/render'

import { CardContainer } from '../Containers/CardContainer'
import { HomeContainer } from '../Containers/HomeContainer'

import * as S from './styles'

export const Home = () => {
  const dispatch = useDispatch()
  const activeComponent = useSelector(
    (state: RootReducer) => state.render.activeComponent
  )
  const activeSection = useSelector(
    (state: RootReducer) => state.render.activeSection
  )

  const handleRender = (type: 'frontend' | 'backend') => {
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
    return (
      <div className="container">
        <h2>Carregando...</h2>
      </div>
    )
  }

  return (
    <>
      {presentationLoading || skillsLoading ? (
        <h1>Carregando...</h1>
      ) : (
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
              <h2>{skillsData && skillsData.sectionTitle}</h2>
              {skillsData &&
                skillsData.items.map((item) => (
                  <div key={item.id}>
                    <div>
                      <h4>{item.title}</h4>
                      <span>{item.technologies}</span>
                    </div>
                  </div>
                ))}
            </S.HomeApresentation>
            <img
              src={presentationData && presentationData.image}
              alt="Imagem do Pefil"
            />
          </S.HomeContent>
          <S.HomeButtonContainer>
            <S.HomeButtonList>
              <li>
                <button>
                  <a
                    href="https://github.com/nicolasoliveiramor"
                    target="_blank"
                  >
                    Meu GitHub
                  </a>
                </button>
              </li>
              <li>
                <button>
                  <a
                    href="https://www.linkedin.com/in/nicolas-oliveira-mor-1397912ab"
                    target="_blank"
                  >
                    LinkedIn
                  </a>
                </button>
              </li>
              <li>
                <button>
                  <a href="curriculo/curriculo.pdf" download>Currículo</a>
                </button>
              </li>
            </S.HomeButtonList>
            <S.HomeButtonList>
              <li>
                <button
                  onClick={() => {
                    handleRender('frontend')
                  }}
                >
                  Projetos Front-End
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    handleRender('backend')
                  }}
                >
                  Projetos Back-End
                </button>
              </li>
            </S.HomeButtonList>
          </S.HomeButtonContainer>
        </HomeContainer>
      )}
      {activeSection === true ? (
        <HomeContainer background="right">
          {activeComponent === 'frontend' && (
            <div className="container">
              <CardContainer project="frontend" />
            </div>
          )}
          {activeComponent === 'backend' && (
            <div className="container">
              <h1>Não há projetos no momento...</h1>
            </div>
          )}
        </HomeContainer>
      ) : null}
    </>
  )
}
