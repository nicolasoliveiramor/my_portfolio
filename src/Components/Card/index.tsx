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
              <Button fluidMobile>
                <a href={item.link} rel="noopener noreferrer" target="_blank">
                  Ver projeto
                </a>
              </Button>
              {'codeback' in item ? (
                <>
                  <Button compact fluidMobile>
                    <a
                      href={item.codeback}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Código backend
                    </a>
                  </Button>
                  <Button compact fluidMobile>
                    <a
                      href={item.code}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Código frontend
                    </a>
                  </Button>
                </>
              ) : (
                <Button fluidMobile>
                  <a href={item.code} rel="noopener noreferrer" target="_blank">
                    Código frontend
                  </a>
                </Button>
              )}
            </S.CardButtonContainer>
          </S.CardInfos>
        </S.CardContainer>
      ))}
    </>
  )
}
