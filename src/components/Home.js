import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import './home.css';
import solana3 from './solana3.png';
import metamask from './metamask.png';
import logo2 from './photo2.png';
import aboutImage from './about.jpg'; 
import btc from './btc.png';
import guru1 from './guru1.png';
import guru2 from './guru2.png';
import guru3 from './guru3.png';
import guru4 from './guru4.png';
import guru5 from './guru5.png';
import guru6 from './guru6.png';

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status
  const [userProfile, setUserProfile] = useState(null); // State to store user profile

  useEffect(() => {
    // Simulate fetching login status and user profile
    const fetchUserData = () => {
      const user = JSON.parse(localStorage.getItem('userProfile')); // Fetching from localStorage
      if (user) {
        setIsLoggedIn(true);
        setUserProfile(user);
      }
    };
    fetchUserData();
  }, []);

  const handleLogout = () => {
    // Simulate logout
    setIsLoggedIn(false);
    setUserProfile(null);
    localStorage.removeItem('userProfile'); // Clear user data from storage
  };

  return (
    <div className="home-container" style={{ backgroundColor: '#000', color: '#ccc' }}>
      <nav>
        <h1 style={{ color: '#fff' }}>Remote Service System</h1>
        <img src={metamask} alt="MetaMask" style={{ width: '70px', height: 'auto' }} />
        <ul>
          <li><Link to="/calendar" className="link">Calendar</Link></li>
          <li><Link to="/crypto" className="link">Payments</Link></li>
          {isLoggedIn ? (
            <>
              <li><Link to="/profile" className="link">Profile</Link></li>
              <li className='login'><button onClick={handleLogout} className="link">Logout</button></li>
            </>
          ) : (
            <>
              <li><Link to="/register" className="link">Register</Link></li>
              <li className='login'><Link to="/login" className="link">Login</Link></li>
            </>
          )}
        </ul>
      </nav>

      <div className="gymworkout">
        <h1 className="workouth1">Start your work session<br />and Get Connected</h1>
        <a href="#home"><button className="workoutbtn">Get Started</button></a>
      </div>

      <div id="home">
        <div className='guru1'>
          <img src={solana3} alt="Solana" />
          <h1 className="homehead1">SAY HELLO TO THE #1 <br />SERVICE & ENTERTAINMENT<br /> PLATFORM</h1>
          <p>Unlimited access to the world’s best services, works,<br /> media and more.</p>
        </div>
      </div>

      <div className="container">
        <h1 className="heading">Our services</h1>
        <div className="box-container">
          <div className="box">
            <img src={solana3} alt="Service" />
            <h3>Video Call</h3>
            <p>© 2024 MyCompany. All rights reserved</p>
            <a href='/videocall' className='btn'>Call</a>
          </div>
          <div className="box">
            <img src={guru6} alt="Step 3" style={{ width: '100px', height: '100px' }} />
            <h3>Calendar</h3>
            <p>© 2024 MyCompany. All rights reserved</p>
            <a href='/calender' className='btn'>Calendar</a>
          </div>
          <div className="box">
            <img src={logo2} alt="Step 3" style={{ width: '150px', height: '100px' }} />
            <h3>Chat</h3>
            <p>© 2024 MyCompany. All rights reserved</p>
            <a href='http://localhost:5173' className='btn'>Chat</a>
          </div>
        </div>
      </div>

      <div className="solana">
        <h1>Pay Through Crypto Fiat!!</h1>
        <img src={btc} alt="MetaMask" style={{ width: '150px', height: 'auto' }} />
        <div style={{ marginTop: '20px' }}>
          <Link to="/crypto" className="btn" style={{ padding: '10px 20px', backgroundColor: '#0066ff', color: '#fff', borderRadius: '5px', textDecoration: 'none' }}>
            Go to Payment Page
          </Link>
        </div>
        <div className="steps-container">
          <div className="step">
            <img src={guru1} alt="Step 1" style={{ width: '100px', height: '100px' }} />
            <h3>Step 1</h3>
            <p>Create a Crypto Wallet</p>
          </div>
          <div className="step">
            <img src={guru2} alt="Step 2" style={{ width: '100px', height: '100px' }} />
            <h3>Step 2</h3>
            <p>Buy Crypto</p>
          </div>
          <div className="step">
            <img src={guru3} alt="Step 3" style={{ width: '100px', height: '100px' }} />
            <h3>Step 3</h3>
            <p>Connect Wallet</p>
          </div>
          <div className="step">
            <img src={guru4} alt="Step 4" style={{ width: '100px', height: '100px' }} />
            <h3>Step 4</h3>
            <p>Select Payment Method</p>
          </div>
          <div className="step">
            <img src={guru5} alt="Step 5" style={{ width: '150px', height: '100px' }} />
            <h3>Step 5</h3>
            <p>Confirm & Pay</p>
          </div>
        </div>
      </div>

      <div className="about-container" style={{ backgroundColor: '#111', padding: '50px 20px' }}>
        <div className="about-section">
          <h1 style={{ color: '#fff' }}>About Us</h1>
          <div className="about-content">
            <div className="about-text">
              <p>We are a team of passionate developers building innovative solutions for remote servicing. Our mission is to provide seamless, secure, and efficient remote services to clients all over the world.</p>
              <p>With expertise in blockchain, remote service providing enables businesses to offer support and solutions to clients globally without physical presence. It allows experts to troubleshoot issues, provide consultations, and manage tasks from anywhere in the world. Clients can access professional services via the internet, ensuring quick and efficient problem resolution. Remote services reduce the need for travel, saving time and resources for both providers and clients. Through remote access, technicians can directly control systems to diagnose and fix issues in real-time. Virtual meetings and video calls facilitate seamless communication and collaboration. Service providers can offer 24/7 support, enhancing customer satisfaction and loyalty. With cloud-based tools, businesses can securely share documents and data for service delivery. Remote services can scale easily, accommodating more clients without the need for additional physical infrastructure. AI, and cloud technologies, we are at the forefront of innovation.</p>
            </div>
            <div className="about-image">
              <img src={aboutImage} alt="About Us" style={{ width: '100%', borderRadius: '10px' }} />
            </div>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
        </div>
        <div className="contact-info">
          <p><FontAwesomeIcon icon={faEnvelope} /> Gurubharan.p2001@gmail.com</p>
          <p><FontAwesomeIcon icon={faPhone} /> +91 9345770249</p>
        </div>
        <div className="footer-links">
          <a href="/terms">Terms of Service</a>
          <a href="/privacy">Privacy Policy</a>
        </div>
        <div className="copyright">
          <p>&copy; 2024 MyCompany. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
