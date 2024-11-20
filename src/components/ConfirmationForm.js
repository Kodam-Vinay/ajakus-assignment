import { Box, Button, Typography } from "@mui/material";
import { useContext } from "react";
import PopupContext from "../context/PopupContext";

const ConfirmationForm = ({ handleConfirmDeleteUser }) => {
  const { togglePopupState } = useContext(PopupContext);
  const handleCancel = () => {
    togglePopupState(false);
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        maxWidth: 400,
        margin: "auto",
        padding: 3,
        border: "1px solid #ddd",
        borderRadius: "8px",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#fff",
      }}
    >
      <Typography variant="h5" fontWeight="600">
        Are you sure you want to delete this User?
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Button
          variant="contained"
          color="primary"
          onClick={handleCancel}
          fullWidth
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          color="error"
          onClick={handleConfirmDeleteUser}
          fullWidth
        >
          Delete
        </Button>
      </Box>
    </Box>
  );
};

export default ConfirmationForm;
