import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import { Row, Col } from 'react-bootstrap'
import ProjectCard from '../components/ProjectCard'
import { allProjects } from '../services/allApis'

function Projects() {

  const [projects, setProjects] = useState([])
  const [logStatus, setlogStatus] = useState(false)

  useEffect(() => {
    if (sessionStorage.getItem('token')) {
      getData()
      setlogStatus(true)
    }
    else {
      console.log("login First")
      setlogStatus(false)
    }
  }, [])
  console.log(projects)

  const getData = async () => {
    const header = { "Authorization": `Bearer ${sessionStorage.getItem('token')}` }
    const result = await allProjects(header)
    console.log(result)
    if (result.status == 200) {
      setProjects(result.data)
    }
    else {
      console.log(result.response.data)
    }
  }

  return (
    <>
      <Header status={true} />
      <div className='p-5'>
        <h2>All Projects</h2>
        {
          logStatus ?
            <Row>
              {
                projects.length > 0 ?
                  projects.map(item => (
                    <Col>
                      <ProjectCard project={item} />
                    </Col>
                  ))
                  :
                  <h2 className='text-center text-danger'>No Projects Available!!!</h2>

              }

            </Row>
            :
            <h1 className='text-center text-warning'>Please login First to Access Projects!!</h1>
          
        }

      </div>
    </>
  )
}

export default Projects