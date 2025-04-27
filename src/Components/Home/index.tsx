import { useGetProfileQuery } from '../../services/api'

import PortfolioImg from '../../assets/images/foto_pro_portfolio.jpg'

import * as S from './styles'

export const Home = () => {
  const { data, isLoading, error } = useGetProfileQuery()

  const { frontDominances, frontKnowledges, backKnowledges } =
    (data && data.skills) || {}

  if (error) {
    return (
      <h1>
        Ocorreu um erro ao carregar os dados. Por favor, tente novamente mais
        tarde.
      </h1>
    )
  }

  return (
    <>
      <S.HomeSection className="container">
        {isLoading ? (
          <h1>Carregando...</h1>
        ) : (
          <S.HomeContainer>
            <S.HomeContent>
              <S.HomeApresentation>
                {data &&
                  data.apresentation.map((item) => (
                    <div>
                      <h2>{item.title}</h2>
                      <p>{item.description}</p>
                    </div>
                  ))}
                <h2>Dominâncias e conhecimentos:</h2>
                <div>
                  {frontDominances &&
                    frontDominances.map((item) => (
                      <div key={item.id}>
                        <h4>Domínancias em Front-End:</h4>
                        <p>{item.technologies.join(', ')}</p>
                      </div>
                    ))}
                </div>
                <div>
                  {frontKnowledges &&
                    frontKnowledges.map((item) => (
                      <div key={item.id}>
                        <h4>Conhecimentos em Front-End:</h4>
                        <p>{item.technologies.join(', ')}</p>
                      </div>
                    ))}
                </div>
                <div>
                  {backKnowledges &&
                    backKnowledges.map((item) => (
                      <div key={item.id}>
                        <h4>Conhecimentos em Back-End:</h4>
                        <p>{item.technologies.join(', ')}</p>
                      </div>
                    ))}
                </div>
              </S.HomeApresentation>
              <img src={PortfolioImg} alt="Imagem do Pefil" />
            </S.HomeContent>
            <S.HomeButtonContainer>
              <S.HomeButtonList>
                <li>
                  <button>Meu GitHub</button>
                </li>
                <li>
                  <button>LinkedIn</button>
                </li>
                <li>
                  <button>Currículo</button>
                </li>
              </S.HomeButtonList>
              <S.HomeButtonList>
                <li>
                  <button>Projetos Front-End</button>
                </li>
                <li>
                  <button>Projetos Back-End</button>
                </li>
              </S.HomeButtonList>
            </S.HomeButtonContainer>
          </S.HomeContainer>
        )}
      </S.HomeSection>
    </>
  )
}
