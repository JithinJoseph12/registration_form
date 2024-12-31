import React, { useState } from 'react';
import { TextField, Stack, Button } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Row from 'react-bootstrap/Row';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    dob: '',
    email: '',
    gender: '',
    address: '',
    course: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateFields = () => {
    let valid = true;
    const newErrors = {};

    if (!formData.name) {
      valid = false;
      newErrors.name = 'Name is required';
    }
    if (!formData.phone || !/^\d{10}$/.test(formData.phone)) {
      valid = false;
      newErrors.phone = 'Valid phone number is required';
    }
    if (!formData.dob) {
      valid = false;
      newErrors.dob = 'Date of birth is required';
    }
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      valid = false;
      newErrors.email = 'Valid email address is required';
    }
    if (!formData.gender) {
      valid = false;
      newErrors.gender = 'Gender selection is required';
    }
    if (!formData.address) {
      valid = false;
      newErrors.address = 'Address is required';
    }
    if (!formData.course) {
      valid = false;
      newErrors.course = 'Course selection is required';
    }

    setErrors(newErrors);
    return valid;
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (validateFields()) {
      const formattedData = `
        Data Stored Successfully:
        Name: ${formData.name}
        Phone: ${formData.phone}
        Date of Birth: ${formData.dob}
        Email: ${formData.email}
        Gender: ${formData.gender}
        Address: ${formData.address}
        Course: ${formData.course}
      `;
      alert(formattedData);
    }
  };
  

  const handleReset = () => {
    setFormData({
      name: '',
      phone: '',
      dob: '',
      email: '',
      gender: '',
      address: '',
      course: '',
    });
    setErrors({});
  };

  return (
    <div style={{ width: '100%', minHeight: '100vh' }} className="backgrnd d-flex justify-content-center align-items-center">
      <div style={{ width: '600px' }} className="transparent-form">
        <h1 className="d-flex justify-content-center fw-bold">Registration Form</h1>
        <form className="mt-5" onSubmit={handleRegister}>
          {/* Name */}
          <FloatingLabel controlId="floatingName" label="Name" className="fw-bold mb-4">
            <Form.Control
              type="text"
              placeholder="Enter your name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`transparent-input ${errors.name ? 'is-invalid' : ''}`}
            />
            {errors.name && <div className="text-danger">{errors.name}</div>}
          </FloatingLabel>

          {/* Phone Number */}
          <FloatingLabel controlId="floatingPhone" label="Phone Number" className="fw-bold mb-4">
            <Form.Control 
              type="tel"
              placeholder="Phone Number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`transparent-input ${errors.phone ? 'is-invalid' : ''}`}
            />
            {errors.phone && <div className="text-danger">{errors.phone}</div>}
          </FloatingLabel>

          {/* DOB */}
          <FloatingLabel controlId="floatingDOB" label="Date of Birth" className=" fw-bold mb-4">
            <Form.Control
              type="date"
              placeholder="Date of Birth"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className={`transparent-input ${errors.dob ? 'is-invalid' : ''}`}
            />
            {errors.dob && <div className="text-danger">{errors.dob}</div>}
          </FloatingLabel>

          {/* Email */}
          <FloatingLabel controlId="floatingInput" label="Email address" className="fw-bold mb-4">
            <Form.Control
              type="email"
              placeholder="name@example.com"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`transparent-input ${errors.email ? 'is-invalid' : ''}`}
            />
            {errors.email && <div className="text-danger">{errors.email}</div>}
          </FloatingLabel>

          {/* Gender */}
          <FormControl className="mb-4">
            <FormLabel className=' fw-bold text-dark' style={{ fontFamily: 'Times New Roman, serif' }}>Gender</FormLabel>
            <RadioGroup
              row
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            >
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="other" control={<Radio />} label="Other" />
            </RadioGroup>
            {errors.gender && <div className="text-danger">{errors.gender}</div>}
          </FormControl>

          {/* Address */}
          <FloatingLabel className="fw-bold mb-4" controlId="floatingTextarea2" label="Address">
            <Form.Control
              as="textarea"
              placeholder="Leave a comment here"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className={`transparent-textarea ${errors.address ? 'is-invalid' : ''}`}
              style={{ height: '100px' }}
            />
            {errors.address && <div className="text-danger">{errors.address}</div>}
          </FloatingLabel>

          {/* Courses */}
          <Row className="g-2">
            <Col md>
              <FloatingLabel  className='fw-bold' controlId="floatingSelectGrid" label="Select course">
                <Form.Select
                  aria-label="Floating label select example"
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  className={`transparent-dropdown ${errors.course ? 'is-invalid' : ''}`}
                >
                  <option value="">Courses</option>
                  <option value="1">Biology</option>
                  <option value="2">Computer Science</option>
                  <option value="3">Commerce</option>
                  <option value="4">Humanities</option>
                </Form.Select>
                {errors.course && <div className="text-danger">{errors.course}</div>}
              </FloatingLabel>
            </Col>
          </Row>

          {/* Buttons */}
          <Stack className="mt-4" direction="row" spacing={2}>
            <Button 
              variant="outlined"
              style={{fontSize: '18px',fontWeight: 'bold',borderWidth: '2px', width: '50%', height: '70px', color:'lightblue' }}
              onClick={handleReset}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="contained"
              style={{ fontSize: '18px',fontWeight: 'bold',borderWidth: '2px', width: '50%', height: '70px' }}
              className="bg-dark"
            >
              Register
            </Button>
          </Stack>
        </form>
      </div>
    </div>
  );
}

export default App;
