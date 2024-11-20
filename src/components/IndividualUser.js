import React from "react";
import { Typography, Card, CardContent } from "@mui/material";

const IndividualUser = ({ userDetails }) => {
  const { id, name, email, department } = userDetails;

  return (
    <Card
      sx={{
        maxWidth: 400,
        margin: "16px auto",
        boxShadow: 3,
        borderRadius: "8px",
        backgroundColor: "#f9f9f9",
      }}
    >
      <CardContent>
        <Typography
          variant="h6"
          component="div"
          sx={{
            fontWeight: "bold",
            marginBottom: 1,
            color: "#333",
          }}
        >
          User ID: {id}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            marginBottom: 1,
            color: "#555",
          }}
        >
          <strong>Name:</strong> {name}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            marginBottom: 1,
            color: "#555",
          }}
        >
          <strong>Email:</strong> {email}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: "#555",
          }}
        >
          <strong>Department:</strong> {department}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default IndividualUser;
