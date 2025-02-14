import userService from '../services/userService';
import axios from 'axios';

jest.mock('axios');

describe('userService', () => {
  it('should fetch user profile', async () => {
    const data = { name: 'John Doe' };
    axios.get.mockResolvedValue({ data });
    
    const result = await userService.getUserProfile();
    expect(result).toEqual(data);
  });

  it('should update user profile', async () => {
    const formData = new FormData();
    formData.append('name', 'John Doe');
    
    const data = { success: true };
    axios.put.mockResolvedValue({ data });
    
    const result = await userService.updateUserProfile(formData);
    expect(result).toEqual(data);
  });
});
