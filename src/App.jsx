import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import AppLayout from './layout/AppLayout'
import Homepage from './pages/Homepage/Homepage'
import MoviePage from './pages/Movies/MoviePage'
import MovieDetailPage from './pages/MovieDetail/MovieDetailPage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Login from './pages/Login/Login'
import { AnimatePresence } from 'framer-motion'
  import { useLocation } from 'react-router-dom'

// 홈페이지                     '/'
// 영화 전체 보여주는 페이지 (서치)  '/movies'
// 영화 디테일 페이지             '/movies/:id'
// 추천영화 페이지                '/movies/recommendation'
// 리뷰 페이지                   '/movies/:id/review'
function App() {
  const location = useLocation()  // 현재 경로 추적

  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.key}>
        <Route path='/' element={<Login />} />
        <Route path='/browse' element={<AppLayout />}>
          <Route index element={<Homepage />} />
          <Route path='movies'>
            <Route index element={<MoviePage />} />
            {/* <Route path='recommendation' element={<MovieRecommendationPage />} /> */}
            <Route path=':id' element={<MovieDetailPage />} />
            {/* <Route path=':id/review' element={<MovieReviewPage />} /> */}
          </Route>
        </Route>

        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </AnimatePresence>
  )
}

export default App
