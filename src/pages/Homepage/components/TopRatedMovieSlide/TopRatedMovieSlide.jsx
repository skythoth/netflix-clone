import React from 'react'
import { useTopRatedMoviesQuery } from '../../../../hooks/useTopRatedMovies'
import Alert from 'react-bootstrap/Alert';
import Spinner from 'react-bootstrap/Spinner';
import ReactMultiCarousel from 'react-multi-carousel';
const Carousel = ReactMultiCarousel.default || ReactMultiCarousel;
import 'react-multi-carousel/lib/styles.css';
import MovieCard from '../MovirCard/MovieCard';
import './TopRatedMovieSlide.style.css';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 6
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 2
    }
};

const TopRatedMovieSlide = () => {

    const { data, isLoading, isError, error } = useTopRatedMoviesQuery()
    console.log('data', data)

    if (isLoading) {
        return <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}><Spinner animation="border" variant="light" /></div>
    }
    if (isError) {
        return <Alert variant='danger'>{error.message}</Alert>
    }
        
    return (
        <div className='movie-slide-section'>
            <h3>Top Rated Movies</h3>
            <Carousel
                infinite={true}
                centerMode={true}
                itemClass='movie-slider p-1'
                containerClass='carousel-container'
                responsive={responsive}
            >
                {data.map((movie, index) => (
                    <MovieCard movie={movie} key={index} />
                ))}
            </Carousel>
        </div>
    )
}

export default TopRatedMovieSlide