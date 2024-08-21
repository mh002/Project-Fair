import React from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function Profile() {
    return (
        <>
            <div className='p-5 border border-3 shadow m-3'>
                <div className='d-flex justify-content-between'>
                    <h4>Profile</h4>
                    <button>
                        <i className='fa-solid fa-check' style={{ color: '#63E6BE' }}></i>
                    </button>
                </div>
                <div className=''>
                    <label htmlFor="in">
                        <input type="file" name="" id="in" style={{ display: 'none' }} />
                        <img className='img-fluid' width={'200px'} src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="" />
                    </label>
                    <FloatingLabel controlId="username" label="Username" className='mb-2'>
                        <Form.Control type="text" placeholder="Username" />
                    </FloatingLabel>
                    <FloatingLabel controlId="githubinp" label="Git URL" className='mb-2'>
                        <Form.Control type="text" placeholder="Git URL" />
                    </FloatingLabel>
                    <FloatingLabel controlId="linkedinp" label="LinkedIn URL" className='mb-2'>
                        <Form.Control type="text" placeholder="LinkedIn URL" />
                    </FloatingLabel>
                </div>
            </div>
        </>
    )
}

export default Profile