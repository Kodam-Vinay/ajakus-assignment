import { Box, TextField, Button } from "@mui/material";
import { useEffect, useRef } from "react";

const AddUpdateUserForm = ({ handleSave, formData, setFormData }) => {
  const nameInputRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSave();
  };

  useEffect(() => {
    if (nameInputRef.current) {
      nameInputRef.current.focus();
    }
  }, [nameInputRef]);

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
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
      <TextField
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        variant="outlined"
        fullWidth
        required
      />

      <TextField
        label="Email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        variant="outlined"
        fullWidth
        type="email"
        required
      />

      <TextField
        label="Department"
        name="department"
        value={formData.department}
        onChange={handleChange}
        variant="outlined"
        fullWidth
        required
      />

      <Button type="submit" variant="contained" color="primary" fullWidth>
        Save
      </Button>
    </Box>
  );
};

export default AddUpdateUserForm;
