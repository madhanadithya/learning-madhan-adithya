import React, { useState } from "react";
import { AppBar, Toolbar, Button, Dialog, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import profilePic from "../background-image/bg16.png";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "#004d00", height: 80 }}>
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              width: 60,
              height: 60,
              borderRadius: "50%",
              overflow: "hidden",
              marginLeft: 20,
              cursor: "pointer",
              marginTop: 10,
            }}
            onClick={handleClickOpen}
          >
            <img
              src={profilePic}
              alt="Profile"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>

          <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
            <div style={{ display: "flex", gap: 20 }}>
              <Button color="inherit" component={Link} to="/">
                Home
              </Button>

              {/* <Button color="inherit" component={Link} to="/products">
                Product List
              </Button>
              <Button color="inherit" component={Link} to="/create">
                Create Product
              </Button> */}

              <Button color="inherit" component={Link} to="/upload">
                Upload
              </Button>
            </div>
          </div>
        </Toolbar>
      </AppBar>

      <Dialog open={open} onClose={handleClose} maxWidth="xs" fullWidth>
        <div style={{ position: "relative", textAlign: "center" }}>
          <IconButton
            onClick={handleClose}
            style={{ position: "absolute", right: 0, top: 0, color: "black" }}
          >
            <CloseIcon />
          </IconButton>
          <img
            src={profilePic}
            alt="Profile"
            style={{
              width: "100%",
              height: "auto",
              maxHeight: "80vh",
              objectFit: "contain",
            }}
          />
        </div>
      </Dialog>
    </>
  );
};

export default Navbar;
