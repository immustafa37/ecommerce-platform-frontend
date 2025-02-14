import React, { useState, useEffect } from 'react';
import userService from '../services/userService';

const Profile = () => {
  const [user, setUser] = useState({});
  const [newProfilePic, setNewProfilePic] = useState(null);

  useEffect(() => {
    async function fetchUserProfile() {
      try {
        const userData = await userService.getUserProfile();
        setUser(userData);
      } catch (error) {
        console.error('Error fetching profile', error);
      }
    }
    fetchUserProfile();
  }, []);

  const handleProfileUpdate = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    if (newProfilePic) formData.append('profilePicture', newProfilePic);

    try {
      await userService.updateUserProfile(formData);
      // Optionally refresh user profile data
    } catch (error) {
      console.error('Error updating profile', error);
    }
  };

  return (
    <div>
      <h2>{user.name}'s Profile</h2>
      <img src={user.profilePicture} alt="Profile" />
      <form onSubmit={handleProfileUpdate}>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setNewProfilePic(e.target.files[0])}
        />
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
};

export default Profile;
