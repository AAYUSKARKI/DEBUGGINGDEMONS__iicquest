
import { useEffect, useRef } from 'react';
import io from 'socket.io-client';
import Peer from 'simple-peer';

const VideoChat = () => {
  const socket = useRef();
  const userVideo = useRef();
  const partnerVideo = useRef();
  let peer = useRef();

  useEffect(() => {
    socket.current = io('http://localhost:7000');

    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then(stream => {
        userVideo.current.srcObject = stream;
        peer.current = new Peer({ initiator: true, trickle: false, stream });

        peer.current.on('signal', data => {
          socket.current.emit('join-room', JSON.stringify(data));
        });

        socket.current.on('signal', data => {
          peer.current.signal(JSON.parse(data));
        });

        peer.current.on('stream', stream => {
          partnerVideo.current.srcObject = stream;
        });
      })
      .catch(err => console.error('Error accessing media devices: ', err));

    return () => {
      peer.current.destroy();
      socket.current.disconnect();
    };
  }, []);

  return (
    <div>
      <video ref={userVideo} autoPlay muted style={{ width: '50%' }}></video>
      <video ref={partnerVideo} autoPlay style={{ width: '50%' }}></video>
    </div>
  );
};

export default VideoChat;
