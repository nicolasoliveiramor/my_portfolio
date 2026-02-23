import { Button } from '../Atoms/Buttons'

import * as S from './styles'

export const Card = ({ items }: Iprojects) => {
  return (
    <>
      {items.map((item) => (
        <S.CardContainer key={item.id}>
          <h2>{item.title}</h2>
          <img
            src={item.image}
            alt={`Imagem  do  projeto ${item.title}`}
            loading="lazy"
          />
          <S.CardInfos>
            <h4>Tecnologias:</h4>
            <S.TechnologiesContainer>
              <ul>
                {item.technologies.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </S.TechnologiesContainer>
            <p>{item.description}</p>
            <S.CardButtonContainer>
              {item.link ? (
                <Button
                  fluidMobile
                  href={item.link}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Ver projeto
                </Button>
              ) : (
                <Button fluidMobile disabled>
                  Ver projeto
                </Button>
              )}
              {'codeback' in item && item.codeback ? (
                <>
                  <Button
                    compact
                    fluidMobile
                    href={item.codeback}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Código backend
                  </Button>
                  {item.code ? (
                    <Button
                      compact
                      fluidMobile
                      href={item.code}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Código frontend
                    </Button>
                  ) : (
                    <Button compact fluidMobile disabled>
                      Código frontend
                    </Button>
                  )}
                </>
              ) : (
                item.code ? (
                  <Button
                    fluidMobile
                    href={item.code}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Código frontend
                  </Button>
                ) : (
                  <Button fluidMobile disabled>
                    Código frontend
                  </Button>
                )
              )}
            </S.CardButtonContainer>
          </S.CardInfos>
        </S.CardContainer>
      ))}
    </>
  )
}
