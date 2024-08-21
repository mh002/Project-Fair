import React, { useContext } from 'react'
import { useState ,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Row, Col } from 'react-bootstrap'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';
import { addProject } from '../services/allApis';
import { addProjectResponseContext } from '../Context Api/Contextapi';

function Add() {

    const {addProjectResponse,setAddProjectResponse}=useContext(addProjectResponseContext)
    console.log(useContext(addProjectResponseContext))

    const [projectData,setProjectData]=useState({
        title:"",overview:"",language:"",github:"",demo:"",projectImage:""
    })

    

    const [preview,setPreview]=useState("")

    const [imageStatus,setImageStatus]=useState(false)

    useEffect(()=>{
        console.log(projectData);
        if (projectData.projectImage.type=="image/jpg"  || projectData.projectImage.type=="image/jpeg" || projectData.projectImage.type=="image/png"  ) {
            console.log("Image is correct Format");
            setImageStatus(false)
            setPreview(URL.createObjectURL(projectData.projectImage))
        }else{
            console.log("Invalid file formate !! image should be png,jpgor jpeg");
            setImageStatus(true)

        }
    },[projectData.projectImage])

    const handleAddProject=async()=>{

        const {title,overview,language,github,demo,projectImage}=projectData

        if (!title || !overview || !language || !github || !demo|| !projectImage) {
            
                toast.warning("Invalid Data!! enter valid input in every fields")
        }
        else{

            const formData=new FormData()

            formData.append("title",title)
            formData.append("overview",overview)
            formData.append("language",language)
            formData.append("github",github)
            formData.append("demo",demo)
            formData.append("image",projectImage)


            const token=sessionStorage.getItem("token")
            const reqHeader={
                "Content-Type":"multipart/form-data",
                "Authorization":`Bearer ${token}`
            }
            const result=await addProject(formData,reqHeader)
            if(result.status==200){
                toast.success("Project Added Successfully!!")
                setProjectData({
                    title:"",overview:"",language:"",github:"",demo:"",projectImage:""
                })
                handleClose()
                setAddProjectResponse(result)
            }
            else{
                toast.error(result.response.data)
            }




        }
    }

   

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (

        <>
            <Button className="btn btn-info mb-4" onClick={handleShow}>
                Add Project
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add project</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Row>

                        <Col>
                            <label>
                                <input type="file" name='' onChange={e=>setProjectData({...projectData,projectImage:e.target.files[0]})} style={{display:'none'}} />
                            <img className='img-fluid' src={ preview?preview:"https://pixsector.com/cache/517d8be6/av5c8336583e291842624.png"} alt="" />
                            </label>
                            {
                                imageStatus &&
                                 <p className='text-danger'>Invalid file formate !! image should be png,jpgor jpeg</p>
                            }
                        </Col>

                        <Col>
                            <div>
                                <FloatingLabel controlId="titleinp" label="Title" className='mb-3' >
                                    <Form.Control type="text" placeholder="Project title"  onChange={e=>setProjectData({...projectData,title:e.target.value})}/>
                                </FloatingLabel>
                                <FloatingLabel controlId="overviewinp" label="OverView" className='mb-3'  >
                                    <Form.Control type="text" placeholder="Brief about project"  onChange={e=>setProjectData({...projectData,overview:e.target.value})}/>
                                </FloatingLabel>
                                <FloatingLabel controlId="langinp" label="Languages" className='mb-3' >
                                    <Form.Control type="text" placeholder="Languages used"  onChange={e=>setProjectData({...projectData,language:e.target.value})}  />
                                </FloatingLabel>
                                <FloatingLabel controlId="githubinp" label="GitHub Url" className='mb-3'  >
                                    <Form.Control type="text" placeholder="GitHub Url" onChange={e=>setProjectData({...projectData,github:e.target.value})} />
                                </FloatingLabel>


                            </div>
                          

                        </Col>
                        <FloatingLabel controlId="demoinp" label="Demo Url" className='mb-3'  >
                                <Form.Control type="text" placeholder="Demo Url" onChange={e=>setProjectData({...projectData,demo:e.target.value})} />
                            </FloatingLabel>

                    </Row>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleAddProject}>Save</Button>
                </Modal.Footer>
            </Modal></>
    )
}

export default Add