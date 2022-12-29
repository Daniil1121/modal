import React, { useEffect, useState } from "react";

interface IProps {
  setIsOpen: React.Dispatch<boolean>;
  setCompleted: React.Dispatch<boolean>;
}

const Modal: React.FC<IProps> = ({ setIsOpen, setCompleted }) => {
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    let interval = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);
    if (countdown < 1) clearInterval(interval);
    return () => clearInterval(interval);
  }, [countdown]);

  const closeModal = () => {
    setIsOpen(false);
  };

  const confirmModal = () => {
    setCompleted(true);
    closeModal();
  };

  return (
    <div className="modal__wrapper">
      <div className="modal__container">
        <div onClick={closeModal} className="modal__close">
          &#10010;
        </div>
        <h2 className="modal__title">Согласие с правилами</h2>
        <p className="modal__text">
          Для данной функции применяются особые условия и правила пользования,
          их необходимо подтвердить, нажав на кнопку Подтвердить
        </p>
        <div className="modal__btns-container">
          <button onClick={() => setIsOpen(false)} className="btn btn-cancel">
            Отмена
          </button>
          <button
            onClick={confirmModal}
            disabled={!!countdown}
            className="btn btn-confirm"
          >
            Подтвердить{countdown ? ` (${countdown})` : ""}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
