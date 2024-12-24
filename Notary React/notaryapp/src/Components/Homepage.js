import React, { useState } from 'react';
import '../CSS/Homepage.css';
import { Link } from 'react-router-dom';


function Homepage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    selectdate: ''
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/appoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        window.alert('Appointment booked successfully!');
        setFormData({
          name: '',
          email: '',
          selectdate: ''
        });
      } else {
        window.alert('Error booking appointment');
      }
    } catch (error) {
        window.alert('Network error!');
    }
  };

  return (
    <>
    <div className="container2">
        <div className="container2-1">
          <h1>
            <strong>Notary Public</strong> & <br /> Legal Solutions
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />
            Veritatis cupiditate deserunt placeat necessitatibus a aliquam
            <br />
            corrupti nisi odio aliquid, accusamus.
          </p>
        </div>
        <div className="container2-2" id='bookappointment'>
      <h3>Book an Appointment</h3>
      <form onSubmit={handleSubmit}>
          <br/>
          <input
            id='nameinput'
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder='Name'
            required
          />
        
        <br />
           <br/>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder='Email'

            required
          />
        <br />
        <label>
          Select Date
          </label>
          <br/>
          <input
          type="date"
            name="selectdate"
            value={formData.selectdate}
            onChange={handleChange}
            
          />
        <br />
        <button type="submit">Book Appointment</button>
      </form>
        </div>
      </div>

      <div className="container-big">
        <div className="container3">
          <h2>
            <strong>Practice</strong> Areas
          </h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>

        <div className="container4">
          <div className="container4-1">
            <div className="container4-1-1">
              <i className="fa fa-solid fa-building-columns"></i>
              <h3>Bankruptcy Law</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur <br /> adipisicing elit. Vero, laboriosam!
              </p>
            </div>
            <div className="container4-1-2">
              <i className="fa fa-solid fa-user-shield"></i>
              <h3>Business Law</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur <br /> adipisicing elit. Vero, laboriosam!
              </p>
            </div>
            <div className="container4-1-3">
              <i className="fa fa-solid fa-hand-holding-medical"></i>
              <h3>Civil Rights Law</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur <br /> adipisicing elit. Vero, laboriosam!
              </p>
            </div>
          </div>

          <div className="container4-2">
            <div className="container4-2-1">
              <i className="fa fa-solid fa-gun"></i>
              <h3>Criminal Law</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, laboriosam!</p>
            </div>
            <div className="container4-2-2">
              <i className="fa fa-solid fa-plane-departure"></i>
              <h3>Immigration Law</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, laboriosam!</p>
            </div>
            <div className="container4-2-3">
              <i className="fa fa-solid fa-house-chimney-window"></i>
              <h3>Family Law</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, laboriosam!</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container5">
        <div>
          <img
            src="https://preview.colorlib.com/theme/notary/images/atty_1.jpg.webp"
            alt="Attorney 1"
          />
        </div>
        <div>
          <img
            src="https://preview.colorlib.com/theme/notary/images/atty_2.jpg.webp"
            alt="Attorney 2"
          />
        </div>
        <div className="newcontent">
          <h3>
            We Provide Highly <strong>Reliable <br /> & Effective</strong> Legal Solutions
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur <br /> adipisicing elit. Repudiandae, explicabo iste a
            <br /> labore id est quas, doloremque veritatis! <br /> Provident odit pariatur dolorem quisquam,
            <br /> voluptatibus voluptates optio accusamus, vel <br /> quasi quidem!
          </p>
          <Link to="#bookappointment">
            <button className="book">Book an appointment</button>
          </Link>
        </div>
      </div>

      <div className="happy">
        <strong>Happy Customers</strong>
      </div>

      <div className="cardnew">
        <div className="card1">
          <div className="cardd">
            <div>
              <img
                src="https://preview.colorlib.com/theme/notary/images/person_2.jpg.webp"
                alt="Lina Gold"
              />
            </div>
            <div className="author">
              <span className="author-name">Lina Gold</span>
              <br />
              <span className="author-post">Owner, Ford</span>
            </div>
          </div>
          <div className="author-about">
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, deserunt eveniet veniam.
              Ipsam, nam, voluptatum"
            </p>
          </div>
        </div>

        <div className="card1">
          <div className="cardd">
            <div>
              <img
                src="https://preview.colorlib.com/theme/notary/images/person_1.jpg.webp"
                alt="Mike Fisher"
              />
            </div>
            <div className="author">
              <span className="author-name">Mike Fisher</span>
              <br />
              <span className="author-post">Owner, Ford</span>
            </div>
          </div>
          <div className="author-about">
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, deserunt eveniet veniam.
              Ipsam, nam, voluptatum"
            </p>
          </div>
        </div>

        <div className="card1">
          <div className="cardd">
            <div>
              <img
                src="https://preview.colorlib.com/theme/notary/images/person_3.jpg.webp"
                alt="Sheen Yu"
              />
            </div>
            <div className="author">
              <span className="author-name">Sheen Yu</span>
              <br />
              <span className="author-post">Owner, Ford</span>
            </div>
          </div>
          <div className="author-about">
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, deserunt eveniet veniam.
              Ipsam, nam, voluptatum"
            </p>
          </div>
        </div>
      </div>

      <div className="container6">
        <div className="container6-1">
          <img
            src="https://preview.colorlib.com/theme/notary/images/atty_2.jpg.webp"
            alt="Attorney Image"
          />
        </div>
        <div className="container6-2">
          <h2>
            We Have <strong> Legal <br /> Solutions </strong>
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur <br /> adipisicing elit. Quisquam reprehenderit
            <br /> perspiciatis iste culpa consequuntur consequatur <br /> eum, voluptatum, quod deserunt maiores?
          </p>
          <p>
            Modi perferendis ipsa ducimus consequuntur <br /> excepturi autem, numquam facere aperiam iste
            <br /> nam molestias provident consectetur molestiae <br /> voluptatibus ipsum. Fugiat, quas.
          </p>
          <ul>
            <li>
              <i className="fa-solid fa-check"></i>Aperiam iste nam molestias
            </li>
            <li>
              <i className="fa-solid fa-check"></i>Modi perferendis ipsa
            </li>
            <li>
              <i className="fa-solid fa-check"></i>Perspic iste culpa
            </li>
          </ul>
        </div>
        <div className="container6-3">
      <div className="container6-3-1">
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            How to download and register?
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <Link className="dropdown-item" to="#">
                Anim pariatur cliche reprehenderit, enim <br />
                eiusmod high life accusamus terry <br />
                richardson ad squid. 3 wolf moon officia <br />
                aute, non cupidatat skateboard dolor <br />
                brunch. Food truck quinoa nesciunt <br />
                laborum eiusmod. Brunch 3 wolf moon <br />
                tempor, sunt aliqua put a bird on it squid <br />
                single-origin coffee nulla assumenda <br />
                shoreditch et.
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="container6-3-2">
        <div className="dropdown">
          <button
            className="good btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton2"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            How to create your PayPal account?
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton2">
            <li>
              <Link className="dropdown-item" to="#">
                Anim pariatur cliche reprehenderit, enim <br />
                eiusmod high life accusamus terry <br />
                richardson ad squid. 3 wolf moon officia <br />
                aute, non cupidatat skateboard dolor <br />
                brunch. Food truck quinoa nesciunt <br />
                laborum eiusmod. Brunch 3 wolf moon <br />
                tempor, sunt aliqua put a bird on it squid <br />
                single-origin coffee nulla assumenda shoreditch et.
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="container6-3-3">
        <div className="dropdown">
          <button
            className="good btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton3"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            How to link your PayPal and bank account?
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton3">
            <li>
              <Link className="dropdown-item" to="#">
                Anim pariatur cliche reprehenderit, enim <br />
                eiusmod high life accusamus terry <br />
                richardson ad squid. 3 wolf moon officia <br />
                aute, non cupidatat skateboard dolor <br />
                brunch. Food truck quinoa nesciunt <br />
                laborum eiusmod. Brunch 3 wolf moon <br />
                tempor, sunt aliqua put a bird on it squid <br />
                single-origin coffee nulla assumenda <br />
                shoreditch et.
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
      </div>
    <div/>
    </>
  )
}

export default Homepage;