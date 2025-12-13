import * as S from './styles'

type ButtonProps = {
  children: React.ReactNode
  onClick?: () => void
  compact?: boolean
}

export const Button = ({ children, onClick, compact }: ButtonProps) => (
  <S.AnimatedButton onClick={onClick} compact={compact}>{children}</S.AnimatedButton>
)
