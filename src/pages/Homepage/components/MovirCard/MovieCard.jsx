import React from 'react'
import './MovieCard.style.css'

const MovieCard = ({ movie }) => {
//   const genreNames = movie.genre_ids?.slice(0, 3).map(id => genreMap[id]).filter(Boolean)

  return (
    <div className='movie-card'>
      <img
        src={`https://media.themoviedb.org/t/p/w300${movie.poster_path}`}
        alt={movie.title}
        className='movie-card-img'
      />
      <div className='movie-card-mobile-info'>
        <h4 className='movie-card-title'>{movie.title}</h4>
        <div className='movie-card-meta'>
          <span className='movie-card-rating'>⭐ {movie.vote_average.toFixed(1)}</span>
          <span className='movie-card-age'>{movie.adult ? '18+' : 'All'}</span>
        </div>
      </div>
      <div className='movie-card-dropdown'>
        <div className='movie-card-buttons'>
          <button className='card-btn card-btn-play'>▶</button>
          <button className='card-btn'>＋</button>
          <button className='card-btn'>👍</button>
          <button className='card-btn card-btn-more'>∨</button>
        </div>
        <div className='movie-card-meta'>
          <span className='movie-card-rating'>평점 : {movie.vote_average.toFixed(1)}</span>
          <span className='movie-card-age'>{movie.adult ? '18+' : 'All'}</span>
          <span className='movie-card-badge'>HD</span>
        </div>
        {/* <div className='movie-card-genres'>
          {genreNames?.map((name, i) => (
            <span key={i}>
              {i > 0 && <span className='genre-dot'>•</span>}
              {name}
            </span>
          ))}
        </div> */}
      </div>
    </div>
  )
}

// const genreMap = {
//   28: '액션', 12: '모험', 16: '애니메이션', 35: '코미디', 80: '범죄',
//   99: '다큐멘터리', 18: '드라마', 10751: '가족', 14: '판타지', 36: '역사',
//   27: '공포', 10402: '음악', 9648: '미스터리', 10749: '로맨스', 878: 'SF',
//   10770: 'TV 영화', 53: '스릴러', 10752: '전쟁', 37: '서부'
// }

export default MovieCard