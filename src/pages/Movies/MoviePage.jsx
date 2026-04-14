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
import { useMovieGenreQuery } from '../../hooks/useMovieGenre';
import Dropdown from 'react-bootstrap/Dropdown';

// nav바에서 클릭해서 온 경우 => popular movie 보내주기
// 키워드를 입력해서 온 경우 => 키워드와 관련된 영화 보내주기
const MoviePage = () => {
  const [query, setQuery] = useSearchParams()
  const [page, setPage] = useState(1)
  const [sortOrder, setSortOrder] = useState("")
  const [selectedGenre, setSelectedGenre] = useState("")
  const keyword = query.get("q");

  useEffect(() => {
    setPage(1)
  }, [keyword])

  const { data, isLoading, isError, error } = useSearchMovieQuery(keyword, page)
  console.log(data)

  const handlePageClick = (selected) => {
    setPage(selected.selected + 1)
  }

  const filteredResults = data?.results?.filter((movie) => selectedGenre === "" || movie.genre_ids.includes(Number(selectedGenre))) ?.sort((a, b) => {
    if (sortOrder === "desc") return b.popularity - a.popularity
    if (sortOrder === "asc") return a.popularity - b.popularity
    return 0
  })

  const { data: genreData } = useMovieGenreQuery()
  console.log(genreData)

  if (isLoading) {
        return <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}><Spinner animation="border" variant="light" /></div>
    }
    if (isError) {
        return <Alert variant='danger'>{error.message}</Alert>
    }

  return (
    <Container>
      <Row>
        <Col xs={12} className='d-flex justify-content-end gap-2 mb-3'>
        <Dropdown>
            <Dropdown.Toggle variant="danger" id="dropdown-basic">
              {sortOrder === "desc" ? "높은 인기순" : sortOrder === "asc" ? "낮은 인기순" : "정렬"}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={() => setSortOrder("desc")}>높은 인기순</Dropdown.Item>
              <Dropdown.Item onClick={() => setSortOrder("asc")}>낮은 인기순</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown>
            <Dropdown.Toggle variant="danger" id="dropdown-basic">    
              {selectedGenre ? genreData?.find((g) => g.id === Number(selectedGenre))?.name : "장르별 검색"}                                      
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={() => setSelectedGenre("")}>전체</Dropdown.Item>
              {genreData?.map((genre) => (
                <Dropdown.Item key={genre.id} onClick={() => setSelectedGenre(String(genre.id))}>{genre.name}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <Row className='row-gap-3'>
          {filteredResults?.length === 0
            ? <Col className="text-center mt-5">검색 결과가 없습니다.</Col>
            : filteredResults?.map((movie, index) => (
              <Col key={index} lg={2} xs={6}>
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