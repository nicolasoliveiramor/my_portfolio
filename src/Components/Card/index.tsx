import { Button } from '../Atoms/Buttons'

import * as S from './styles'

export const Card = ({ items }: Iprojects) => {
  return (
    <>
      {items.map((item) => (
        <S.CardContainer key={item.id}>
          <h2>{item.title}</h2>
          <img src={item.image} alt={`Imagem  do  projeto ${item.title}`} />
          <S.CardInfos>
            <h4>Técnologias:</h4>
            <S.TechnologiesContainer>
              <ul>
                <li>
                  <span>{item.technologies}</span>
                </li>
              </ul>
            </S.TechnologiesContainer>
            <p>{item.description}</p>
            <S.CardButtonContainer>
              <Button>
                <a href={item.link} target="_blank">
                  Ver projeto
                </a>
              </Button>
              <Button>
                <a href={item.code} target="_blank">
                  Ver código
                </a>
              </Button>
            </S.CardButtonContainer>
          </S.CardInfos>
        </S.CardContainer>
      ))}
    </>
  )
}
