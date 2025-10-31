import React from 'react';
import { Link } from 'react-router-dom';

export default function Welcome() {
  return (
    <div>
      {/* Bootstrap CDN */}
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />

      {/* Custom CSS */}
      <style>
        {`
          body {
              text-align: center;
              background: linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%);
              min-height: 100vh;
              color: #f8f9fa;
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
              margin: 0;
              padding: 0;
          }
          .navbar {
              background: rgba(33, 37, 41, 0.95);
              backdrop-filter: blur(10px);
              padding: 12px 0;
              position: fixed;
              top: 0;
              width: 100%;
              z-index: 1030;
              box-shadow: 0 2px 10px rgba(0,0,0,0.3);
              transition: all 0.3s ease;
              height: 70px;
          }
          .navbar.scrolled {
              background: rgba(33, 37, 41, 0.98);
              padding: 8px 0;
              height: 60px;
          }
          .navbar .container {
              display: flex;
              justify-content: space-between;
              align-items: center;
              max-width: 1200px;
              margin: 0 auto;
              padding: 0 20px;
              height: 100%;
          }
          .navbar-brand {
              font-size: 1.2rem;
              font-weight: bold;
              color: #ff8a00;
              text-decoration: none;
              display: flex;
              align-items: center;
          }
          .navbar-nav {
              display: flex;
              list-style: none;
              margin: 0;
              padding: 0;
              align-items: center;
              margin-left: auto;
          }
          .nav-link {
              color: #f8f9fa;
              text-decoration: none;
              margin-left: 15px;
              font-weight: 500;
              transition: color 0.3s ease;
              padding: 8px 10px;
              border-radius: 20px;
              font-size: 0.9rem;
          }
          .nav-link:hover {
              color: #ff8a00;
              background: rgba(255, 136, 0, 0.1);
          }
          @media (max-width: 768px) {
              .navbar-nav {
                  flex-wrap: wrap;
                  justify-content: center;
                  margin-left: 0;
              }
              .nav-link {
                  margin: 5px 10px;
                  font-size: 0.9rem;
                  padding: 6px 8px;
              }
          }
          .hero {
              min-height: 100vh;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              font-size: calc(10px + 2vmin);
              padding: 2rem;
              background: rgba(33, 37, 41, 0.7);
              backdrop-filter: blur(8px);
              margin-top: 0;
              padding-top: 80px;
          }
          .welcome-text {
              font-size: 2.5rem;
              margin-bottom: 1rem;
              background: linear-gradient(90deg, #ff8a00, #e52e71);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              text-shadow: 0 2px 4px rgba(0,0,0,0.2);
          }
          .tagline {
              font-size: 1.2rem;
              opacity: 0.8;
              margin-bottom: 1rem;
              max-width: 600px;
              line-height: 1.6;
              color: #f8f9fa;
          }
          .hero-description {
              font-size: 1.1rem;
              opacity: 0.9;
              margin-bottom: 1rem;
              max-width: 500px;
              line-height: 1.6;
              color: #f8f9fa;
          }
          .hero-image {
              max-width: 100%;
              height: auto;
              border-radius: 10px;
              box-shadow: 0 8px 25px rgba(0,0,0,0.3);
              margin-top: 2rem;
              width: 100%;
              max-width: 400px;
          }
          .app-logo {
              height: 30vmin;
              pointer-events: none;
              margin-bottom: 2rem;
              filter: drop-shadow(0 4px 12px rgba(0,0,0,0.3));
          }
          @media (prefers-reduced-motion: no-preference) {
              .app-logo {
                  animation: App-logo-float infinite 3s ease-in-out;
              }
          }
          @keyframes App-logo-float {
              0% { transform: translateY(0) rotate(0deg); }
              50% { transform: translateY(-10px) rotate(5deg); }
              100% { transform: translateY(0) rotate(0deg); }
          }
          .auth-buttons {
              display: flex;
              justify-content: center;
              flex-wrap: wrap;
              gap: 15px;
              margin-bottom: 20px;
          }
          .cta-buttons {
              display: flex;
              justify-content: center;
              flex-wrap: wrap;
              gap: 15px;
          }
          .cta-button {
              background: linear-gradient(135deg, #ff8a00 0%, #e52e71 100%);
              color: white;
              border: none;
              padding: 12px 30px;
              font-size: 1.1rem;
              border-radius: 50px;
              text-decoration: none;
              font-weight: bold;
              transition: all 0.3s ease;
              box-shadow: 0 4px 15px rgba(229, 46, 113, 0.4);
          }
          .cta-button:hover {
              transform: translateY(-3px);
              box-shadow: 0 8px 20px rgba(229, 46, 113, 0.6);
          }
          .login-button {
              background: linear-gradient(135deg, #007bff 0%, #0056b3 100%);
              color: white;
              border: none;
              padding: 12px 30px;
              font-size: 1.1rem;
              border-radius: 50px;
              text-decoration: none;
              font-weight: bold;
              transition: all 0.3s ease;
              box-shadow: 0 4px 15px rgba(0, 123, 255, 0.4);
          }
          .login-button:hover {
              transform: translateY(-3px);
              box-shadow: 0 8px 20px rgba(0, 123, 255, 0.6);
          }
          .google-play-btn {
              transition: all 0.3s ease;
          }
          .google-play-btn:hover {
              transform: translateY(-2px);
              box-shadow: 0 4px 15px rgba(229, 46, 113, 0.3);
          }
          .section {
              padding: 50px 0;
              background: rgba(255, 255, 255, 0.1);
          }
          .stats-section {
              background: linear-gradient(135deg, #ff8a00 0%, #e52e71 100%);
              color: white;
          }
          .stats-card {
              border: none;
              box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
              margin-bottom: 20px;
              background: rgba(255, 255, 255, 0.2);
              border-radius: 10px;
              transition: transform 0.3s;
              color: white;
          }
          .stats-card:hover {
              transform: translateY(-5px);
          }
          .stats-icon {
              font-size: 3rem;
              margin-bottom: 1rem;
          }
          .stats-number {
              font-size: 2.5rem;
              font-weight: bold;
          }
          .card {
              border: none;
              box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
              margin-bottom: 20px;
              background: linear-gradient(135deg, #e6f4ea 0%, #f1f8ff 100%);
              border-radius: 10px;
              transition: transform 0.3s;
              color: #343a40;
          }
          .card:hover {
              transform: translateY(-5px);
          }
          .step-number {
              width: 40px;
              height: 40px;
              border-radius: 50%;
              background: linear-gradient(135deg, #ff8a00 0%, #e52e71 100%);
              color: white;
              display: flex;
              align-items: center;
              justify-content: center;
              font-weight: bold;
              font-size: 1.2rem;
              margin: 0 auto 15px;
          }
          .review-card {
              background: linear-gradient(135deg, #e6f4ea 0%, #f1f8ff 100%);
              border-radius: 10px;
              padding: 20px;
              text-align: center;
              color: #343a40;
          }
          .review-card img {
              width: 80px;
              height: 80px;
              border-radius: 50%;
              object-fit: cover;
              margin-bottom: 15px;
          }
          .review-card .stars {
              color: #ffd700;
              font-size: 1.2rem;
              margin-bottom: 10px;
          }
          .ticker {
              background: linear-gradient(90deg, #343a40 0%, #495057 100%);
              color: white;
              overflow: hidden;
              white-space: nowrap;
              padding: 12px 0;
          }
          .ticker-wrapper {
              overflow: hidden;
              white-space: nowrap;
          }
          .ticker-content {
              display: inline-block;
              animation: ticker 30s linear infinite;
          }
          @keyframes ticker {
              0% { transform: translateX(0); }
              100% { transform: translateX(-100%); }
          }
          .ticker-item {
              display: inline-block;
              padding-right: 2em;
              font-size: 1rem;
              color: #ffd700;
          }
          .faq .accordion-button {
              background-color: rgba(255, 255, 255, 0.1);
              color: #f8f9fa;
              font-weight: bold;
          }
          .faq .accordion-button:focus {
              box-shadow: none;
          }
          .faq .accordion-item {
              border-radius: 10px;
              margin-bottom: 10px;
              background: linear-gradient(135deg, #e6f4ea 0%, #f1f8ff 100%);
              color: #343a40;
          }
          .faq .accordion-button span, .faq .accordion-body span {
              color: #000000;
              font-family: 'Arial', sans-serif;
              font-size: 1rem;
              line-height: 1.6;
          }
          @media (max-width: 768px) {
              .welcome-text {
                  font-size: 2rem;
              }
              .tagline {
                  font-size: 1rem;
                  padding: 0 1rem;
              }
              .hero-description {
                  font-size: 1rem;
                  padding: 0 1rem;
              }
              .hero-image {
                  margin-top: 1rem;
                  max-width: 80%;
              }
              .app-logo {
                  height: 40vmin;
              }
              .auth-buttons .cta-button,
              .auth-buttons .login-button {
                  font-size: 1rem;
                  padding: 10px 20px;
                  margin-bottom: 15px;
              }
              .cta-button {
                  font-size: 1rem;
                  padding: 10px 20px;
                  margin-bottom: 15px;
              }
              .login-button {
                  font-size: 1rem;
                  padding: 10px 20px;
                  margin-bottom: 15px;
              }
              .google-play-btn img {
                  width: 150px;
              }
              .review-card img {
                  width: 60px;
                  height: 60px;
              }
              .stats-icon {
                  font-size: 2rem;
              }
              .stats-number {
                  font-size: 2rem;
              }
          }
          .arrow-down {
              font-size: 2rem;
              margin-bottom: 1rem;
              color: #f8f9fa;
              animation: bounce 1s infinite;
          }
          @keyframes bounce {
              0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
              40% { transform: translateY(-10px); }
              60% { transform: translateY(-5px); }
          }
        `}
      </style>

      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="container">
          <a href="#home" className="navbar-brand">
            <i className="bi bi-bar-chart-line-fill me-2"></i>
            Surveyiss
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="welcome-text">Earn Money by Sharing Your Opinions</h1>
              <p className="tagline">Join the Surveyiss panel<br />and earn up to Ksh 23,250 /month?<br />It is possible!<br />How much would you like to earn?</p>
              <p className="hero-description">Your opinions matter! Complete quick surveys and get paid instantly via M-Pesa. Join thousands of Kenyans earning from home.</p>
              <div className="arrow-down">↓</div>
              <div className="auth-buttons">
                <Link to="/register" className="cta-button">Sign Up</Link>
                <Link to="/login" className="login-button">Login</Link>
              </div>
              <div className="cta-buttons">
                <Link to="/register" className="cta-button">Up to Ksh 6,200</Link>
                <Link to="/register" className="cta-button">Up to Ksh 23,250</Link>
                <Link to="/register" className="cta-button">Ksh 23,250 and More</Link>
                {/* <a href="https://play.google.com/store/apps/details?id=com.earn.surveys.surveyiss" className="google-play-btn">
                  <img src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" alt="Get it on Google Play" style={{width: '180px'}} />
                </a> */}
              </div>
            </div>
            <div className="col-lg-6 text-center">
              <svg className="hero-image" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="surveyBg" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor:'#ffffff', stopOpacity:1}} />
                    <stop offset="100%" style={{stopColor:'#f8f9fa', stopOpacity:1}} />
                  </linearGradient>
                  <filter id="dropShadow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="3" dy="3" stdDeviation="4" floodColor="#000" floodOpacity="0.2"/>
                  </filter>
                </defs>
                {/* Survey Paper */}
                <rect x="30" y="30" width="340" height="240" fill="url(#surveyBg)" rx="15" filter="url(#dropShadow)"/>
                {/* Header */}
                <rect x="30" y="30" width="340" height="50" fill="#ff8a00" rx="15"/>
                <text x="200" y="60" textAnchor="middle" fill="#fff" fontSize="18" fontWeight="bold" fontFamily="Arial, sans-serif">SURVEY</text>
                {/* Lines */}
                <line x1="50" y1="100" x2="350" y2="100" stroke="#ddd" strokeWidth="1"/>
                <line x1="50" y1="130" x2="350" y2="130" stroke="#ddd" strokeWidth="1"/>
                <line x1="50" y1="160" x2="350" y2="160" stroke="#ddd" strokeWidth="1"/>
                <line x1="50" y1="190" x2="350" y2="190" stroke="#ddd" strokeWidth="1"/>
                <line x1="50" y1="220" x2="350" y2="220" stroke="#ddd" strokeWidth="1"/>
                {/* Checkboxes */}
                <circle cx="70" cy="105" r="8" fill="#fff" stroke="#ff8a00" strokeWidth="2"/>
                <circle cx="70" cy="135" r="8" fill="#fff" stroke="#ff8a00" strokeWidth="2"/>
                <circle cx="70" cy="165" r="8" fill="#fff" stroke="#ff8a00" strokeWidth="2"/>
                <circle cx="70" cy="195" r="8" fill="#fff" stroke="#ff8a00" strokeWidth="2"/>
                {/* Ticks */}
                <path d="M65 100 L70 105 L78 97" stroke="#ff8a00" strokeWidth="2" fill="none"/>
                <path d="M65 130 L70 135 L78 127" stroke="#ff8a00" strokeWidth="2" fill="none"/>
                {/* Text */}
                <text x="90" y="110" fill="#333" fontSize="12" fontFamily="Arial, sans-serif">Very Satisfied</text>
                <text x="90" y="140" fill="#333" fontSize="12" fontFamily="Arial, sans-serif">Satisfied</text>
                <text x="90" y="170" fill="#333" fontSize="12" fontFamily="Arial, sans-serif">Neutral</text>
                <text x="90" y="200" fill="#333" fontSize="12" fontFamily="Arial, sans-serif">Dissatisfied</text>
                {/* Money Icon */}
                <circle cx="320" cy="240" r="15" fill="#ff8a00"/>
                <text x="320" y="245" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="bold" fontFamily="Arial, sans-serif">$</text>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="section">
        <div className="container">
          <h2 className="text-center mb-5">Why Choose Surveyiss?</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="card text-center p-4">
                <i className="bi bi-lightning-charge-fill" style={{fontSize: '3rem', color: '#ff8a00'}}></i>
                <h5>Instant Payments</h5>
                <p>Get paid instantly via M-Pesa with no minimum withdrawal amount.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card text-center p-4">
                <i className="bi bi-shield-check" style={{fontSize: '3rem', color: '#28a745'}}></i>
                <h5>Secure & Trusted</h5>
                <p>Your data is protected with bank-level security. Trusted by 100,000+ users.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card text-center p-4">
                <i className="bi bi-clock" style={{fontSize: '3rem', color: '#007bff'}}></i>
                <h5>Quick Surveys</h5>
                <p>Complete surveys in just 2-5 minutes and earn Ksh 50-500 per survey.</p>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-4">
              <div className="card text-center p-4">
                <i className="bi bi-geo-alt" style={{fontSize: '3rem', color: '#e52e71'}}></i>
                <h5>Kenya Focused</h5>
                <p>Surveys tailored for Kenyan users with local brands and topics.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card text-center p-4">
                <i className="bi bi-star" style={{fontSize: '3rem', color: '#ffd700'}}></i>
                <h5>High Ratings</h5>
                <p>4.8/5 star rating from our community. Join thousands of satisfied users.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card text-center p-4">
                <i className="bi bi-cash" style={{fontSize: '3rem', color: '#20c997'}}></i>
                <h5>Multiple Rewards</h5>
                <p>Earn through surveys, referrals, and special offers. More ways to earn!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scrolling Ticker Section */}
      <section className="ticker">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="ticker-wrapper">
                <div className="ticker-content">
                  <span className="ticker-item">John from Nairobi earned Ksh 3,000 this week</span>
                  <span className="ticker-item">Mary from Mombasa earned Ksh 2,500 yesterday</span>
                  <span className="ticker-item">David from Kisumu earned Ksh 4,000 last month</span>
                  <span className="ticker-item">Sarah from Eldoret earned Ksh 2,800 this week</span>
                  <span className="ticker-item">Michael from Nakuru earned Ksh 3,500 last month</span>
                  {/* Duplicated for continuous scrolling */}
                  <span className="ticker-item">John from Nairobi earned Ksh 3,000 this week</span>
                  <span className="ticker-item">Mary from Mombasa earned Ksh 2,500 yesterday</span>
                  <span className="ticker-item">David from Kisumu earned Ksh 4,000 last month</span>
                  <span className="ticker-item">Sarah from Eldoret earned Ksh 2,800 this week</span>
                  <span className="ticker-item">Michael from Nakuru earned Ksh 3,500 last month</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="section stats-section">
        <div className="container">
          <h2 className="text-center mb-4">Our Stats</h2>
          <div className="row">
            <div className="col-md-6">
              <div className="stats-card text-center p-4">
                <i className="bi bi-clipboard-data stats-icon"></i>
                <h5>Surveys Launched</h5>
                <p className="stats-number">5,000</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="stats-card text-center p-4">
                <i className="bi bi-people stats-icon"></i>
                <h5>Registered Users</h5>
                <p className="stats-number">100,000</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="section">
        <div className="container">
          <h2 className="text-center mb-4">How It Works</h2>
          <div className="row">
            <div className="col-md-3">
              <div className="card text-center p-3">
                <div className="step-number">1</div>
                <h5>Sign Up</h5>
                <p>Join for free in under 2 minutes.</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card text-center p-3">
                <div className="step-number">2</div>
                <h5>Complete Profile</h5>
                <p>Fill out your profile to unlock surveys.</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card text-center p-3">
                <div className="step-number">3</div>
                <h5>Take Surveys</h5>
                <p>Earn points by sharing your opinions.</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card text-center p-3">
                <div className="step-number">4</div>
                <h5>Cash Out</h5>
                <p>Withdraw instantly via M-Pesa with no minimum threshold.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Earnings Potential Section */}
      <section className="section">
        <div className="container">
          <h2 className="text-center mb-4">Earnings Potential</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="card text-center p-3">
                <h5>Earn Ksh 500-3,000 Daily</h5>
                <p>Complete surveys and earn rewards from anywhere.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card text-center p-3">
                <h5>Per Survey: Ksh 50-500</h5>
                <p>Each survey pays based on length and complexity.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card text-center p-3">
                <h5>Success Stories</h5>
                <p>Michael from Nairobi earns Ksh 25,000 monthly, Susan from Nakuru earns Ksh 2,500 daily, David from Mombasa withdrew Ksh 80,000 in 3 months.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="section">
        <div className="container">
          <h2 className="text-center mb-4">What Our Users Say</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="review-card">
                <img src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&q=80" alt="Jane" />
                <h5>Jane from Nairobi</h5>
                <div className="stars">⭐⭐⭐⭐⭐</div>
                <p>"Surveyiss is amazing! I earn Ksh 2,000 weekly from short surveys, and M-Pesa payouts are instant!"</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="review-card">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&q=80" alt="Peter" />
                <h5>Peter from Mombasa</h5>
                <div className="stars">⭐⭐⭐⭐</div>
                <p>"Easy to use and great rewards. I made Ksh 3,500 last month just in my free time!"</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="review-card">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&q=80" alt="Grace" />
                <h5>Grace from Kisumu</h5>
                <div className="stars">⭐⭐⭐⭐⭐</div>
                <p>"The best survey app in Kenya! I've earned Ksh 4,000 this month, highly recommend!"</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="section faq">
        <div className="container">
          <h2 className="text-center mb-4">Frequently Asked Questions</h2>
          <div className="accordion" id="faqAccordion">
            <div className="accordion-item">
              <h2 className="accordion-header" id="faq1">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
                  <span>Is it free to join Surveyiss?</span>
                </button>
              </h2>
              <div id="collapse1" className="accordion-collapse collapse show" aria-labelledby="faq1" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                  <span>Yes, joining Surveyiss is completely free with no hidden fees.</span>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="faq2">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                  <span>How do I get paid?</span>
                </button>
              </h2>
              <div id="collapse2" className="accordion-collapse collapse" aria-labelledby="faq2" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                  <span>You can cash out instantly via M-Pesa, PayPal, or gift cards with no minimum threshold.</span>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="faq3">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                  <span>Are there any hidden fees?</span>
                </button>
              </h2>
              <div id="collapse3" className="accordion-collapse collapse" aria-labelledby="faq3" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                  <span>No, Surveyiss has no hidden fees. You keep what you earn.</span>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="faq4">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                  <span>How much can I earn?</span>
                </button>
              </h2>
              <div id="collapse4" className="accordion-collapse collapse" aria-labelledby="faq4" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                  <span>You can earn Ksh 500-3,000 daily, with top earners making up to Ksh 23,250 monthly through surveys and referrals.</span>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="faq5">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
                  <span>Is my data safe?</span>
                </button>
              </h2>
              <div id="collapse5" className="accordion-collapse collapse" aria-labelledby="faq5" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                  <span>Yes, we use bank-level security to protect your data. Your privacy is our top priority.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bootstrap JS CDN */}
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
      {/* Custom JavaScript */}
      <script>
        {`
          // Smooth scrolling for navigation links
          document.addEventListener('DOMContentLoaded', function() {
            const navLinks = document.querySelectorAll('.nav-link');
            navLinks.forEach(link => {
              link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetSection = document.getElementById(targetId);
                if (targetSection) {
                  const navbarHeight = document.querySelector('.navbar').offsetHeight;
                  const targetPosition = targetSection.offsetTop - navbarHeight - 20;
                  window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                  });
                }
              });
            });

            // Navbar scroll effect
            const navbar = document.querySelector('.navbar');
            window.addEventListener('scroll', function() {
              if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
              } else {
                navbar.classList.remove('scrolled');
              }
            });


          });
        `}
      </script>
    </div>
  );
}
