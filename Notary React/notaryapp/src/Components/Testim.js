import React from 'react'
import '../CSS/Testim.css';
import { Link } from 'react-router-dom';

function Testim() {
  return (
    <>
    <div>
      <div className="container1">
        <div className="container12">
          <strong>Happy Customers Testimonials</strong>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            at quae nihil dolorem dolores quibusdam expedita
          </p>
        </div>
      </div>

      <div className="cardcollection">
        <div className="newcard">
          <div className="card1">
            <div className="cardd">
              <div>
                <img
                  src="https://preview.colorlib.com/theme/notary/images/person_2.jpg.webp"
                  alt="Portrait of Lina Gold"
                />
              </div>
              <div className="author">
                <span className="author-name">Lina Gold</span><br />
                <span className="author-post">Owner, Ford</span>
              </div>
            </div>
            <div className="author-about">
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatem, deserunt eveniet veniam. Ipsam, nam, voluptatum"
              </p>
            </div>
          </div>
          <div className="card1">
            <div className="cardd">
              <div>
                <img
                  src="https://preview.colorlib.com/theme/notary/images/person_1.jpg.webp"
                  alt="Portrait of Mike Fisher"
                />
              </div>
              <div className="author">
                <span className="author-name">Mike Fisher</span><br />
                <span className="author-post">Owner, Ford</span>
              </div>
            </div>
            <div className="author-about">
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatem, deserunt eveniet veniam. Ipsam, nam, voluptatum"
              </p>
            </div>
          </div>
          <div className="card1">
            <div className="cardd">
              <div>
                <img
                  src="https://preview.colorlib.com/theme/notary/images/person_3.jpg.webp"
                  alt="Portrait of Sheen Yu"
                />
              </div>
              <div className="author">
                <span className="author-name">Sheen Yu</span><br />
                <span className="author-post">Owner, Ford</span>
              </div>
            </div>
            <div className="author-about">
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatem, deserunt eveniet veniam. Ipsam, nam, voluptatum"
              </p>
            </div>
          </div>
        </div>

        <div className="cardsec">
          <div className="card1">
            <div className="cardd">
              <div>
                <img
                  src="https://preview.colorlib.com/theme/notary/images/person_2.jpg.webp"
                  alt="Portrait of Lina Gold"
                />
              </div>
              <div className="author">
                <span className="author-name">Lina Gold</span><br />
                <span className="author-post">Owner, Ford</span>
              </div>
            </div>
            <div className="author-about">
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatem, deserunt eveniet veniam. Ipsam, nam, voluptatum"
              </p>
            </div>
          </div>
          <div className="card1">
            <div className="cardd">
              <div>
                <img
                  src="https://preview.colorlib.com/theme/notary/images/person_1.jpg.webp"
                  alt="Portrait of Mike Fisher"
                />
              </div>
              <div className="author">
                <span className="author-name">Mike Fisher</span><br />
                <span className="author-post">Owner, Ford</span>
              </div>
            </div>
            <div className="author-about">
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatem, deserunt eveniet veniam. Ipsam, nam, voluptatum"
              </p>
            </div>
          </div>
          <div className="card1">
            <div className="cardd">
              <div>
                <img
                  src="https://preview.colorlib.com/theme/notary/images/person_3.jpg.webp"
                  alt="Portrait of Sheen Yu"
                />
              </div>
              <div className="author">
                <span className="author-name">Sheen Yu</span><br />
                <span className="author-post">Owner, Ford</span>
              </div>
            </div>
            <div className="author-about">
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatem, deserunt eveniet veniam. Ipsam, nam, voluptatum"
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="cont2">
        <div>
          <img
            src="https://preview.colorlib.com/theme/notary/images/atty_1.jpg.webp"
            alt="Attorney Image 1"
          />
        </div>
        <div>
          <img
            src="https://preview.colorlib.com/theme/notary/images/atty_2.jpg.webp"
            alt="Attorney Image 2"
          />
        </div>
        <div className="content">
          <h3>
            We Provide Highly <strong>Reliable & Effective</strong> Legal
            Solutions
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Repudiandae, explicabo iste a labore id est quas, doloremque
            veritatis! Provident odit pariatur dolorem quisquam, voluptatibus
            voluptates optio accusamus, vel quasi quidem!
          </p>
          <Link to="/">
            <button className="bookbtn">Book an appointment</button>
          </Link>
        </div>
      </div>
    </div>
    </>
  )
}

export default Testim