import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

import { Button } from '../Atoms/Buttons'

import * as S from './styles'

export const Card = ({ items }: Iprojects) => {
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>(
    {}
  )
  const [overflowingItems, setOverflowingItems] = useState<
    Record<number, boolean>
  >({})
  const descriptionRefs = useRef<Record<number, HTMLParagraphElement | null>>(
    {}
  )

  const setDescriptionRef = useCallback(
    (id: number) => (node: HTMLParagraphElement | null) => {
      descriptionRefs.current[id] = node
    },
    []
  )

  const expandedSet = useMemo(
    () =>
      new Set(
        Object.entries(expandedItems)
          .filter(([, expanded]) => expanded)
          .map(([id]) => Number(id))
      ),
    [expandedItems]
  )

  const updateOverflowingItems = useCallback(() => {
    setOverflowingItems((current) => {
      const next: Record<number, boolean> = {}

      for (const item of items) {
        const node = descriptionRefs.current[item.id]
        const isExpanded = Boolean(expandedItems[item.id])

        if (!node) {
          next[item.id] = current[item.id] ?? false
          continue
        }

        if (isExpanded) {
          next[item.id] = current[item.id] ?? false
          continue
        }

        next[item.id] = node.scrollHeight > node.clientHeight + 1
      }

      const hasChanged = items.some(
        (item) => next[item.id] !== (current[item.id] ?? false)
      )

      return hasChanged ? next : current
    })
  }, [expandedItems, items])

  useEffect(() => {
    updateOverflowingItems()

    const handleResize = () => {
      updateOverflowingItems()
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [updateOverflowingItems])

  const toggleDescription = (id: number) => {
    setExpandedItems((current) => ({ ...current, [id]: !current[id] }))
  }

  return (
    <>
      {items.map((item) => (
        <S.CardContainer key={item.id} data-card-id={item.id}>
          <h2>{item.title}</h2>
          <img
            src={item.image}
            alt={`Imagem  do  projeto ${item.title}`}
            loading="lazy"
          />
          <S.CardInfos>
            <h4>Tecnologias:</h4>
            <S.TechnologiesContainer>
              <ul>
                {item.technologies.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </S.TechnologiesContainer>
            <S.DescriptionWrapper $expanded={expandedSet.has(item.id)}>
              <S.DescriptionText
                id={`project-description-${item.id}`}
                ref={setDescriptionRef(item.id)}
                $expanded={expandedSet.has(item.id)}
              >
                {item.description}
              </S.DescriptionText>
            </S.DescriptionWrapper>
            {overflowingItems[item.id] && (
              <S.ToggleDescriptionButton
                type="button"
                onClick={() => {
                  toggleDescription(item.id)
                }}
                aria-expanded={expandedSet.has(item.id)}
                aria-controls={`project-description-${item.id}`}
              >
                {expandedSet.has(item.id) ? 'Ler menos' : 'Ler mais...'}
              </S.ToggleDescriptionButton>
            )}
            <S.CardButtonContainer>
              {item.link ? (
                <Button
                  fluidMobile
                  href={item.link}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Ver projeto
                </Button>
              ) : (
                <Button fluidMobile disabled>
                  Ver projeto
                </Button>
              )}
              {'codeback' in item && item.codeback ? (
                <>
                  <Button
                    compact
                    fluidMobile
                    href={item.codeback}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Código backend
                  </Button>
                  {item.code ? (
                    <Button
                      compact
                      fluidMobile
                      href={item.code}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Código frontend
                    </Button>
                  ) : (
                    <Button compact fluidMobile disabled>
                      Código frontend
                    </Button>
                  )}
                </>
              ) : item.code ? (
                <Button
                  fluidMobile
                  href={item.code}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Código frontend
                </Button>
              ) : (
                <Button fluidMobile disabled>
                  Código frontend
                </Button>
              )}
            </S.CardButtonContainer>
          </S.CardInfos>
        </S.CardContainer>
      ))}
    </>
  )
}
