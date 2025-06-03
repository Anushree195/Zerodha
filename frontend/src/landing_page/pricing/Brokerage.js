import React from 'react';
function Brokerage() {
    return ( 
        <div className="container ">
                   <div className="row p-5 mt-5 border-bottom">
          <div className="col-8 p-5 text-center border-top">
       <a href='' style={{textDecoration:"none"}}> <h4>Brokerage Calculator</h4></a>
       <ul>
        <li>Call & trades and RMS auto-square-off:Additional charges of Rs.50+GST per order.</li>
       <li> Digitial contract notes will be sent via e-mail.</li>
       <li>Physical copies of contract notes,if required ,shall be charged Rs.20 per contract note.Courier charges apply.</li> 

       </ul>
          </div>
          <div className="col-4 p-4">
         <a href='' style={{textDecoration:"none"}}> <h4 className='fs-5'>List of charges</h4></a>
          </div>

        </div>    
      </div>
     );
}

export default Brokerage;