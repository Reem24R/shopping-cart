// import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
export default function NavBar() {
  return (
    <div>
       <Navbar bg="dark" data-bs-theme="dark" className='text-white '>
        <Container className=' '>
          <Nav className=" flex justify-between  w-[400px] ">
            <Link to="/" className='text-3xl mx-5'>Shop</Link>
            <Link to="/cart" className='text-3xl' ><i className="fa-solid fa-cart-shopping text-3xl"></i></Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}
//we should notice thst when use navbar form bootstrap  it rerender the whole page 
// for this we should use Link from react-router-dom bc when i go to anthor page it 
//not rerender the page the save the changes that i make in it
