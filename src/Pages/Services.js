import React from 'react';
import Footer from "../Components/Footer"
import { Link } from 'react-router-dom';



const Services = () => {
  return (
    <div className='whole'>

      <div className='services'>

         <h1>Our Services</h1>

        <div className="shopping">

            <div class="hero-section">

               <div class="card-grid">
                    
                <div className='cardprice'>
                  <Link class="card" href="#">

                   <div   className="card__background"  style={{ backgroundImage: `url("https://images.unsplash.com/photo-1677091508089-2958f18244fe?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")` }}></div>
                   <div class="card__content">
                     <p class="card__category">Waxing</p>
                     <h3 class="card__heading">Glowing Skin</h3>
                    </div>
      
                  </Link>
                     <span className='priceText'>
                      <h6>Details</h6>

                      <p>Starting at $20.00 per area, including:</p>
                           <p> Eyebrows</p>
                           <p> Upper lip</p>
                           <p> Chin</p>
                           <p>Other facial waxing services available upon request.</p>
                      </span>
                </div>

                <div className="cardprice">
                  <Link class="card" href="#">

                   <div class="card__background" style={{backgroundImage: `url(https://i.pinimg.com/enabled_lo/564x/dc/bd/3f/dcbd3fa8b7392c0c7255138d9208d639.jpg)`}}></div>
                   <div class="card__content">
                     <p class="card__category">Color & Chemical</p>
                     <h3 class="card__heading">Hue and Style</h3>
                   </div>

                  </Link>

                  <span className='priceText'>
                      <h6>Details</h6>

                      <p>Roots or single color application - starting at $100.00</p>
                           <p>Roots and ends color - starting at $130.00</p>
                           <p>Full highlight - starting at $165.00</p>
                           <p>Toner - starting at $25.00</p>
                           <p>Color correction - starting at $200.00 or charged as an hourly rate</p></span>

                </div>

                <div className="cardprice">
                 <Link class="card" href="#">

                  <div class="card__background" style={{backgroundImage: `url(https://i.pinimg.com/enabled_lo/564x/3e/fc/2c/3efc2c3415888323a820182d99ea9693.jpg)`}}></div>
                  <div class="card__content">
                    <p class="card__category">Texture & Perms</p>
                    <h3 class="card__heading">Wave and Style</h3>
                  </div>

                 </Link>

                 <span className='priceText'>
                      <h6>Details</h6>

                      <p>*All women's cut pricing is subject to change depending on length and thickness of hair</p>
                           <p> Short length at $150 </p>
                           <p>  Medium length at $150 </p>
                           <p>  Long length at $150 </p>
                           <p>*Classic permanent at $200</p>
                           <p>*Spiral permanent at $250</p>
                           </span>
                 </div>

                <div className="cardprice">
                 <Link class="card" href="#">

                  <div class="card__background" style={{backgroundImage: `url(https://i.pinimg.com/enabled_lo/564x/d6/b9/0b/d6b90b0c6e5d3015fe0779db79e9e11b.jpg)`}}></div>
                  <div class="card__content">
                    <p class="card__category">Styling & Extension</p>
                    <h3 class="card__heading">Glamour and Glow</h3>
                 </div>

                 </Link>

                 <span className='priceText'>
                      <h6>Details</h6>

                      <p>Updo - starting at $85.00</p>
                           <p>Blow dry with styling - starting at $60.00 (If hair is longer or thicker the price will be subject to change due to longer time requirements)</p>
                           <p> Hand tied extensions - priced after a consultation. Service will include custom color for the extensions.</p>
                           <p>Vivids and brights - priced after a consultation.</p>
                           <p>Brazilian blowout - starting at $350.00. (Price subject to change depending on length of hair)</p>
                    </span>
                </div>
                </div>

            </div>    

            
        </div>
     
      </div>

      {/* footer */}
        <div className="fooot">
            <Footer/>
        </div>
   
    </div>
  )
}

export default Services
