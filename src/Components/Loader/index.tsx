import * as S from './styles'

export const Loader = () => (
  <S.LoaderDiv role="status" aria-live="polite" aria-busy="true">
    <S.Spinner aria-hidden="true" />
    <S.LoaderText>Carregando...</S.LoaderText>
  </S.LoaderDiv>
)
