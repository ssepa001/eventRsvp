import React, { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Fade, Input } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const RegisterModal = ({ handleInput, userList }) => {
  const [invitee, setInvitee] = useState("");
  const [number, setNumber] = useState("");
  const [open, setOpen] = React.useState(true);

  const handleOpen = () => setOpen(true);
  const handleClose = (event, reason) => {
    if (reason && reason == "backdropClick") return;
    setOpen(false);
  };
  const checkNumber = (event) => {
    const input = event.target.value;
    setNumber(input);
    const match = userList.filter((user) => user.phone === input);
    if (match.length > 0) {
      handleInput(input);
      setInvitee(match[0].name);
    } else setInvitee("");
  };
  return (
    <div>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        open={open}
        onClose={handleClose}
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="spring-modal-title" variant="h6">
              Please enter your phone number to see your invitation
            </Typography>
            <Input
              type="text"
              placeholder="ie. 2092447845"
              value={number}
              onChange={checkNumber}
              style={{ display: "inline-block" }}
              onKeyUp={(event, reason) => {
                if (event.key === "Enter" && invitee) {
                  handleClose(event, reason);
                }
              }}
            />
            <Typography
              id="spring-modal-description"
              sx={{ mt: 2 }}
              style={{ paddingLeft: "20px", display: "inline-block" }}
            >
              {invitee && `Invitation for ${invitee}`}
            </Typography>
            <Box>
              <Button
                variant="contained"
                color="primary"
                style={{ marginTop: "20px" }}
                disabled={invitee ? false : true}
                onClick={handleClose}
              >
                Confirm
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default RegisterModal;
