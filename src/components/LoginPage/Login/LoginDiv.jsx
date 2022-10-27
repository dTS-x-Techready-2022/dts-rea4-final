// Membutuhkan state untuk meng-track value dari TextField
import React, { useState, useEffect } from "react";

// Gunakan .module.css untuk mendapatkan scoped css
// import styles from "./LoginOrRegisterForm.module.css";

import { Grid, Box, Button, TextField, Typography, Stack, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";

// Karena nantinya kita bisa berpindah ke halaman LoginPage (setelah Register)
// ataupun ke halaman HomePage (setelah Login), maka kita bisa memanfaatkan useNavigate
import { useNavigate } from "react-router-dom";

import { auth, registerDenganEmailDanPassword, loginDenganEmailDanPassword } from "../../authentication/firebase";


import { useAuthState } from "react-firebase-hooks/auth";

const LoginDiv = ({ loginOrRegister }) => {
  // gunakan hooks useNavigate
  const navigate = useNavigate();

  const [credential, setCredential] = useState({
    email: "",
    password: "",
  });

  const [user, isloading] = useAuthState(auth);

  const textFieldEmailOnChangeHandler = (event) => {
    // Karena state berupa Object
    // dan state sifatnya immutable

    // maka untuk set statenya
    // menggunakan spread dan overwrite
    setCredential({
      ...credential,
      email: event.target.value,
    });
  };

  const textFieldPasswordOnChangeHandler = (event) => {
    setCredential({
      ...credential,
      password: event.target.value,
    });
  };

  const loginHandler = () => {
    // console.log("Login");
    // navigate("/");
    loginDenganEmailDanPassword(credential.email, credential.password);
  };

  const registerHandler = () => {
    // console.log("Register");
    // navigate("/login");
    registerDenganEmailDanPassword(credential.email, credential.password);
  };

  const buttonLoginOrRegisterOnClickHandler = () => {
    if (loginOrRegister === "login") {
      loginHandler();
    } else {
      registerHandler();
    }
  };

  useEffect(() => {
    // loading screen
    if (isloading) {
      // tampil screen loading
      // return;
    }
    // kalau user ada, arahkan ke halaman "/"
    if (user) {
      navigate("/home");
    }
  }, [user, isloading, navigate]);

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "95vh" }}
    >
      <Box component="form" noValidate>
        <Stack
          component="form"
          sx={{
            width: '50ch'
          }}
          spacing={2}
          noValidate
          autoComplete="off"
        >
          <Typography variant="body1" sx={{ color: 'white' }}>
            {loginOrRegister === "login" ? "Silahkan Login Disini..!" : "Register Disini..!"}
          </Typography>

          <TextField
            label="Email"
            type="email"
            variant="filled"
            sx={{ backgroundColor: 'white' }}
            size="small"
            value={credential.email}
            onChange={textFieldEmailOnChangeHandler}
          />

          <TextField
            label="password"
            type="Password"
            variant="filled"
            sx={{ backgroundColor: 'white' }}
            size="small"
            value={credential.password}
            onChange={textFieldPasswordOnChangeHandler}
          />

          <Button
            variant="contained" size="large" sx={{ backgroundColor: 'red' }}
            onClick={buttonLoginOrRegisterOnClickHandler}
          >
            {loginOrRegister === "login" ? "Login" : "Register Account"}
          </Button>

          {loginOrRegister === "login" ? (
            <Link to="/register" style={{ textDecoration: "none" }}>
              <MenuItem>
                <Typography variant="body1">Do you want Register ?</Typography>
              </MenuItem>
            </Link>
          ) : (
            <Link to="/login" style={{ textDecoration: "none" }}>
              <MenuItem>
                <Typography variant="body1">Do you want Login ?</Typography>
              </MenuItem>
            </Link>
          )}
        </Stack>
      </Box>
    </Grid>
  );
};

export default LoginDiv;
