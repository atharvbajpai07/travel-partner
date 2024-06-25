// src/components/Home.js
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import { fetchPartners } from '../api/partners';

const HomeContainer = styled.div`
  padding: 20px;
  text-align: center;
`;

const DetailContainer = styled.div`
  margin-top: 20px;
  text-align: left;
`;

const FormContainer = styled.div`
  margin-top: 20px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 10px;
  font-size: 16px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: ${(props) => props.theme.colors.primary};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
  }
`;

const NavButton = styled(Link)`
  display: inline-block;
  padding: 10px 20px;
  background-color: ${(props) => props.theme.colors.secondary};
  color: white;
  text-decoration: none;
  border-radius: 5px;
  margin: 10px;
  font-size: 16px;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
  }
`;

const PartnerList = styled.div`
  margin-top: 20px;
`;

const PartnerItem = styled.div`
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-bottom: 10px;
  text-align: left;
`;

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

function Home() {
  const user = useSelector((state) => state.auth.user);
  const role = useSelector((state) => state.auth.role);
  const [transport, setTransport] = useState('');
  const [people, setPeople] = useState(1);
  const [dates, setDates] = useState('');
  const [age, setAge] = useState('');
  const [partners, setPartners] = useState([]);

  const handleSearch = async () => {
    const partnersData = await fetchPartners({ transport, people, dates, age });
    setPartners(partnersData);
  };

  return (
    <HomeContainer>
      <h1>Welcome to Travel Partner</h1>
      {user ? (
        <div>
          <p>You are logged in as {role}</p>
          {role === 'customer' && (
            <FormContainer as={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
              <h2>Travel Details</h2>
              <FormLabel>Mode of Transportation</FormLabel>
              <Select value={transport} onChange={(e) => setTransport(e.target.value)}>
                <option value="">Select Mode</option>
                <option value="flight">Flight</option>
                <option value="bus">Bus</option>
                <option value="train">Train</option>
                <option value="car">Car</option>
              </Select>
              <FormLabel>Number of People Traveling</FormLabel>
              <Input type="number" value={people} onChange={(e) => setPeople(e.target.value)} min="1" />
              <FormLabel>Dates of Traveling</FormLabel>
              <Input type="date" value={dates} onChange={(e) => setDates(e.target.value)} />
              <FormLabel>Age</FormLabel>
              <Input type="number" value={age} onChange={(e) => setAge(e.target.value)} min="0" />
              <Button onClick={handleSearch}>Search Partners</Button>
            </FormContainer>
          )}
          {partners.length > 0 && (
            <PartnerList>
              <h2>Available Partners</h2>
              <Slider {...settings}>
                {partners.map((partner, index) => (
                  <PartnerItem key={index}>
                    <h3>{partner.name}</h3>
                    <p>{partner.description}</p>
                    <p><strong>Contact:</strong> {partner.contact}</p>
                  </PartnerItem>
                ))}
              </Slider>
            </PartnerList>
          )}
          <NavButton to="/booking">Bookings</NavButton>
          <NavButton to="/reviews">Reviews</NavButton>
          <NavButton to="/messaging">Messaging</NavButton>
          <NavButton to="/help">Help</NavButton>
        </div>
      ) : (
        <p>Please log in to view your profile.</p>
      )}
    </HomeContainer>
  );
}

export default Home;
