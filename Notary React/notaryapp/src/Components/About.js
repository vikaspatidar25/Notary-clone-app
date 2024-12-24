import React from 'react'
import '../CSS/About.css';
import { Link } from 'react-router-dom';



function About() {
  return (
    <>
    <div>
      <div className="para1">
        <div className="para12">
          <strong>About Us</strong>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis cupiditate deserunt placeat necessitatibus a aliquam corrupti nisi odio aliquid, accusamus.
          </p>
        </div>
      </div>

      <section className="container21">
        <div className="">
          <img
            src="https://preview.colorlib.com/theme/notary/images/atty_1.jpg.webp"
            alt="Legal advisor 1"
          />
        </div>
        <div className="">
          <img
            src="https://preview.colorlib.com/theme/notary/images/atty_2.jpg.webp"
            alt="Legal advisor 2"
          />
        </div>
        <div className="content1">
          <h3>
            We Provide Highly <strong>Reliable & Effective</strong> Legal Solutions
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, explicabo iste a labore id est quas, doloremque veritatis! Provident odit pariatur dolorem quisquam, voluptatibus voluptates optio accusamus, vel quasi quidem!
          </p>
          <Link to="/">
            <button className="bookbtn1">Book an appointment</button>
          </Link>
        </div>
      </section>

      <div className="para3">
        <h2 className="para3h2">Meet Our Team</h2>
        <div className="cardcontainer">
          <div className="carda">
            <div className="founderimg">
              <img
                src="https://preview.colorlib.com/theme/notary/images/person_1.jpg.webp"
                alt="James Doe"
              />
            </div>
            <div className="carda1">
              <span>Founder</span>
              <h2>James Doe</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, sapiente.
              </p>
            </div>
          </div>

          <div className="carda">
            <div className="founderimg">
              <img
                src="https://preview.colorlib.com/theme/notary/images/person_2.jpg.webp"
                alt="James Doe"
              />
            </div>
            <div className="carda1">
              <span>Founder</span>
              <h2>James Doe</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, sapiente.
              </p>
            </div>
          </div>

          <div className="carda">
            <div className="founderimg">
              <img
                src="https://preview.colorlib.com/theme/notary/images/person_3.jpg.webp"
                alt="James Doe"
              />
            </div>
            <div className="carda1">
              <span>Founder</span>
              <h2>James Doe</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, sapiente.
              </p>
            </div>
          </div>
        </div>

        <div className="cardcontainer1">
          <div className="carda">
            <div className="founderimg">
              <img
                src="https://preview.colorlib.com/theme/notary/images/person_4.jpg.webp"
                alt="James Doe"
              />
            </div>
            <div className="carda1">
              <span>Founder</span>
              <h2>James Doe</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, sapiente.
              </p>
            </div>
          </div>

          <div className="carda">
            <div className="founderimg">
              <img
                src="https://preview.colorlib.com/theme/notary/images/person_5.jpg.webp"
                alt="James Doe"
              />
            </div>
            <div className="carda1">
              <span>Founder</span>
              <h2>James Doe</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, sapiente.
              </p>
            </div>
          </div>

          <div className="carda">
            <div className="founderimg">
              <img
                src="https://preview.colorlib.com/theme/notary/images/person_1.jpg.webp"
                alt="James Doe"
              />
            </div>
            <div className="carda1">
              <span>Founder</span>
              <h2>James Doe</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, sapiente.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default About