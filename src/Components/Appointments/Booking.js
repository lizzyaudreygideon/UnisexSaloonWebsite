import React, { useState } from 'react';
import { db } from '../firebaseConfig'; //  Firebase config file
import { collection, addDoc } from 'firebase/firestore';
import './BookingForm.css';
import { Link } from 'react-router-dom';

const BookingForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    totalGuests: '',
    date: '',
    timeOfDay: '',
    fullName: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    if (step === 1 && !formData.totalGuests) {
      newErrors.totalGuests = 'Please select number of guests';
    }
    
    if (step === 2) {
      if (!formData.date) newErrors.date = 'Please select a date';
      if (!formData.timeOfDay) newErrors.timeOfDay = 'Please select time of day';
    }
    
    if (step === 3) {
      if (!formData.fullName) newErrors.fullName = 'Name is required';
      if (!formData.email) {
        newErrors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Please enter a valid email';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const nextStep = () => {
    if (validateForm()) {
      setStep(prev => prev + 1);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        setIsLoading(true);
        // Add the booking to Firestore
        const bookingsCollection = collection(db, 'bookings');
        await addDoc(bookingsCollection, {
          ...formData,
          createdAt: new Date(),
          status: 'pending'
        });

        setIsSubmitted(true);
      } catch (error) {
        console.error('Error submitting booking:', error);
        alert('Failed to submit booking. Please try again.');
      } finally {
        setIsLoading(false);
      }
    }
  };

  if (isSubmitted) {
    return (
      <div className="success-message">
        <p>
          Your booking request was sent successfully. Thanks! We'll be in touch as soon as we can, 
          which is usually like lightning :).
        </p>
        <Link to="/">Back To Home</Link>
      </div>
    );
  }

  return (
    <div className="booking-form">
      {/* Progress Bar */}
      <div className="progress-wrap">
        <div className="line-progress-bar">
          <div className="Bookingline"></div>
          <div className="progress-dots">
            <ul>
              {[1, 2, 3].map((num) => (
                <li 
                  key={num} 
                  className={`progressbar-dots ${step >= num ? 'active' : ''}`}
                >
                  <span>{num === 1 ? 'step 1' : num === 2 ? 'step 2' : 'Final step'}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <form>
        {/* Step 1 -  */}
        <div className={`tab-pane ${step === 1 ? 'active' : ''}`}>
          <div className="form-group">
            <label>How many are you?</label>
            <select
              name="totalGuests"
              value={formData.totalGuests}
              onChange={handleChange}
            >
              <option value="">Select</option>
              {[...Array(12)].map((_, i) => (
                <option key={i + 1} value={i + 1}>{i + 1}</option>
              ))}
              <option value="more">More</option>
            </select>
            {errors.totalGuests && <span className="error">{errors.totalGuests}</span>}
          </div>
          <button type="button" className="next-btn" onClick={nextStep}>
            Next
          </button>
        </div>

        {/* Step 2  */}
        <div className={`tab-pane ${step === 2 ? 'active' : ''}`}>
          <div className="form-group">
            <label>Which date and time are you looking to book on?</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />
            {errors.date && <span className="error">{errors.date}</span>}
          </div>

          <div className="form-group">
            <label>Which time of day?</label>
            <select
              name="timeOfDay"
              value={formData.timeOfDay}
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option value="morning">Morning</option>
              <option value="midday">Midday</option>
              <option value="late_afternoon">Late afternoon, ending with a sunset</option>
            </select>
            {errors.timeOfDay && <span className="error">{errors.timeOfDay}</span>}
          </div>

          <button type="button" className="next-btn" onClick={nextStep}>
            Next
          </button>
        </div>

        {/* Step 3 */}
        <div className={`tab-pane ${step === 3 ? 'active' : ''}`}>
          <div className="form-group">
            <label>What is your first and last name?</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
            />
            {errors.fullName && <span className="error">{errors.fullName}</span>}
          </div>

          <div className="form-group">
            <label>Which email address should we send your invoice estimate to?</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div> 

          <div className="form-group">
            <label>Do you have any questions or a message? (Optional)</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <button 
            type="button" 
            className="submit-btn" 
            onClick={handleSubmit}
            disabled={isLoading}
          >
            {isLoading ? 'Submitting...' : 'Make a Booking'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;