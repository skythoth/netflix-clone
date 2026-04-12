import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import './Footer.style.css'

const Footer = () => {
  return (
    <footer className='netflix-footer'>
      <div className='footer-social'>
        <a href='#'><FontAwesomeIcon icon={faFacebookF} /></a>
        <a href='#'><FontAwesomeIcon icon={faInstagram} /></a>
        <a href='#'><FontAwesomeIcon icon={faTwitter} /></a>
        <a href='#'><FontAwesomeIcon icon={faYoutube} /></a>
      </div>
      <div className='footer-links'>
        <a href='#'>화면 해설</a>
        <a href='#'>고객 센터</a>
        <a href='#'>기프트카드</a>
        <a href='#'>미디어 센터</a>
        <a href='#'>투자 정보(IR)</a>
        <a href='#'>입사 정보</a>
        <a href='#'>이용 약관</a>
        <a href='#'>개인정보</a>
        <a href='#'>법적 고지</a>
        <a href='#'>쿠키 설정</a>
        <a href='#'>회사 정보</a>
        <a href='#'>문의하기</a>
      </div>
      <p className='footer-copyright'>&copy; 1997-2026 Netflix, Inc.</p>
    </footer>
  )
}

export default Footer
