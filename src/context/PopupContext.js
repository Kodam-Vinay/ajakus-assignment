import { createContext } from "react";
import { POPUP_TYPES } from "../utils/constants";

const PopupContext = createContext({
  type: POPUP_TYPES.NONE,
  togglePopupType: () => {},
  isOpen: false,
  togglePopupState: () => {},
  content: null,
  storePopupContent: () => {},
});
export default PopupContext;
