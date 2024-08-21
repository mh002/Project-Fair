import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header({ status }) {
  return (
    <>
      <Navbar className="bg-body-tertiary">
        <Container className='d-flex justify-content-between'>
          <Navbar.Brand href="#home">
            <i className='fa-solid fa-diagram-project fa-xl' style={{ color: '#22052e' }}></i>
            {' '}
            Project Fair
          </Navbar.Brand>
          <div>
            {!status &&
              <button className='btn btn-outline-danger'>
                <i className='fa-solid fa-right-from-bracket'>
                  Logout
                </i>
              </button>
            }

          </div>


        </Container>
      </Navbar>
    </>
  )
}

export default Header