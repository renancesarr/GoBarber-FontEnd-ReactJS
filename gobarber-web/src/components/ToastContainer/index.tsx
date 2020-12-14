import React from 'react';
import { FiAlertCircle, FiXCircle } from 'react-icons/fi';
import { Conatiner, Toast } from './style';

const ToastContainer: React.FC = () => {
  return (
    <Conatiner>
      <Toast hasDescription>
        <FiAlertCircle size={20} />

        <div>
          <strong> Aconteceu um erro</strong>
          <p>Não foi possivel fazer login na aplicacao</p>
        </div>

        <button type="button">
          <FiXCircle size={18} />
        </button>
      </Toast>
      <Toast type="success" hasDescription>
        <FiAlertCircle size={20} />

        <div>
          <strong> Aconteceu um erro</strong>
          <p>Não foi possivel fazer login na aplicacao</p>
        </div>

        <button type="button">
          <FiXCircle size={18} />
        </button>
      </Toast>
      <Toast type="error" hasDescription={false}>
        <FiAlertCircle size={20} />

        <div>
          <strong> Aconteceu um erro</strong>
        </div>

        <button type="button">
          <FiXCircle size={18} />
        </button>
      </Toast>
    </Conatiner>
  );
};

export default ToastContainer;
