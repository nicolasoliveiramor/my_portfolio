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
              <button>
                <a href={item.link} target='_blank'>Ver projeto</a>
              </button>
              <button>
                <a href={item.code} target='_blank'>Código no GitHub</a>
              </button>
            </S.CardButtonContainer>
          </S.CardInfos>
        </S.CardContainer>
      ))}
    </>
  )
}
