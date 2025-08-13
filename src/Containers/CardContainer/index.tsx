import { Card } from '../../Components/Card'

import { useGetProjectsQuery } from '../../services/api'

import * as S from './styles'

type CardContainerProps = {
  project: 'frontend' | 'fullstack'
}

export const CardContainer = ({ project }: CardContainerProps) => {
  const { data, isLoading, isError } = useGetProjectsQuery()

  if (isError) {
    return (
      <div className="container">
        <h2>
          Ocorreu um erro ao carregar os dados. Por favor, tente novamente mais
          tarde.
        </h2>
      </div>
    )
  }

  if (isLoading || !data) {
    return (
      <div className="container">
        <h2>Carregando projetos...</h2>
      </div>
    )
  }

  const filtredItems = data.items.filter((item) => item.category === project)

  if (filtredItems.length === 0) {
    return (
      <div className="container">
        <S.Projects>
          <h2>
            {project === 'frontend'
              ? 'Não há projetos de Front-End no momento.'
              : 'Não há projetos de Back-End no momento.'}
          </h2>
        </S.Projects>
      </div>
    )
  }

  return (
    <div className="container">
      <S.Projects>
        <Card items={filtredItems} />
      </S.Projects>
    </div>
  )
}
