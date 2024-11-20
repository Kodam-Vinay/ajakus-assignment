import { createContext } from "react";
import { API_STATUS_LIST } from "../utils/constants";

const StatusContext = createContext({
  apiStatus: API_STATUS_LIST.initial,
  setApiStatus: () => {},
  userChangeStatusSuccess: false,
  setUserChangeStatusSuccess: () => {},
});
export default StatusContext;
