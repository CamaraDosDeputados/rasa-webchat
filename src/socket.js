import io from 'socket.io-client';

export default function (socketUrl, customData, path) {
  const options = path ? { path } : {};
  options['transports'] = ['websocket']
  const socket = io(socketUrl, options);
  socket.on('connect', () => {
    console.log(`connect:${socket.id}`);
    socket.customData = customData;
  });

  // on reconnection, reset the transports option, as the Websocket
  // connection may have failed (caused by proxy, firewall, browser, ...)
  socket.on('reconnect_attempt', () => {
    socket.io.opts.transports = ['polling', 'websocket'];
  });

  socket.on('connect_error', (error) => {
    console.log(error);
  });

  socket.on('error', (error) => {
    console.log(error);
  });

  socket.on('disconnect', (reason) => {
    console.log(reason);
  });

  return socket;
};
