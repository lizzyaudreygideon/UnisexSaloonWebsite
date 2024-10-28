import React from 'react';
import Footer from "../Components/Footer"

const Gallery = () => {
  return (
    <div>

       <div className="ourSpace">

        <h1>Our Space</h1>

       </div>

       <div className="ourProducts">

       <h1>Products</h1>

       </div>

       <div className="tutorials">

       <h1>DIY</h1>

       </div>

       {/* footer */}
     <div className="fooot">
      <Footer/>
     </div>
    </div>
  )
}

export default Gallery
