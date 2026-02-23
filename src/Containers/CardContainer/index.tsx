import { Card } from '../../Components/Card'

import { useGetProjectsQuery } from '../../services/api'

import * as S from './styles'

type CardContainerProps = {
  project: Iprojects['items'][number]['category'] | 'all'
}

export const CardContainer = ({ project }: CardContainerProps) => {
  const { data, isLoading, isError, isFetching, refetch } = useGetProjectsQuery()

  if (isError) {
    return (
      <S.State role="alert">
        <h2>
          Ocorreu um erro ao carregar os dados. Por favor, tente novamente mais tarde.
        </h2>
        <S.StateActions>
          <S.StateButton
            type="button"
            onClick={() => {
              refetch()
            }}
          >
            Tentar novamente
          </S.StateButton>
        </S.StateActions>
      </S.State>
    )
  }

  if ((isLoading || isFetching) && !data) {
    return (
      <S.SkeletonGrid aria-label="Carregando projetos">
        {Array.from({ length: 6 }).map((_, index) => (
          <S.SkeletonCard key={index} />
        ))}
      </S.SkeletonGrid>
    )
  }

  if (!data) {
    return null
  }

  const filteredItems: Iprojects['items'] =
    project === 'all' ? data.items : data.items.filter((item) => item.category === project)

  if (filteredItems.length === 0) {
    return (
      <S.State>
        <h2>
          {project === 'frontend'
            ? 'Não há projetos de Frontend no momento.'
            : project === 'fullstack'
              ? 'Não há projetos de Fullstack no momento.'
              : 'Não há projetos cadastrados no momento.'}
        </h2>
      </S.State>
    )
  }

  return (
    <S.Projects>
      <Card items={filteredItems} />
    </S.Projects>
  )
}
