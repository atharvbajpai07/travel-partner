// src/components/Reviews.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Loading from './Loading';

const ReviewsContainer = styled.div`
  padding: 20px;
  text-align: center;
`;

const ReviewForm = styled.form`
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

const TextArea = styled.textarea`
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

const ReviewList = styled.div`
  margin-top: 20px;
`;

const ReviewItem = styled.div`
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-bottom: 10px;
  text-align: left;
`;

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [partner, setPartner] = useState('');
  const [rating, setRating] = useState('');
  const [comment, setComment] = useState('');

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setReviews([
        { id: 1, partner: 'John Doe', rating: 4, comment: 'Great experience!' },
        { id: 2, partner: 'Jane Smith', rating: 5, comment: 'Very helpful and friendly.' },
      ]);
      setLoading(false);
    }, 2000);
  }, []);

  const handleReview = (e) => {
    e.preventDefault();
    const newReview = { id: reviews.length + 1, partner, rating: Number(rating), comment };
    setReviews([...reviews, newReview]);
    setPartner('');
    setRating('');
    setComment('');
  };

  return (
    loading ? <Loading /> : 
    <ReviewsContainer>
      <h1>Leave a Review</h1>
      <ReviewForm onSubmit={handleReview}>
        <Input type="text" value={partner} onChange={(e) => setPartner(e.target.value)} placeholder="Partner Name" required />
        <Input type="number" value={rating} onChange={(e) => setRating(e.target.value)} placeholder="Rating (1-5)" min="1" max="5" required />
        <TextArea value={comment} onChange={(e) => setComment(e.target.value)} placeholder="Comment" required />
        <Button type="submit">Submit</Button>
      </ReviewForm>
      <h2>Partner Reviews</h2>
      <ReviewList>
        {reviews.map((review) => (
          <ReviewItem key={review.id}>
            <h3>{review.partner}</h3>
            <p>Rating: {review.rating}</p>
            <p>{review.comment}</p>
          </ReviewItem>
        ))}
      </ReviewList>
    </ReviewsContainer>
  );
}

export default Reviews;
