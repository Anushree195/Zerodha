import React from 'react';
function Stats() {
    return ( 
      <div className='container p-5'>
        <div className='row p-5'>
            <div className='col-6 p-5'> 
               <h1>Trust with confidence</h1> 
               <h3>Customer-first always</h3>
               <p className='text-muted'>That's why 1.3+crore customers trust Zerodha with RS.3.5+lakh crores worth of equity investments</p>
               <br></br>

               <h3>No Spam or gimmicks</h3>
               <p className='text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
                    <br></br>

                <h3>The Zerodha universe</h3> 
                <p className='text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p> 
                <br></br>  

                <h3>Do better with money</h3>
                <p className='text-muted'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
              

            </div>
            <div className='col-6'> 
                <img src='media/ecosystem.png' style={{width:"100%"}}/>
           
            <div className='text-center'>
            <a href='' className='mx-5'>Explore our products <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
            <a href=''>Try demo  <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
            </div>
            </div>
        </div>
      </div>
     );
}

export default Stats;