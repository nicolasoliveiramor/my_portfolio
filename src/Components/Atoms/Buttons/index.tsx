import * as S from './styles'

type ButtonBaseProps = {
  children: React.ReactNode
  onClick?: () => void
  compact?: boolean
  fluidMobile?: boolean
}

type ButtonProps = ButtonBaseProps & (
  | {
      href?: never
      type?: 'button' | 'submit' | 'reset'
      disabled?: boolean
    }
  | {
      href: string
      target?: string
      rel?: string
      download?: boolean | string
    }
)

const isLinkButton = (
  props: ButtonProps
): props is ButtonBaseProps & {
  href: string
  target?: string
  rel?: string
  download?: boolean | string
} => typeof (props as { href?: unknown }).href === 'string'

export const Button = (props: ButtonProps) => {
  const { children, onClick, compact, fluidMobile } = props

  if (isLinkButton(props)) {
    return (
      <S.AnimatedLink
        href={props.href}
        target={props.target}
        rel={props.rel}
        download={props.download}
        onClick={onClick}
        compact={compact}
        fluidMobile={fluidMobile}
      >
        {children}
      </S.AnimatedLink>
    )
  }

  return (
    <S.AnimatedButton
      onClick={onClick}
      compact={compact}
      fluidMobile={fluidMobile}
      type={props.type ?? 'button'}
      disabled={props.disabled}
    >
      {children}
    </S.AnimatedButton>
  )
}
