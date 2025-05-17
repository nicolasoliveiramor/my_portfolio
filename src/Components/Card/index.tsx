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
              <button>Ver projeto</button>
              <button>Código no GitHub</button>
            </S.CardButtonContainer>
          </S.CardInfos>
        </S.CardContainer>
      ))}
    </>
  )
}
