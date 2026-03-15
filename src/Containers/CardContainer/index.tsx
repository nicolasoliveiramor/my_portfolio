import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { Card } from '../../Components/Card'

import { useGetProjectsQuery } from '../../services/api'

import * as S from './styles'

export const CardContainer = () => {
  const { data, isLoading, isError, isFetching, refetch } =
    useGetProjectsQuery()
  const projects: Iprojects['items'] = data?.items ?? []

  if (isError) {
    return (
      <S.State role="alert">
        <h2>
          Ocorreu um erro ao carregar os dados. Por favor, tente novamente mais
          tarde.
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

  return (
    <S.Container>
      <S.CarouselFrame>
        <S.NavButton
          className="carousel-prev"
          $direction="prev"
          type="button"
          aria-label="Projeto anterior"
        />
        <S.NavButton
          className="carousel-next"
          $direction="next"
          type="button"
          aria-label="Próximo projeto"
        />

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          speed={650}
          grabCursor
          navigation={{ prevEl: '.carousel-prev', nextEl: '.carousel-next' }}
          pagination={{ el: '.carousel-pagination', clickable: true }}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <Card items={[project]} />
            </SwiperSlide>
          ))}
        </Swiper>

        <S.Pagination className="carousel-pagination" />
      </S.CarouselFrame>
    </S.Container>
  )
}
