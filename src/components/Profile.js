// src/components/Profile.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { updateUserProfile } from '../redux/slices/authSlice';
import { motion } from 'framer-motion';

const ProfileContainer = styled.div`
  padding: 20px;
  text-align: center;
`;

const ProfileForm = styled.form`
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

function Profile() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const [profileData, setProfileData] = useState({
    name: user.name || '',
    email: user.email || '',
    profilePicture: user.profilePicture || '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUserProfile(profileData));
  };

  return (
    <ProfileContainer>
      <h1>Profile</h1>
      <ProfileForm onSubmit={handleSubmit}>
        <Input type="text" name="name" value={profileData.name} onChange={handleChange} placeholder="Name" required />
        <Input type="email" name="email" value={profileData.email} onChange={handleChange} placeholder="Email" required />
        <Input type="text" name="profilePicture" value={profileData.profilePicture} onChange={handleChange} placeholder="Profile Picture URL" />
        <Button type="submit">Update Profile</Button>
      </ProfileForm>
    </ProfileContainer>
  );
}

export default Profile;
