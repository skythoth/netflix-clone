import { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet, useNavigate, Link } from 'react-router-dom';
import './AppLayout.style.css'
import Footer from './Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import useAuthStore from '../store/useAuthStore';

const AppLayout = () => {
  const [searchOpen, setSearchOpen] = useState(false)
  const [keyword, setKeyword] = useState('')
  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()
    if (keyword.trim()) {
      navigate(`/movies?q=${keyword}`)
      setKeyword('')
    }
  }

  const { user } = useAuthStore()

  return (
    <div>
      <Navbar expand="lg" className="netflix-navbar">
        <Container fluid>
          <Navbar.Brand as={Link} to="/">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
              alt="Netflix"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/movies">Movies</Nav.Link>
            </Nav>
            <Form className="d-flex search-form" onSubmit={handleSearch}>
              <Form.Control
                type="search"
                placeholder="검색어를 입력하세요"
                className={`search-input ${searchOpen ? 'active' : ''}`}
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
              />
              <button
                type="submit"
                className="search-btn"
                onClick={() => setSearchOpen(!searchOpen)}
              >
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </Form>
            <div className='nav-profile-item'>
                <div className='nav-profile-avatar' style={{ backgroundColor: user.color }}>
                    <span className='nav-profile-initial'>{user.name.charAt(0)}</span>
                </div>
                <span className='nav-profile-name'>{user.name}</span>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="app-content">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default AppLayout
