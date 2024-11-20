import { Box, Typography, Button } from "@mui/material";

const EachUser = ({
  userDetails,
  handleEditUser,
  handleDeleteUser,
  handleClickFullDetails,
}) => {
  const { id, name, email, company } = userDetails;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "16px",
        marginBottom: "16px",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#fff",
        cursor: "pointer",
      }}
    >
      <Typography variant="h6" sx={{ marginBottom: "8px" }}>
        User ID: {id}
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          marginBottom: "8px",
        }}
        onClick={() => handleClickFullDetails(userDetails)}
      >
        <Typography variant="body1" sx={{ fontWeight: 600 }}>
          Name:
        </Typography>
        <Typography
          variant="body1"
          sx={{
            marginLeft: "8px",
          }}
        >
          {name}
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          marginBottom: "8px",
        }}
        onClick={() => handleClickFullDetails(userDetails)}
      >
        <Typography variant="body1" sx={{ fontWeight: 600 }}>
          Email:
        </Typography>
        <Typography
          variant="body1"
          sx={{
            marginLeft: "8px",
          }}
        >
          {email}
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          marginBottom: "16px",
        }}
        onClick={() => handleClickFullDetails(userDetails)}
      >
        <Typography variant="body1" sx={{ fontWeight: 600 }}>
          Department:
        </Typography>
        <Typography
          variant="body1"
          sx={{
            marginLeft: "8px",
          }}
        >
          {company?.bs}
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          gap: "8px",
        }}
      >
        <Button
          size="small"
          variant="contained"
          color="primary"
          onClick={() => handleEditUser(userDetails)}
          sx={{
            zIndex: 10,
          }}
        >
          Edit
        </Button>
        <Button
          size="small"
          variant="contained"
          color="error"
          onClick={() => handleDeleteUser(id)}
          sx={{
            zIndex: 10,
          }}
        >
          Delete
        </Button>
      </Box>
    </Box>
  );
};

export default EachUser;
