import React, { useContext, useState } from "react";
import { Box, CircularProgress, Typography } from "@mui/material";
import useGetUsersData from "../hooks/useGetUsersData";
import AllUsers from "../components/AllUsers";
import { API_STATUS_LIST } from "../utils/constants";
import StatusContext from "../context/StatusContext";

const Main = () => {
  const { apiStatus } = useContext(StatusContext);

  const [usersData, setUsersData] = useState([]);

  useGetUsersData({
    setUsersData,
  });

  const renderUsers = () => {
    return <AllUsers usersData={usersData} />;
  };

  const renderLoader = () => {
    return (
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress />
      </Box>
    );
  };

  const renderNoUsers = () => {
    return (
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Typography>No Users Found</Typography>
      </Box>
    );
  };

  const renderFailure = () => {
    return (
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Typography>Something Error Occurred</Typography>
      </Box>
    );
  };

  const renderResults = (status) => {
    switch (status) {
      case API_STATUS_LIST.loading:
        return renderLoader();
      case API_STATUS_LIST.success:
        return renderUsers();
      case API_STATUS_LIST.failure:
        return renderFailure();
      case API_STATUS_LIST.nodata:
        return renderNoUsers();
      default:
        return null;
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          textTransform: "capitalize",
        }}
      >
        Users List
      </Typography>
      <Box
        sx={{
          height: "90vh",
          overflowY: "auto",
        }}
      >
        {renderResults(apiStatus)}
      </Box>
    </Box>
  );
};

export default Main;
