import React from "react";
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

  return (
    <Grid>
      <Paper elevation={10} className={classes.paperStyle}>
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
            Enter the email associated with your account and we'll send an email
            with instructions ot reset your password
          </Typography>

          <TextField label="Email" variant="outlined" fullWidth />

          <Button type="submit" color="primary" variant="contained" fullWidth>
            Send Instructions
          </Button>
        </Stack>
      </Paper>
    </Grid>
  );
};

export default ForgetPassword;
