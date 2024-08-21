import React, { useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import ProjectCard from '../components/ProjectCard'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { homeProjects } from '../services/allApis'
function Landing() {

  const [token, setToken] = useState("")
  const [projects, setProjects]=useState([])

  useEffect(() => {
    setToken(sessionStorage.getItem("token"))
    getHomeProjects()
  }, [])

  const getHomeProjects = async () => {
    const result = await homeProjects()
    // console.log(result)
    if(result.status==200){
      setProjects(result.data)
    }
    else{
      console.log(result.response.data)
    }
  }
  console.log(projects)
  return (
    <>
      <div className='w-100 align-items-center d-flex p-5' style={{ height: '100vh', background: '#dbdad5' }}>
        <Row>
          <Col className='align-items-center d-flex'>
            <div>
              <h1 className='display-4 mb-2 tex-light'> Project Fair</h1>
              <p className='' style={{ textAlign: 'justify' }}> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, consequatur?  </p>
              {/* <button className='btn btn-success'>Explore </button> */}
              {
                token ?
                  <Link className='btn btn-success' to={'/dash'}>Manage your Projects</Link>
                  :
                  <Link className='btn btn-success' to={'/auth'}>Start to Explore..</Link>
              }

            </div>
          </Col>

          <Col>
            <img className='img-fluid' src="https://static.vecteezy.com/system/resources/thumbnails/011/153/363/small_2x/3d-web-developer-working-on-project-illustration-png.png" alt="image" style={{ padding: '150px' }} />
          </Col>
        </Row>
      </div>

      <div className='p-5 w-100'>
        <h2 className='text-center mt-4 mb-3 '>Check My Projects...</h2>
        <marquee behavior="scroll" direction="left" scrollamount='14'>
          <div className='d-flex justify-content-evenly mt-2'>
            {
              projects.length>0?
              projects.map(item=>(
                <ProjectCard project={item}/>
              ))
              :
              <h5>No Projects Available</h5>
            }
          </div>
        </marquee>

        <div className='text-center'>
          <Link to={'/proj'}>Click for More</Link>
        </div>
      </div>



    </>
  )
}

export default Landing