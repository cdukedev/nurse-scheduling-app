// src/utils/socket.js
import { io } from 'socket.io-client';

// Replace with your actual backend server URL
const socket = io('http://localhost:4000');

export default socket;
