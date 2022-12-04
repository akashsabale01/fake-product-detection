import { React, useState } from "react";
import {
  Grid,
  Paper,
  Avatar,
  Typography,
  TextField,
  Button,
  Link,
  Stack,
  InputAdornment,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";

const useStyles = makeStyles({
  paperStyle: {
    padding: "20px",
    width: "400px",
    margin: "5px auto",
    borderRadius: "4px",
  },
});

const Register = () => {
  const classes = useStyles();

  const [showPassword, setShowPassword] = useState(false);
  const handleVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const registerFormInitState = {
    companyName: "",
    companyAddress: "",
    companyGstNo: "",
    companyMail: "",
    username: "",
    password: "",
  };

  const [registerFormState, setRegisterFormState] = useState(
    registerFormInitState
  );

  const handleChange = (e) => {
    setRegisterFormState({
      ...registerFormState,
      [e.target.name]: e.target.value,
    });
  };
  const handleRegister = (e) => {
    e.preventDefault();
    console.log("form values", registerFormState);
    // API call here- register
  };

  return (
    <Grid>
      <Paper elevation={10} className={classes.paperStyle}>
        <Stack spacing={1.5}>
          <Grid align="center">
            <Avatar sx={{ bgcolor: "success.main" }}>
              <LockOutlinedIcon />
            </Avatar>

            <Typography variant="h5" gutterBottom sx={{ fontWeight: "600" }}>
              Create Account
            </Typography>
          </Grid>

          <form onSubmit={handleRegister}>
            <Stack spacing={1.5}>
              <TextField
                name="companyName"
                value={registerFormState.companyName}
                onChange={handleChange}
                label="Company Name"
                variant="outlined"
                fullWidth
              />

              <TextField
                name="companyAddress"
                value={registerFormState.companyAddress}
                onChange={handleChange}
                label="Company Address"
                variant="outlined"
                fullWidth
              />

              <TextField
                name="companyGstNo"
                value={registerFormState.companyGstNo}
                onChange={handleChange}
                label="Company GST No"
                variant="outlined"
                fullWidth
              />

              <TextField
                name="companyMail"
                value={registerFormState.companyMail}
                onChange={handleChange}
                label="Company Mail"
                variant="outlined"
                fullWidth
              />

              <TextField
                name="username"
                value={registerFormState.username}
                onChange={handleChange}
                label="Username"
                variant="outlined"
                fullWidth
              />

              <TextField
                name="password"
                value={registerFormState.password}
                onChange={handleChange}
                label="Password"
                type={showPassword ? "text" : "password"}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end" onClick={handleVisibility}>
                      {showPassword ? (
                        <VisibilityOffIcon sx={{ cursor: "pointer" }} />
                      ) : (
                        <VisibilityIcon sx={{ cursor: "pointer" }} />
                      )}
                    </InputAdornment>
                  ),
                }}
                fullWidth
              />

              <Button
                type="submit"
                color="primary"
                variant="contained"
                fullWidth
              >
                Create Account
              </Button>
            </Stack>
          </form>

          <Typography>
            Already Registered?{" "}
            <Link href="/login" underline="hover">
              Login
            </Link>
          </Typography>
        </Stack>
      </Paper>
    </Grid>
  );
};

export default Register;
