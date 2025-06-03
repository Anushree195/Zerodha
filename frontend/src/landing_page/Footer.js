import React from 'react';

function Footer() {
  return ( 
    <div className="container border-top mt-5">
      <div className="row mt-5">
        <div className="col">
         <img src="/media/logo.svg" alt="Zerodha Logo" style={{ width: "50%" }} />

          <p>&copy; 2010-2024, Not Zerodha Broking Ltd. All rights reserved.</p>
        </div>

        <div className="col">
          <p>Company</p>
          <a href="#">Products</a><br />
          <a href="#">Pricing</a><br />
          <a href="#">Referral programme</a><br />
          <a href="#">Careers</a><br />
          <a href="#">Zerodha.tech</a><br />
          <a href="#">Open source</a><br />
          <a href="#">Press & media</a><br />
          <a href="#">Zerodha Cares (CSR)</a><br />
        </div>

        <div className="col">
          <p>Support</p>
          <a href="#">Contact us</a><br />
          <a href="#">Support portal</a><br />
          <a href="#">Z-Connect blog</a><br />
          <a href="#">List of charges</a><br />
          <a href="#">Downloads & resources</a><br />
          <a href="#">Videos</a><br />
          <a href="#">Market overview</a><br />
          <a href="#">How to file a complaint?</a><br />
          <a href="#">Status of your complaints</a><br />
        </div>

        <div className="col">
          <p>Account</p>
          <a href="#">Open an account</a><br />
          <a href="#">Transfer Funding</a>
        </div>

        <div className="mt-5 text-small text-muted">
          <p>
            Zerodha Broking Ltd.: Member of NSE, BSE & MCX – SEBI Registration no.: INZ000031633...
          </p>
          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES portal...
          </p>
          <p>Smart Online Dispute Resolution | Grievances Redressal Mechanism</p>
          <p>
            Investments in securities market are subject to market risks...
          </p>
          <p>
            Attention investors: 1) Stock brokers can accept securities...
          </p>
          <p>
            Prevent unauthorised transactions in your account...
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
