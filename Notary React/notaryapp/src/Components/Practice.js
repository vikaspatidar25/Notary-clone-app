import React from 'react'
import '../CSS/Practice.css';
import { Link } from 'react-router-dom';


function Practice() {
  return (
    <>
    <div>
      <div className="box1">
        <h1>
          <strong>Practice Areas</strong>
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis cupiditate deserunt <br />
          placeat necessitatibus a aliquam corrupti nisi odio aliquid, accusamus.
        </p>
      </div>

      <div className="bigbox">
        <div className="box2">
          <div className="box2-1">
            <div className="box2-1-1">
              <i className="fa fa-solid fa-building-columns"></i>
              <h3>Bankruptcy Law</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur <br /> adipisicing elit. Vero, laboriosam!
              </p>
            </div>
            <div className="box2-1-2">
              <i className="fa fa-solid fa-user-shield"></i>
              <h3>Business Law</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur <br /> adipisicing elit. Vero, laboriosam!
              </p>
            </div>
            <div className="box2-1-3">
              <i className="fa fa-solid fa-hand-holding-medical"></i>
              <h3>Civil Rights Law</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur <br /> adipisicing elit. Vero, laboriosam!
              </p>
            </div>
          </div>

          <div className="box2-2">
            <div className="box2-2-1">
              <i className="fa fa-solid fa-gun"></i>
              <h3>Criminal Law</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, laboriosam!
              </p>
            </div>
            <div className="box2-2-2">
              <i className="fa fa-solid fa-plane-departure"></i>
              <h3>Immigration Law</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, laboriosam!
              </p>
            </div>
            <div className="box2-2-3">
              <i className="fa fa-solid fa-house-chimney-window"></i>
              <h3>Family Law</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, laboriosam!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="box3">
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
        <div className="allnewcontent">
          <h3>
            We Provide Highly <strong>Reliable <br /> & Effective</strong> Legal Solutions
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur <br /> adipisicing elit. Repudiandae, explicabo iste a <br />
            labore id est quas, doloremque veritatis! <br /> Provident odit pariatur dolorem quisquam, <br /> voluptatibus
            voluptates optio accusamus, vel <br /> quasi quidem!
          </p>
          <Link to="/">
            <button className="book12">Book an appointment</button>
          </Link>
        </div>
      </div>
    </div>
    </>
  )
}

export default Practice