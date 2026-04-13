import React from 'react'
import { usePopularMoviesQuery } from '../../../../hooks/usePopularMovies'
import Alert from 'react-bootstrap/Alert';
import Spinner from 'react-bootstrap/Spinner';
import './PopularMovieSlide.style.css';
import MovieSlider from '../../../../common/MovieSlider/MovieSlider';
import responsive from '../../../../constants/responsive';


const PopularMovieSlide = () => {

    const { data, isLoading, isError, error } = usePopularMoviesQuery()
    console.log('data', data)

    if (isLoading) {
        return <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}><Spinner animation="border" variant="light" /></div>
    }
    if (isError) {
        return <Alert variant='danger'>{error.message}</Alert>
    }
        
    return (
        <MovieSlider title='Popular Movies' movies={data.results} responsive={responsive} />
    )
}

export default PopularMovieSlide