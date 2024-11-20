import { useState } from "react";
import Main from "./pages/Main";
import UserContext from "./context/UserContext";
import PopupContext from "./context/PopupContext";
import { API_STATUS_LIST, POPUP_TYPES } from "./utils/constants";
import Popup from "./components/Popup";
import StatusContext from "./context/StatusContext";

function App() {
  const [user, setUser] = useState(null);
  const [popupType, setPopupType] = useState(POPUP_TYPES.create);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [PopupContent, storePopupContent] = useState(null);
  const [apiStatus, setApiStatus] = useState(API_STATUS_LIST.initial);
  const [userChangeStatusSuccess, setUserChangeStatusSuccess] = useState(false);
  return (
    <StatusContext.Provider
      value={{
        apiStatus,
        setApiStatus,
        userChangeStatusSuccess,
        setUserChangeStatusSuccess,
      }}
    >
      <UserContext.Provider
        value={{
          user,
          setUser,
        }}
      >
        <PopupContext.Provider
          value={{
            isOpen: isPopupOpen,
            togglePopupState: setIsPopupOpen,
            type: popupType,
            togglePopupType: setPopupType,
            content: PopupContent,
            storePopupContent,
          }}
        >
          <Popup />
          <Main />
        </PopupContext.Provider>
      </UserContext.Provider>
    </StatusContext.Provider>
  );
}

export default App;
