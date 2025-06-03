import React from 'react';

 function Team() {
    return ( 
        <div className="container">
      <div className="row p-5 mb-5 border-top">
        <h1 className=" text-center ">
         People
        </h1>
      </div>

      <div className="row p-5 border-top text-muted fs-6">
        <div className="col-6 p-5">
         <img
  src="/media/Anushree%20Image.jpg"
  style={{ borderRadius: "100%", width: "50%" }}
  alt="Anushree Sindagi"
/>
<h4 className="mt-5">Anushree Sindagi</h4>
<h5>Founder, CEO</h5>

        </div>
        <div className="col-6 p-5">
       <p> Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>

<p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).

Playing basketball is his zen.</p>

<p>Connect on <a href=''>HomePage</a>/<a href=''>TradingQnA </a> /<a href=''>Twitter</a></p>
        </div>
      </div>
      
      
    </div>
     );
 }
 
 export default Team;