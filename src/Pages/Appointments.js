import React from 'react';
import Footer from "../Components/Footer";
import BookingForm from '../Components/Appointments/Booking';

const Appointments = () => {
  return (
    <>
    <div className="book">
       
        {/* <h1>Bookings</h1> */}
     
       <div className='booking'>
        <BookingForm />
       </div>
       </div>
       {/* footer */}
     <div className="fooot">
      <Footer/>
     </div>
    
    </>
  )
}

export default Appointments
