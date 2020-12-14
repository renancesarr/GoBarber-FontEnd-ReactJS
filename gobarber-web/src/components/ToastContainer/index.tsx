import React from 'react';

import { Conatiner } from './style';

import { ToastMessage } from '../../hooks/ToastContext';
import Toast from './Toast';

interface ToastContainerProps {
  messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  return (
    <Conatiner>
      {messages.map(message => (
        <Toast key={message.id} message={message} />
      ))}
    </Conatiner>
  );
};

export default ToastContainer;
