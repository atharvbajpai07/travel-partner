// src/components/Search.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Loading from './Loading';

const SearchContainer = styled.div`
  padding: 20px;
  text-align: center;
`;

const SearchForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: auto;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const Select = styled.select`
  margin-bottom: 10px;
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 16px;
  background-color: ${(props) => props.theme.colors.primary};
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
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

function Search() {
  const [query, setQuery] = useState('');
  const [transport, setTransport] = useState('');
  const [partners, setPartners] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setPartners([
        { name: 'John Doe', rating: 4.5, reviews: 20, fee: 50 },
        { name: 'Jane Smith', rating: 4.0, reviews: 15, fee: 40 },
      ]);
      setLoading(false);
    }, 2000);
  };

  return (
    loading ? <Loading /> : 
    <SearchContainer>
      <h1>Search for a Travel Partner</h1>
      <SearchForm onSubmit={handleSearch}>
        <Input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search by name" />
        <Select value={transport} onChange={(e) => setTransport(e.target.value)}>
          <option value="">Select Mode</option>
          <option value="flight">Flight</option>
          <option value="bus">Bus</option>
          <option value="train">Train</option>
          <option value="car">Car</option>
        </Select>
        <Button type="submit">Search</Button>
      </SearchForm>
      {partners.length > 0 && (
        <PartnerList>
          <h2>Available Partners</h2>
          {partners.map((partner, index) => (
            <PartnerItem key={index}>
              <h3>{partner.name}</h3>
              <p>Rating: {partner.rating}</p>
              <p>Reviews: {partner.reviews}</p>
              <p>Fee: ${partner.fee}/day</p>
            </PartnerItem>
          ))}
        </PartnerList>
      )}
    </SearchContainer>
  );
}

export default Search;
