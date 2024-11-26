

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Modal from 'react-modal';
import { Button, TextField, Select, MenuItem, Typography, FormControl, InputLabel } from '@mui/material';
import './AppoitmentBooking.css';


const AppointmentBooking = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [bookedSlots, setBookedSlots] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    appointment_date: new Date(),
    appointment_time: '10:00', // Default time to 10:00 AM
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    Modal.setAppElement('body');
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleDateChange = async (date) => {
    setFormData({
      ...formData,
      appointment_date: date,
    });
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/booked-slots`, {
        params: { date: date.toISOString().split('T')[0] },
      });
      setBookedSlots(response.data.map(slot => slot.appointment_time));
    } catch (error) {
      console.error('Error fetching booked slots:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/book-appointment`, {
        ...formData,
        appointment_date: formData.appointment_date.toISOString().split('T')[0],
        appointment_time: formData.appointment_time
      });
      console.log('Appointment booked successfully:', response.data);
      setIsSubmitted(true); // Show popup after successful submission
      setModalIsOpen(false); // Close modal after successful submission
      setError(null);
    } catch (error) {
      console.error('Error booking appointment:', error);
      if (error.response && error.response.data.message) {
        setError(error.response.data.message);
      } else {
        setError("Failed to book appointment. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const closePopup = () => {
    setIsSubmitted(false);
    setError(null);
  };

  return (
    <div>
      <Button onClick={() => setModalIsOpen(true)} variant="contained" color="primary">
        Schedule a Call
      </Button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Schedule a Call"
        className="modal-content"
        // style={{
        //   content: {
        //     width: '100%',
        //     top: "80px",
        //     maxWidth: '600px',
        //     margin: 'auto',
        //     padding: '1rem',
        //   },
        // }}
      >
        <Typography variant="h6" gutterBottom>
          Schedule a Call
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            fullWidth
            margin="normal"
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            fullWidth
            margin="normal"
          />
          <TextField
            label="Company Name"
            name="company"
            value={formData.company}
            onChange={handleChange}
            required
            fullWidth
            margin="normal"
          />
           {/* <FormControl fullWidth margin="normal">
           <InputLabel>Select Date</InputLabel>
          <DatePicker
            selected={formData.appointment_date}
            onChange={handleDateChange}
            minDate={new Date()}
            filterDate={(date) => date.getDay() !== 0} // No Sundays
            dateFormat="yyyy-MM-dd"
            customInput={<TextField fullWidth />}
          />
          </FormControl> */}


<FormControl fullWidth margin="normal">
            {/* <InputLabel>Select Date</InputLabel> */}
            <DatePicker
              selected={formData.appointment_date}
              onChange={handleDateChange}
              minDate={new Date()}
              filterDate={(date) => date.getDay() !== 0} // No Sundays
              dateFormat="yyyy-MM-dd"
              customInput={
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Select Date"
                  InputLabelProps={{ shrink: true }}
                />
              }
            />
          </FormControl>


          <FormControl fullWidth margin="normal">
          <Select
            name="appointment_time"
            value={formData.appointment_time}
            onChange={handleChange}
            fullWidth
            margin="normal"
          >
            {['10:00:00', '11:00:00', '12:00:00', '13:00:00', '14:00:00', '15:00:00', '16:00:00', '17:00:00'].map((appointment_time) => (
              <MenuItem 
                key={appointment_time} 
                value={appointment_time} 
                disabled={bookedSlots.includes(appointment_time)}
              >
                {appointment_time} {bookedSlots.includes(appointment_time) ? '(Not Available)' : ''}
              </MenuItem>
            ))}
          </Select>
          </FormControl>
          <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: '1rem' }} disabled={isLoading}>
            {isLoading ? <span className="loader"></span> : 'Submit'}
          </Button>
        </form>
      </Modal>

      {isSubmitted && (
        <div className="popup">
          <div className="popup-inner">
            <h2>Appointment Booked Successfully</h2>
            <p>Thank you for scheduling a call! Please check your email for the confirmation.</p>
            <Button variant="contained" color="primary" onClick={closePopup}>
              Close
            </Button>
          </div>
        </div>
      )}
      {error && (
        <div className="popup">
          <div className="popup-inner">
            <h2>Error Booking Appointment</h2>
            <p>{error}</p>
            <Button variant="contained" color="primary" onClick={closePopup}>
              Close
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AppointmentBooking;


