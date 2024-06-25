// src/components/Help.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Loading from './Loading';

const HelpContainer = styled.div`
  padding: 20px;
  text-align: center;
`;

const HelpList = styled.div`
  margin-top: 20px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const HelpItem = styled.div`
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-bottom: 10px;
  text-align: left;
`;

function Help() {
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setFaqs([
        { question: 'How do I book a travel partner?', answer: 'To book a travel partner, go to the Booking page and fill out the necessary details.' },
        { question: 'What are the payment options available?', answer: 'We accept all major credit cards and online payment methods.' },
        { question: 'How do I leave a review?', answer: 'You can leave a review from the Reviews page after your travel is complete.' },
      ]);
      setLoading(false);
    }, 2000);
  }, []);

  return (
    loading ? <Loading /> : 
    <HelpContainer>
      <h1>Help and Support</h1>
      <HelpList>
        {faqs.map((faq, index) => (
          <HelpItem key={index}>
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </HelpItem>
        ))}
      </HelpList>
    </HelpContainer>
  );
}

export default Help;
