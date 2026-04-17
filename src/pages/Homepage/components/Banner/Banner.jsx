import React from 'react'
import { usePopularMoviesQuery } from '../../../../hooks/usePopularMovies'
import Alert from 'react-bootstrap/Alert';
import Spinner from 'react-bootstrap/Spinner';
import './Banner.style.css'
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';


const Banner = (movie) => {
    const { data, isLoading, isError, error } = usePopularMoviesQuery()
    const randomMovie = data?.results[Math.floor(Math.random() * data.results.length)]
    const navigate = useNavigate()
    
    if (isLoading) {
        return <div className='banner-loading'><Spinner animation="border" variant="light" /></div>
    }
    if (isError) {
        return <Alert variant='danger'>{error.message}</Alert>
    }
    return (

    <motion.div className='banner' 
        style={{backgroundImage: `url("https://media.themoviedb.org/t/p/w1280${randomMovie.backdrop_path}")`}}
        initial={{ opacity: 0 }}                             
        animate={{ opacity: 1 }}                             
        transition={{ duration: 1 }}
    >

        <div className='banner-content'>
            <h1>{randomMovie.title}</h1>
            <p>{randomMovie.overview}</p>
            <div className='banner-buttons'>
                <button className='banner-btn btn-play'>▶ 재생</button>
                <button className='banner-btn btn-info' onClick={() => navigate(`/movies/${randomMovie.id}`)}>상세 정보</button>
            </div>
        </div>
    </motion.div>
    )
}

export default Banner