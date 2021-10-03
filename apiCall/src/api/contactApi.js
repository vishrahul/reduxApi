import axios from "axios";

export const getAllUsers = async () => {
    try {
      const users = await axios.get('https://api.covid19api.com');
      return users.data;
    } catch (err) {
      
    }
  };