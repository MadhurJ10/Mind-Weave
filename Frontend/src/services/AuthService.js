import ApiClient from './ApiClient';

export const getToken = async () => {
  return localStorage.getItem('token');
};

export const fetchUserDetails = async () => {
  const token = await getToken(); // ✅ await here
  if (!token) return null;

  try {
    const response = await ApiClient.post(
      '/auth/getuser',
      {}, // ✅ empty body since it's a POST
      {
        headers: { Authorization: `Bearer ${token}` }, // ✅ correct header format
      }
    );
    return response.data; // ✅ return only the data
  } catch (error) {
    throw error;
  }
};
