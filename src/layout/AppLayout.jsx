import { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet, useNavigate } from 'react-router-dom';
import './AppLayout.style.css'

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

  return (
    <div>
      <Navbar expand="lg" className="netflix-navbar">
        <Container fluid>
          <Navbar.Brand href="/">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
              alt="Netflix"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/movies">Movies</Nav.Link>
            </Nav>
            <Form className="d-flex search-form" onSubmit={handleSearch}>
              <Form.Control
                type="search"
                placeholder="Search"
                className={`search-input ${searchOpen ? 'active' : ''}`}
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
              />
              <button
                type="button"
                className="search-btn"
                onClick={() => setSearchOpen(!searchOpen)}
              >
                🔍
              </button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="app-content">
        <Outlet />
      </div>
    </div>
  )
}

export default AppLayout
