
import React from 'react'
import './footer.scss';
import icon from '../../../public/icon.png';
import emailIcon from '../../../public/emailIcon.svg';
import facebook from '../../../public/facebook.svg';
import twitter from '../../../public/twitter.svg';
import instagram from '../../../public/instagram.svg';
function Footer(props) {
  return (
    <>
      <div className="div">
        <div className="div-2">
          <div className="div-3">
            <div className="column">
              <div className="div-4">
                <div className="div-5">
                  <img
                    className="mainIcon"
                    src={icon} 
                  />
                  <div className="div-6">E-flight</div>
                </div>
                <div className="div-7">
                  <div className="div-8">
                    <div className="div-9">
                      <img
                       
                       src={emailIcon} 
                        className="img-2"
                      />
                     
                      <input className="emailInput" type="text" id="text" placeholder='Input your email'/>
                    </div>
                  </div>
                  <button className="suscribeButton">Subscribe</button>
                </div>
              </div>
            </div>
            <div className="column-2">
              <div className="div-12">
                <div className="div-13">
                  <div className="footerAbout">About us</div>
                  <div className="footerHowToBook">How to book</div>
                  <div className="footerHelp">Help center</div>
                </div>
                <div className="div-17">
                  <div className="div-19">© 2022 Company, Inc. • Privacy • Terms</div>
                  
                </div>
              </div>
            </div>
            <div className="column-3">
              <div className="div-23">
                <div className="footerFlight">Flight</div>
                <div className="footerBooking">Booking easily</div>
                <div className="footerPromotions">Promotions</div>
              </div>
            </div>
            <div className="column-4">
              <div className="div-27">
                <div className="footerContactUs">Contact us</div>
                <div className="div-29">
                  <img
                    src={facebook} 
                    className="socialIcon"
                  />
                  <img
                    src={twitter} 
                    className="socialIcon"
                  />
                  <img
                    src={instagram} 
                    className="socialIcon"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}




export default Footer;