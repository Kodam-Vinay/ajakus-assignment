import { Slide } from "@mui/material";
import { forwardRef } from "react";

export const API_URL = "https://jsonplaceholder.typicode.com/users";

export const API_STATUS_LIST = {
  initial: "INITIAL",
  loading: "LOADING",
  success: "SUCCESS",
  error: "ERROR",
  nodata: "NODATA",
};

export const POPUP_TYPES = {
  create: "CREATE",
  edit: "EDIT",
  delete: "DELETE",
  details: "DETAILS",
};

export const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
