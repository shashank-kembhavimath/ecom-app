import React from 'react'
import {Container,Navbar,Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function Header(){
    return(
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">e-Com</Navbar.Brand>
          <Nav className="me-auto navbar-wrapper">
            <Link to='/add'>Add Product</Link>
            <Link to='/update'>Update Product</Link>
            <Link to='/login'>Login Product</Link>
            <Link to='/register'>Register Product</Link>
          </Nav>
        </Container>
      </Navbar>
    )
}

export default Header