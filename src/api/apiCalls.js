import axios from "axios";
import { API_STATUS_LIST } from "../utils/constants";

export const getRequest = async ({ setApiStatus, url }) => {
  try {
    setApiStatus(API_STATUS_LIST.loading);
    const response = await axios.get(url);
    if (response.status === 200) {
      if (response.data) {
        setApiStatus(API_STATUS_LIST.success);
      } else {
        setApiStatus(API_STATUS_LIST.nodata);
      }
    } else {
      setApiStatus(API_STATUS_LIST.error);
    }
    return response.data;
  } catch (error) {
    setApiStatus(API_STATUS_LIST.error);
  }
};

export const deleteRequest = async ({ setApiStatus, url }) => {
  try {
    setApiStatus(API_STATUS_LIST.loading);
    const response = await axios.delete(url);
    if (response.status === 200) {
      if (response.data) {
        setApiStatus(API_STATUS_LIST.success);
      } else {
        setApiStatus(API_STATUS_LIST.nodata);
      }
    } else {
      setApiStatus(API_STATUS_LIST.error);
    }
    return response.data;
  } catch (error) {
    setApiStatus(API_STATUS_LIST.error);
  }
};

export const updateRequest = async ({ setApiStatus, url, data }) => {
  try {
    setApiStatus(API_STATUS_LIST.loading);
    const response = await axios.put(url, JSON.stringify(data), {
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status === 200) {
      if (response.data) {
        setApiStatus(API_STATUS_LIST.success);
      } else {
        setApiStatus(API_STATUS_LIST.nodata);
      }
    } else {
      setApiStatus(API_STATUS_LIST.error);
    }
    return response.data;
  } catch (error) {
    setApiStatus(API_STATUS_LIST.error);
  }
};

export const postRequest = async ({ setApiStatus, url, data }) => {
  try {
    setApiStatus(API_STATUS_LIST.loading);
    const response = await axios.post(url, JSON.stringify(data), {
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status === 201) {
      if (response.data) {
        setApiStatus(API_STATUS_LIST.success);
      } else {
        setApiStatus(API_STATUS_LIST.nodata);
      }
    } else {
      setApiStatus(API_STATUS_LIST.error);
    }
    return response.data;
  } catch (error) {
    setApiStatus(API_STATUS_LIST.error);
  }
};
