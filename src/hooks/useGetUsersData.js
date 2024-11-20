import { useContext, useEffect } from "react";
import { getRequest } from "../api/apiCalls";
import { API_URL } from "../utils/constants";
import StatusContext from "../context/StatusContext";

const useGetUsersData = ({ setUsersData }) => {
  const { setApiStatus, userChangeStatusSuccess } = useContext(StatusContext);

  useEffect(() => {
    getData();
  }, [userChangeStatusSuccess]);

  const getData = async () => {
    const res = await getRequest({
      setApiStatus,
      url: API_URL,
    });

    setUsersData(res);
  };
};

export default useGetUsersData;
