// src/components/Profile.js
import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const ProfileContainer = styled.div`
  padding: 20px;
`;

function Profile() {
  const user = useSelector((state) => state.auth.user);

  return (
    <ProfileContainer>
      <h1>Profile Page</h1>
      {user ? (
        <div>
          <p>Email: {user}</p>
          <p>Role: User</p>
        </div>
      ) : (
        <p>Please log in to view your profile.</p>
      )}
    </ProfileContainer>
  );
}

export default Profile;
