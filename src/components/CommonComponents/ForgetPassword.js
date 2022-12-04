import { React, useState } from "react";
import {
  Grid,
  Paper,
  Typography,
  TextField,
  Button,
  Stack,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  paperStyle: {
    padding: "20px",
    width: "350px",
    margin: "20px auto",
    borderRadius: "4px",
  },
});

const ForgetPassword = () => {
  const classes = useStyles();

  const forgetPasswordFormInitState = { email: "" };

  const [forgetPasswordState, setForgetPasswordState] = useState(
    forgetPasswordFormInitState
  );

  const handleChange = (e) => {
    setForgetPasswordState({
      ...forgetPasswordState,
      [e.target.name]: e.target.value,
    });
  };

  const handleForgetPassword = (e) => {
    e.preventDefault();
    console.log("form values", forgetPasswordState);
    // API call here- forget password
  };

  return (
    <Grid>
      <Paper elevation={10} className={classes.paperStyle}>
        <form onSubmit={handleForgetPassword}>
          <Stack spacing={2}>
            <Typography
              variant="h5"
              gutterBottom
              align="center"
              sx={{ fontWeight: "600" }}
            >
              Forget Password
            </Typography>

            <Typography variant="body1" gutterBottom>
              Enter the email associated with your account and we'll send an
              email with instructions ot reset your password
            </Typography>

            <TextField
              name="email"
              value={forgetPasswordState.email}
              onChange={handleChange}
              label="Email"
              variant="outlined"
              fullWidth
            />

            <Button type="submit" color="primary" variant="contained" fullWidth>
              Send Instructions
            </Button>
          </Stack>
        </form>
      </Paper>
    </Grid>
  );
};

export default ForgetPassword;
