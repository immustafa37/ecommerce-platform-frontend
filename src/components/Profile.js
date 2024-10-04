import React, { useEffect, useState } from 'react';
import { getUserProfile } from '../services/userService';
import { getToken } from '../utils/tokenStorage';

const Profile = () => {
  const [user, setUser] = useState(null);

  const fetchUserProfile = async () => {
    const token = getToken();
    if (token) {
      const data = await getUserProfile(token);
      setUser(data);
    }
  };

  useEffect(() => {
    fetchUserProfile();
  }, []);

  return (
    <div>
      <h2>User Profile</h2>
      {user ? (
        <div>
          <h3>{user.name}</h3>
          <p>Email: {user.email}</p>
          {/* Add more user info as needed */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Profile;

