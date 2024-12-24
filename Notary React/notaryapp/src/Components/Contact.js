import React, { useState } from 'react';
import '../CSS/Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    message: ''
  });

  // const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        window.alert('Message sent successfully!');
        setFormData({
          firstname: '',
          lastname: '',
          email: '',
          message: ''
        });
      } else {
        window.alert('Error sending message!');
      }
    } catch (error) {
        window.alert('Network error!');
    }
  };

  return (
    <>
    <div className='contactpara'>
      <div className='contactpara1'>
      <strong>Contact Us</strong>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis cupiditate deserunt placeat necessitatibus a aliquam corrupti nisi odio aliquid, accusamus.</p>
      </div>
    </div>
    <div className='contactform'>
    <div className='form11'>
      {/* {status && <p>{status}</p>} */}
      <form onSubmit={handleSubmit}>
      
          <input
            type="text"
            name="firstname"
            id='firstname'
            value={formData.firstname}
            onChange={handleChange}
            placeholder='First Name'
            required
          />
        
          <input
            type="text"
            name="lastname"
            id='lastname'
            value={formData.lastname}
            onChange={handleChange}
            placeholder='Last Name'
            required
          />
        
        <br />
          <input
            type="email"
            name="email"
            id='emailinput'
            value={formData.email}
            onChange={handleChange}
            placeholder='Email address'
            required
          />
        <br />
          <textarea
            name="message"
            id='messageinput'
            value={formData.message}
            onChange={handleChange}
            placeholder='Write your message..'
            required
          />
        <br />
        <button type="submit">Send Message</button>
      </form>
    </div>
    <div className='form22'>
      <h3>Contact Info</h3>
      <span>Address:</span>
      <p>34 Street Name, City Name Here, United States</p>
      <span>Phone:</span>
      <p>+1 242 4942 290</p>
      <span>Email:</span>
      <p>info@yourdomain.com</p>

    </div>
    </div>
    </>
  )
}

export default Contact