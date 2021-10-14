import React from 'react';
import { useSelector } from 'react-redux';
import '../css/Notification.css';

const Notification = () => {
  const message = useSelector((state) => state.notification);
  return (
    <p
      id="notification-banner"
      className={message === '' ? 'invisible' : 'alert alert-danger'}
    >
      {message}
    </p>
  );
};

export default Notification;
