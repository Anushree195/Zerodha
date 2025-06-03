import React from 'react';
 function Hero() {
    return ( 
        <div className="container ">
       
  
        <div className="row p-5 mt-5 border-bottom text-center">
            <h1>Pricing</h1>
            <h3 className='text-muted fs-3'>Free equity investments and flat Rs.20 traday and F&O trades</h3>
            </div>

            <div className="row p-5 mt-5 border-bottom">
          <div className="col-4 p-5 text-center">
         <img src='media/pricingMF.svg'/>
         <h2 className='text-muted'>Free equity delievery</h2>
         <p>All equity delievery investments(NSE,BSE)are absolutely free-Rs.0 brokerage.</p>
          </div>
          <div className="col-4 p-5">
          <img src='media/intradayTrades.svg'/>
          <h2 className='text-muted'>Intraday And F&O trades</h2>
          <p>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
          </div>

          <div className="col-4 p-5">
          <img src='media/pricing0.svg'/>
          <h2 className='text-muted'>Free direct MF</h2>
          <p>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
          </div>
        </div>

      
        
      </div>
    );
  }
  
     
 export default Hero;