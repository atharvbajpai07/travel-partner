// src/components/Booking.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Loading from './Loading';

const BookingContainer = styled.div`
  padding: 20px;
  text-align: center;
`;

const BookingList = styled.div`
  margin-top: 20px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const BookingItem = styled.div`
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-bottom: 10px;
  text-align: left;
`;

function Booking() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setBookings([
        { id: 1, partner: 'John Doe', date: '2023-06-01', status: 'Confirmed' },
        { id: 2, partner: 'Jane Smith', date: '2023-06-15', status: 'Pending' },
      ]);
      setLoading(false);
    }, 2000);
  }, []);

  return (
    loading ? <Loading /> : 
    <BookingContainer>
      <h1>Your Bookings</h1>
      <BookingList>
        {bookings.map((booking) => (
          <BookingItem key={booking.id}>
            <h3>{booking.partner}</h3>
            <p>Date: {booking.date}</p>
            <p>Status: {booking.status}</p>
          </BookingItem>
        ))}
      </BookingList>
    </BookingContainer>
  );
}

export default Booking;
