import { Box, Button, Dialog, DialogContent, DialogTitle } from "@mui/material";
import { useContext } from "react";
import { Close as CloseIcon } from "@mui/icons-material";
import PopupContext from "../context/PopupContext";
import { POPUP_TYPES, Transition } from "../utils/constants";

const Popup = () => {
  const { isOpen, togglePopupState, type, content } = useContext(PopupContext);

  const handleClose = () => {
    togglePopupState(false);
  };

  return (
    <Dialog
      open={isOpen}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
      fullWidth
      sx={{
        "& .MuiDialog-paper": {
          margin: "2px",
          width: "100%",
          padding: 1,
          maxWidth: type === POPUP_TYPES.delete ? "324px" : "700px",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          maxWidth: "100%",
          marginBottom: 2,
        }}
      >
        <DialogTitle
          sx={{
            flex: 1,
            padding: 0,
          }}
        >
          {content?.title}
        </DialogTitle>
        <Button
          onClick={handleClose}
          sx={{
            minWidth: "auto",
            padding: 0,
          }}
        >
          <CloseIcon
            sx={{
              color: "red",
              transition: "transform 0.3s ease-in-out",
              "&:hover": {
                transform: "rotate(90deg)",
              },
            }}
          />
        </Button>
      </Box>
      <DialogContent
        sx={{
          padding: 0,
        }}
      >
        {content?.form}
      </DialogContent>
    </Dialog>
  );
};

export default Popup;
