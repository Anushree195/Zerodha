import React from 'react';

function Education() {
  return ( 
    <div className='container mt-5'>
      <div className='row'>
          <div className='col-6'>
             <img src='media/education.svg'/>
          </div>
         
          <div className='col-6'>
          <h1 className='mb-3'>Free and open market education</h1>
            <p className='mt-5'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
            <a href=''>Varsity <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
           <br></br>
            <p>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
            <a href=''>Trading Q&A <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
              </div>
            </div>
          </div>
    
   
   );
}

export default Education ;