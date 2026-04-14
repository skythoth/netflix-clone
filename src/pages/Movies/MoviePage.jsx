import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useSearchMovieQuery } from '../../hooks/useSearchMovie'
import { useSearchParams } from 'react-router-dom'
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';
import MovieCard from '../../common/MovieCard/MovieCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import ReactPaginateModule from 'react-paginate';
const ReactPaginate = ReactPaginateModule.default || ReactPaginateModule;
import './MoviePage.style.css';

// nav바에서 클릭해서 온 경우 => popular movie 보내주기
// 키워드를 입력해서 온 경우 => 키워드와 관련된 영화 보내주기
const MoviePage = () => {
  const [query, setQuery] = useSearchParams()
  const [page, setPage] = useState(1)
  const keyword = query.get("q");

  useEffect(() => {
    setPage(1)
  }, [keyword])

  const { data, isLoading, isError, error } = useSearchMovieQuery(keyword, page)
  console.log(data)

  const handlePageClick = (selected) => {
    setPage(selected.selected + 1)
  }

  if (isLoading) {
        return <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}><Spinner animation="border" variant="light" /></div>
    }
    if (isError) {
        return <Alert variant='danger'>{error.message}</Alert>
    }

  return (
    <Container>
      <Row>
        <Col lg={4} xs={12}>
          
        </Col>
        <Col lg={8} xs={12}>
          <Row className='row-gap-3'>
          {data?.results.length === 0
            ? <Col className="text-center mt-5">검색 결과가 없습니다.</Col>
            : data?.results.map((movie, index) => (
              <Col key={index} lg={3} xs={6}>
                <MovieCard movie={movie} />
              </Col>
            ))
          }
          </Row>
          <Row>
            <Col className='mt-5 d-flex justify-content-center'>
              <ReactPaginate
                nextLabel={<FontAwesomeIcon icon={faChevronRight} />}
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                marginPagesDisplayed={2}
                pageCount={data?.total_pages}
                previousLabel={<FontAwesomeIcon icon={faChevronLeft} />}
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakLabel="..."
                breakClassName="page-item"
                breakLinkClassName="page-link"
                containerClassName="pagination"
                activeClassName="active"
                renderOnZeroPageCount={null}
                forcePage={page - 1}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default MoviePage