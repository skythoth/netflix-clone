import React from 'react'
import { Container } from 'react-bootstrap'
import Banner from './components/Banner/Banner'
import PopularMovieSlide from './components/PopularMovieSlide/PopularMovieSlide'
import TopRatedMovieSlide from './components/TopRatedMovieSlide/TopRatedMovieSlide'
import UpcomingMovieSlide from './components/UpcomingMovieSlide/UpcomingMovieSlide'

//1. 베너 만들기 => popular movie 중 첫번째 아이템을 보여주기
//2. popular movie
//3. top rated movie
//4. upcoming movie

const Homepage = () => {
  return (
    <div>
      <Banner />
      <Container fluid>
        <PopularMovieSlide />
        <TopRatedMovieSlide />
        <UpcomingMovieSlide />
      </Container>
    </div>
  )
}

export default Homepage