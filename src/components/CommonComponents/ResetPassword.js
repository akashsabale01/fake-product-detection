import { React, useState } from "react";
import {
  Grid,
  Paper,
  Typography,
  TextField,
  Button,
  Stack,
  InputAdornment,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";

const useStyles = makeStyles({
  paperStyle: {
    padding: "20px",
    width: "350px",
    margin: "20px auto",
    borderRadius: "4px",
  },
});

const ResetPassword = () => {
  const classes = useStyles();

  const [showPassword, setShowPassword] = useState(false);
  const handleVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const resetPasswordFormInitState = { password: "", confirmPassword: "" };

  const [resetPasswordState, setResetPasswordState] = useState(
    resetPasswordFormInitState
  );

  const handleChange = (e) => {
    setResetPasswordState({
      ...resetPasswordState,
      [e.target.name]: e.target.value,
    });
  };

  const handleResetPassword = (e) => {
    e.preventDefault();
    console.log("form values", resetPasswordState);
    // API call here- reset password
  };

  return (
    <Grid>
      <Paper elevation={10} className={classes.paperStyle}>
        <form onSubmit={handleResetPassword}>
          <Stack spacing={3}>
            <Typography
              variant="h5"
              gutterBottom
              align="center"
              sx={{ fontWeight: "600" }}
            >
              Reset Password
            </Typography>

            <Typography variant="body1" gutterBottom>
              Your new password must be different from previous used passwords.
            </Typography>

            <TextField
              name="password"
              value={resetPasswordState.password}
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

            <TextField
              name="confirmPassword"
              value={resetPasswordState.confirmPassword}
              onChange={handleChange}
              label="Confirm Password"
              type={showPassword ? "text" : "password"}
              fullWidth
            />

            <Button type="submit" color="primary" variant="contained" fullWidth>
              Reset Password
            </Button>
          </Stack>
        </form>
      </Paper>
    </Grid>
  );
};

export default ResetPassword;
