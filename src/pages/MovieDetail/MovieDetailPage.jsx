import React from 'react'
import { useMovieDetailQuery, useMovieReviewsQuery, useMovieVideosQuery } from '../../hooks/useMovieDetail'
import ReviewCard from './components/ReviewCard'
import { useParams } from 'react-router-dom'
import { Container } from 'react-bootstrap'

const MovieDetailPage = () => {
  const { id } = useParams()
  const { data: reviews } = useMovieReviewsQuery(id)
  const { data: videos } = useMovieVideosQuery(id)

  const trailer = videos?.find(
    (v) => v.type === 'Trailer' && v.site === 'YouTube'
  ) || videos?.[0]

  return (
  <Container>
    <div className="mt-5">
      <h5 className="text-white">리뷰 ({reviews?.length || 0})</h5>
      {reviews?.length > 0
        ? reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))
        : <p className="text-secondary">리뷰가 없습니다.</p>
      }
    </div>
    {trailer && (
      <div className="mt-5">
        <h5 className="text-white">예고편</h5>
        <div className="movie-trailer">
          <iframe
            src={`https://www.youtube.com/embed/${trailer.key}`}
            title={trailer.name}
            allowFullScreen
          />
        </div>
      </div>
    )}
  </Container>
  )
}

export default MovieDetailPage