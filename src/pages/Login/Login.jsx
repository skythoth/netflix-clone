import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import './Login.style.css'
import { motion } from 'framer-motion'
import useAuthStore from '../../store/useAuthStore'

const profiles = [
  { name: '사용자 1', color: '#e50914' },
  { name: '사용자 2', color: '#1b9e1b' },
  { name: '사용자 3', color: '#5ba1d0' },
  { name: '키즈', color: '#f5c518' },
]

const Login = () => {
  const navigate = useNavigate()
  const { login } = useAuthStore()

  const handleProfile = (profile) => {
    login(profile)
    navigate('/')
    console.log('profile :', profile)
  }
  return (
    <motion.div
        initial={{ opacity: 0 }}    // 처음 상태 (안 보임)
        animate={{ opacity: 1 }}     // 들어올 때 (보임)
        exit={{ opacity: 0, }}        // 나갈 때 (안 보임)
        transition={{ duration: 0.3 }}
    >
        <div className='login-page'>
        <div className='login-header'>
            <img
            src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png'
            alt='Netflix'
            className='login-logo'
            />
        </div>
        <div className='login-body'>
            <h1 className='login-title'>넷플릭스를 시청할 프로필을 선택하세요.</h1>
            <div className='profile-grid'>
            {profiles.map((profile, index) => (
                <div className='profile-item' key={index} onClick={() => handleProfile(profile)} >
                <div className='profile-avatar' style={{ backgroundColor: profile.color }}>
                    <span className='profile-initial'>{profile.name.charAt(0)}</span>
                </div>
                <span className='profile-name'>{profile.name}</span>
                </div>
            ))}
            </div>
            <button className='manage-btn'>
            <FontAwesomeIcon icon={faPenToSquare} /> 프로필 관리
            </button>
        </div>
        </div>
    </motion.div>
  )
}

export default Login