import axios from 'axios';

// Replace with your actual API key
const API_KEY = 'CG-24hucHitCdja4UvUepQogxTV';

const axiosInstance = axios.create({
  baseURL: 'https://api.coingecko.com/api/v3', // Replace with your API base URL
  headers: {
    'accept': 'application/json',
    'x-cg-demo-api-key': API_KEY,
  },
});

export default axiosInstance;
