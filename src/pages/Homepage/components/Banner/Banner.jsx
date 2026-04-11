import React from 'react'
import { usePopularMoviesQuery } from '../../../../hooks/usePopularMovies'
import Alert from 'react-bootstrap/Alert';
import './Banner.style.css'


const Banner = () => {
    const { data, isLoading, isError, error } = usePopularMoviesQuery()
    console.log('data', data)

    if (isLoading) {
        return <h1>Loading...</h1>
    }
    if (isError) {
        return <Alert variant='danger'>{error.message}</Alert>
    }
    return (
    <div className='banner' style={{
        backgroundImage: `url("https://media.themoviedb.org/t/p/w1280${data[0].backdrop_path}")`,
    }}>

        <div className='banner-content'>
            <h1>{data[0].title}</h1>
            <p>{data[0].overview}</p>
            <div className='banner-buttons'>
                <button className='banner-btn btn-play'>▶ 재생</button>
                <button className='banner-btn btn-info'>상세 정보</button>
            </div>
        </div>
    </div>
    )
}

export default Banner