import { Box, Button } from "@mui/material";
import EachUser from "./EachUser";
import { useContext, useEffect, useState } from "react";
import PopupContext from "../context/PopupContext";
import { API_URL, POPUP_TYPES } from "../utils/constants";
import AddUpdateUserForm from "./AddUpdateUserForm";
import ConfirmationForm from "./ConfirmationForm";
import { deleteRequest, postRequest, updateRequest } from "../api/apiCalls";
import StatusContext from "../context/StatusContext";
import IndividualUser from "./IndividualUser";

const AllUsers = ({ usersData }) => {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    email: "",
    department: "",
  });

  const { setApiStatus, setUserChangeStatusSuccess } =
    useContext(StatusContext);

  const { togglePopupState, togglePopupType, storePopupContent, type } =
    useContext(PopupContext);

  const handleSave = async (userDetails) => {
    if (type === POPUP_TYPES.create) {
      await postRequest({
        setApiStatus,
        data: formData,
        url: API_URL,
      });
    } else {
      await updateRequest({
        setApiStatus,
        data: formData,
        url: API_URL + "/" + formData?.id,
      });
    }
    togglePopupState(false);
    setUserChangeStatusSuccess(true);
  };

  const handleDelete = async (id) => {
    await deleteRequest({
      setApiStatus,
      url: API_URL + "/" + id,
    });
    togglePopupState(false);
    setUserChangeStatusSuccess(true);
  };

  // popup

  const handleAddUser = () => {
    setFormData({});
    togglePopupState(true);
    togglePopupType(POPUP_TYPES.create);
    storePopupContent({
      title: "ADD USER",
      form: (
        <AddUpdateUserForm
          formData={formData}
          setFormData={setFormData}
          handleSave={handleSave}
        />
      ),
    });
  };

  const handleDeleteUser = (id) => {
    setFormData({
      id,
    });
    togglePopupState(true);
    togglePopupType(POPUP_TYPES.delete);
    storePopupContent({
      title: "DELETE CONFIRMATION",
      form: (
        <ConfirmationForm handleConfirmDeleteUser={() => handleDelete(id)} />
      ),
    });
  };

  const handleEditUser = (userDetails) => {
    setFormData({
      id: userDetails?.id,
      department: userDetails?.company?.bs,
      name: userDetails?.name,
      email: userDetails?.email,
    });
    togglePopupState(true);
    togglePopupType(POPUP_TYPES.edit);
    storePopupContent({
      title: "UPDATE USER",
      form: (
        <AddUpdateUserForm
          formData={formData}
          setFormData={setFormData}
          handleSave={() => handleSave(userDetails)}
        />
      ),
    });
  };

  const handleClickFullDetails = (userDetails) => {
    setFormData({
      id: userDetails?.id,
      department: userDetails?.company?.bs,
      name: userDetails?.name,
      email: userDetails?.email,
    });
    togglePopupState(true);
    togglePopupType(POPUP_TYPES.details);
    storePopupContent({
      title: "COMPLETE USER DETAILS",
      form: <IndividualUser userDetails={userDetails} />,
    });
  };

  useEffect(() => {
    storePopupContent({
      title:
        type === POPUP_TYPES.delete
          ? "DELETE CONFIRMATION"
          : type === POPUP_TYPES.details
          ? "COMPLETE USER DETAILS"
          : type === POPUP_TYPES.edit
          ? "UPDATE USER"
          : "ADD USER",
      form:
        type === POPUP_TYPES.delete ? (
          <ConfirmationForm
            handleConfirmDeleteUser={() => handleDelete(formData?.id)}
          />
        ) : type === POPUP_TYPES.details ? (
          <IndividualUser userDetails={formData} />
        ) : (
          <AddUpdateUserForm
            formData={formData}
            setFormData={setFormData}
            handleSave={handleSave}
          />
        ),
    });
  }, [formData, type]);

  return (
    <Box
      sx={{
        p: 2,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Button
        size="small"
        variant="contained"
        color="primary"
        sx={{
          marginBottom: 2,
          alignSelf: "end",
        }}
        onClick={handleAddUser}
      >
        Add +
      </Button>
      {usersData?.map((eachUser) => (
        <EachUser
          key={eachUser.id}
          userDetails={eachUser}
          handleDeleteUser={handleDeleteUser}
          handleEditUser={handleEditUser}
          handleClickFullDetails={handleClickFullDetails}
        />
      ))}
    </Box>
  );
};

export default AllUsers;
