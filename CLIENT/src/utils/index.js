// socket.js
import { io } from 'socket.io-client'

// Create a singleton instance of the socket
const Socket = io('https://chat-backend-for-deploy.onrender.com')

export default Socket