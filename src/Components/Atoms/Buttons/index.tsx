import * as S from './styles'

type ButtonProps = {
  children: React.ReactNode
  onClick?: () => void
}

export const Button = ({ children, onClick }: ButtonProps) => (
  <S.AnimatedButton onClick={onClick}>{children}</S.AnimatedButton>
)
