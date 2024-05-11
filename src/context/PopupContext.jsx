import { useContext, useState, createContext } from 'react';

const PopupContext = createContext();

export function PopupProvider({ children }) {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [trailerData, setTrailerData] = useState([]);

  function showPopup(data) {
    document.body.style.overflowY = 'hidden';
    setPopupVisible(true);
    setTrailerData(data);
  }

  function hidePopup() {
    document.body.style.overflowY = 'auto';
    setPopupVisible(false);
  }

  return (
    <PopupContext.Provider
      value={{
        isPopupVisible,
        showPopup,
        hidePopup,
        trailerData,
      }}
    >
      {children}
    </PopupContext.Provider>
  );
}

export function usePopup() {
  return useContext(PopupContext);
}
