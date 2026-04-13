import { useNavigate } from 'react-router-dom'
import './NotFoundPage.style.css'

const NotFoundPage = () => {
  const navigate = useNavigate()

  return (
    <div className='notfound-page'>
      <div className='notfound-header'>
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png'
          alt='Netflix'
          className='notfound-logo'
        />
      </div>
      <div className='notfound-bg'>
        <div className='notfound-content'>
          <h1 className='notfound-title'>길을 잃으셨나요?</h1>
          <p className='notfound-desc'>
            죄송합니다. 해당 페이지를 찾을 수 없습니다. 홈페이지로 이동해 다양한 콘텐츠를 만나보세요.
          </p>
          <button className='notfound-btn' onClick={() => navigate('/')}>
            Netflix 홈
          </button>
          <div className='notfound-error'>
            <span className='error-line'></span>
            <span className='error-text'>오류 코드: <strong>NSES-404</strong></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFoundPage
