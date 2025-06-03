import React from 'react';
function Hero() {
    return ( 
        <section className='container-fluid'id="supportHero">
           
            <div className=' p-5 ' id="supportWrapper">
                <h4>Support Portal</h4>
                <a href="">Track Tickets</a>
            </div>

            <div className='row p-3 m-3'>
            <div className='col-6 p-5'>
                <h2 className="fs-3">Search for an answer or browse help topics to create a ticket</h2>
                <input placeholder='how do i activate F&O'/><br></br>
                <a href="">Track account opening</a>
                <a href="">Track segment activatation</a>
                <a href="">Intraday activatation</a>
                <a href="">kite user manual</a>
            </div>
            <div className='col-6 p-3 '>
                <h2 className="fs-4">Featured</h2>
                <a href="">Current takeovers and delisting-Jan 2024</a>
                <a href="">latest Intraday leverages-MIS &CO </a>
            </div>
                <h4>Support Portal</h4>
                <a href="">Track Tickets</a>
            </div>
            </section>
     );
}

export default Hero;