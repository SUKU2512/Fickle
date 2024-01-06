import React from 'react'
import Sfooter from './Footer.module.css';
export default function Footer() {
  return (
    <div className={Sfooter.Footer}>
        <div class="row">
            <div class='col-lg-6 col-sm-12'>
            <h2 className={Sfooter.title}>
          FickleFligh<span className={Sfooter.rotate}>t</span>
        </h2>
            <p style={{marginLeft:35,color:"white"}}>Ficle Flight is your one-stop travel portal. We offer hassle free flight and hotel bookings. We also have all your flight needs in your online shop.</p>

            </div>
            <div class='col-lg-2 col-sm-12'>
                <ul>
                    <li><b>Company</b></li>
                    <li>About Us</li>
                    <li>News</li>
                    <li>Careers</li>
                    <li>How we work</li>
                </ul>
            </div>
            <div class='col-lg-2 col-sm-12'>
            <ul>
                    <li><b>Support</b></li>
                    <li>Account</li>
                    <li>Support Center</li>
                    <li>FAQ</li>
                    <li>Accessbility</li>
                </ul>
            </div>
            <div class='col-lg-2 col-sm-12'>
            <ul>
                    <li><b>More</b></li>
                    <li>Covid Advisory</li>
                    <li>Airline Fees</li>
                    <li>Tips</li>
                    <li>Quarantine Rules</li>
                </ul>
            </div>
        </div>
    </div>
  )
}
