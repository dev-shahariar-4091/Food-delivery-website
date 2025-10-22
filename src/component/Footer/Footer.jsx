
import { assets } from '../../assets/assets';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                  <div className="footer-content-left">
                     <img src={assets.logo} alt="" />
                     <p className='px-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium perferendis deserunt aut obcaecati harum quam nesciunt quo. Vel, laudantium vero ullam ea beatae soluta ab.</p>
                      <div className="footer-social-icons flex">
                         <img src={assets.facebook_icon} alt="" />
                         <img src={assets.twitter_icon} alt="" />
                         <img src={assets.linkedin_icon} alt="" />
                      </div>
                  </div>
                   <div className="footer-content-center">
                          <h2>Company</h2>
                          <ul>
                            <li>Home</li>
                            <li>About Us</li>
                            <li>Privacy policy</li>
                          </ul>
                   </div>
                  <div className="footer-content-right">
                       <h2>GET IN TOUCH</h2>
                       <ul>
                        <li>0199123564365</li>
                        <li>contact.tomoto@gmail.com</li>
                       </ul>
                  </div>
            </div>
            
        </div>
    );
};

export default Footer;