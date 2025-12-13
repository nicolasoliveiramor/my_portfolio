import { Card } from '../../Components/Card'

import { useGetProjectsQuery } from '../../services/api'

import * as S from './styles'

type CardContainerProps = {
  project: Iprojects['items'][number]['category'] | 'all'
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

  const filteredItems: Iprojects['items'] =
    project === 'all' ? data.items : data.items.filter((item) => item.category === project)

  if (filteredItems.length === 0) {
    return (
      <div className="container">
        <S.Projects>
          <h2>
            {project === 'frontend'
              ? 'Não há projetos de Front-End no momento.'
              : project === 'fullstack'
              ? 'Não há projetos de Back-End no momento.'
              : 'Não há projetos cadastrados no momento.'}
          </h2>
        </S.Projects>
      </div>
    )
  }

  return (
    <div className="container">
      <S.Projects>
        <Card items={filteredItems} />
      </S.Projects>
    </div>
  )
}
