import React from 'react'

import * as S from './styles'

export type HomecontainerProps = {
  className?: string
  background: 'left' | 'right'
  children: React.ReactNode
}

export const HomeContainer = ({ className, background, children }: HomecontainerProps) => {
  return (
    <S.HomeContainer className={className} background={background}>
      <div className="container">{children}</div>
    </S.HomeContainer>
  )
}
