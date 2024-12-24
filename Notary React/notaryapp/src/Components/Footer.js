import React from 'react'
import '../CSS/Footer.css';
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <>
     <div class="footer1st">
        <div class="footer">
            <div class="footer1">
             <h2>About Us</h2>
             <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
             <div class="sociali">
                <div><Link tLink=""><i class="fa-brands fa-facebook-f"></i></Link></div>
                <div><Link tLink=""><i class="fa-brands fa-instagram"></i></Link></div>
                <div><Link tLink=""><i class="fa-brands fa-twitter"></i></Link></div>
                <div><Link tLink=""><i class="fa-brands fa-linkedin"></i></Link></div>
                
             </div>
            </div>
            <div class="footer2">
                <div class="footer2a">
                    <h2>Quick Links</h2>
                    <ul>
                        <Link to=""><li>About Us</li></Link>
                        <Link to=""><li>Testimonials</li></Link>
                        <Link to=""><li>Terms of Service</li></Link>
                        <Link to=""><li>Privacy</li></Link>
                        <Link to=""><li>Contact Us</li></Link>
                    </ul>
                </div>
                <div>
                    <div class="footer2a">
                        <h2>Resources</h2>
                        <ul>
                            <Link to=""><li>About Us</li></Link>
                            <Link to=""><li>Testimonials</li></Link>
                            <Link to=""><li>Terms of Service</li></Link>
                            <Link to=""><li>Privacy</li></Link>
                            <Link to=""><li>Contact Us</li></Link>
                        </ul>
                    </div>
                </div>
                <div>
                    <div class="footer2a">
                        <h2>Support</h2>
                        <ul>
                            <Link to=""><li>About Us</li></Link>
                            <Link to=""><li>Testimonials</li></Link>
                            <Link to=""><li>Terms of Service</li></Link>
                            <Link to=""><li>Privacy</li></Link>
                            <Link to=""><li>Contact Us</li></Link>
                        </ul>
                    </div>
                </div>
                <div>
                    <div class="footer2a">
                        <h2>Company</h2>
                        <ul>
                            <Link to=""><li>About Us</li></Link>
                            <Link to=""><li>Testimonials</li></Link>
                            <Link to=""><li>Terms of Service</li></Link>
                            <Link to=""><li>Privacy</li></Link>
                            <Link to=""><li>Contact Us</li></Link>
                        </ul>
                    </div>
                </div>

            </div>
         

        </div>
       <hr/>
       <div class="footerend"><p>Copyright ©2024 All rights reserved | This template is made with  by <i class="fa-solid fa-heart"></i> <Link to="">Vikas Patidar</Link></p></div>
    </div>
    </>
  )
}

export default Footer