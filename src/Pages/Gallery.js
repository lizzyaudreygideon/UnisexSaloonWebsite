import React from 'react';
import Footer from "../Components/Footer"

import UniGallery from '../Components/OurGALLERY/OurGallery';

const Gallery = () => {
  return (
    <>
    <div className='Gallery-Container'>

         

     
         <h1 className='gallery-heading'>Explore</h1>
         <div>
         <UniGallery />
         </div>
    </div>
       {/* footer */}
       <div className="fooot">
      <Footer/>
     </div>
    </>
  )
}

export default Gallery
