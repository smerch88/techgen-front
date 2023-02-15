import axios from 'axios';

export const roadMapsInstance = axios.create({
  baseURL: 'https://63e0f76559bb472a742d424b.mockapi.io/roadmaps',
});

export const developmentInstance = axios.create({
  baseURL: 'https://63da6331b28a3148f685e7c7.mockapi.io/api/v1/developments',
});

export const blogInstance = axios.create({
  baseURL: 'https://63cecea06d27349c2b76151b.mockapi.io/blogs',
});
