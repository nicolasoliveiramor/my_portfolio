import * as S from './styles'

type ButtonProps = {
  children: React.ReactNode
  onClick?: () => void
  compact?: boolean
  fluidMobile?: boolean
}

export const Button = ({
  children,
  onClick,
  compact,
  fluidMobile
}: ButtonProps) => (
  <S.AnimatedButton
    onClick={onClick}
    compact={compact}
    fluidMobile={fluidMobile}
  >
    {children}
  </S.AnimatedButton>
)
