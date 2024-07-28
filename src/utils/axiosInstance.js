// // utils/axiosInstance.js
// import axios from 'axios';

// const axiosInstance = axios.create({
//   baseURL: 'http://localhost:5001',
//   withCredentials: true,
// });

// export default axiosInstance;
// utils/axiosInstance.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5001', // Adjust as per your backend base URL
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;

