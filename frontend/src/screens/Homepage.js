import React, { useState, useEffect } from "react";
import { AppBar, Typography, Toolbar, Tabs, Tab, Button } from "@mui/material";
import axios from "axios";

function Homepage() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/")
      .then((response) => {
        setMessage(response.data.message);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(message);
  return (
    <div>
      <img src="./images/Lab1.jpg" alt="" />
      <AppBar sx={{ Color: "#4169e1" }}>
        <Toolbar>
          <Typography sx={{ fontSize: "1.5rem" }}>
            Laboratory Management System
          </Typography>
          <Tabs
            textColor="inherit"
            value={value}
            onChange={(e, value) => setValue(value)}
            indicatorColor="secondary"
          >
            <Tab label="Home" />
            <Tab label="About" />
            <Tab label="Contact" />
          </Tabs>

          <Button
            variant="contained"
            textColor="inherit"
            indicatorColor="secondary"
            sx={{ marginLeft: "auto" }}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Homepage;
