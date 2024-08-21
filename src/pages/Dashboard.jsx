import React, { useState, useEffect,useContext } from 'react'
import Header from '../components/Header'
import { Row, Col } from 'react-bootstrap'
import Add from '../components/Add'
import Edit from '../components/Edit'
import Profile from '../components/Profile'
import { userProjects } from '../services/allApis'
import { addProjectResponseContext } from '../Context Api/Contextapi'

function Dashboard() {

  const {addProjectResponse,setAddProjectResponse}=useContext(addProjectResponseContext)

  const [user, setUser] = useState("")

  const [projects, setProjects] = useState([])

  useEffect(() => {
    setUser(sessionStorage.getItem("username"))
    getData()
  }, [addProjectResponse])

  console.log(projects)

  const getData = async () => {
    const header = { "Authorization": `Bearer ${sessionStorage.getItem('token')}` }
    const result = await userProjects(header)
    // console.log(result)
    if (result.status == 200) {
      setProjects(result.data)
    }
    else {
      console.log(result.response.data)
    }
  }

  return (
    <>
      <Header />
      <div>
        <div className='p-3'>
          <h1>Welcome:{user}</h1>
        </div>
        <Row>
          <Col sm={12} md={8} className='p-3'>
            <h3>My Projects</h3>
            <div className='border border-3 p-4'>
              <Add />

              {
                projects.length > 0 ?
                  projects.map(item => (
                    <div className='d-flex justify-content-between border shadow mb-3 p-3 rounded'>
                      <h4>{item.title}</h4>
                      <div>
                        <a href={item.github} className='btn me-3'>
                          <i className='fa-brands fa-github fa-2xl'></i>
                        </a>
                        <Edit />
                        <button className='btn me-3'>
                          <i className='fa-solid fa-trash fa-2xl' style={{ color: '#e1141e' }}></i>
                        </button>
                      </div>
                    </div>

                  ))
                  :
                  <h3 className='text-center'>No Projects Available!!!</h3>
              }

            </div>
          </Col>
          <Col sm={2} md={4}>
            <Profile />
          </Col>
        </Row>
      </div>
    </>
  )
}

export default Dashboard