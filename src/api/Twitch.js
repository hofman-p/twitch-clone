import axios from 'axios';

let api = axios.create({
  headers: {
    'Client-ID': process.env.REACT_APP_TWITCH_CLIENT_ID,
    'Authorization': `Bearer ${process.env.REACT_APP_TWITCH_ACCESS_TOKEN}`
  }
});

export default api;