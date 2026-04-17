import React from 'react'
import { useMovieDetailQuery, useMovieReviewsQuery, useMovieVideosQuery } from '../../hooks/useMovieDetail'
import ReviewCard from './components/ReviewCard'
import { useParams } from 'react-router-dom'
import { Container, Row, Col, Badge } from 'react-bootstrap'
import { Accordion } from 'react-bootstrap'
import './MovieDetailPage.style.css'

const MovieDetailPage = () => {
  const { id } = useParams()
  const { data } = useMovieDetailQuery(id)
  const { data: reviews } = useMovieReviewsQuery(id)
  const { data: videos } = useMovieVideosQuery(id)

  const trailer = videos?.find(
    (v) => v.type === 'Trailer' && v.site === 'YouTube'
  ) || videos?.[0]

  return (
  <Container>
    <Row className="mt-5">                                    
      <Col lg={4} xs={12} className="mb-4">
        <img
          src={`https://media.themoviedb.org/t/p/w500${data?.poster_path}`}
          alt={data?.title}
          className="movie-detail-poster"
        />
      </Col>
      <Col lg={8} xs={12}>
        <h1 className="movie-detail-title">{data?.title}</h1>

            <div className="movie-detail-genres mb-3">
              {data?.genres?.map((genre) => (
                <Badge key={genre.id} bg="danger" className="me-1">{genre.name}</Badge>
              ))}
            </div>

            <div className="movie-detail-info mb-3">
              <span>⭐ {data?.vote_average?.toFixed(1)}</span> |
              <span>인기도: {data?.popularity?.toFixed(0)}%</span> |
              <span>{data?.adult ? '18+' : 'All'}</span> |
              <span>개봉일: {data?.release_date}</span> |
              <span>{data?.runtime}분</span>
            </div>

            {data?.budget > 0 && (
              <p className="movie-detail-budget">예산: ${data?.budget?.toLocaleString()}</p>
            )}

            <h5 className="text-white mt-4">줄거리</h5>
            <p className="movie-detail-overview">
              {data?.overview || '줄거리 정보가 없습니다.'}
            </p>
      </Col>
    </Row>
    <div className="mt-5">
      <Accordion className="mt-5">
        <Accordion.Item eventKey="0" className="bg-transparent border-0">
          <Accordion.Header>리뷰 ({reviews?.length || 0})</Accordion.Header>
          <Accordion.Body>
            {reviews?.length > 0
              ? reviews.map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))
              : <p className="text-secondary">리뷰가 없습니다.</p>
            }
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
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