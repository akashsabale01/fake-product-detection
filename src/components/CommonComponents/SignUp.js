import React from "react";
import {
  Grid,
  Paper,
  Avatar,
  Typography,
  TextField,
  Button,
  Link,
  Stack,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

const useStyles = makeStyles({
  paperStyle: {
    padding: "20px",
    width: "400px",
    margin: "5px auto",
    borderRadius: "4px",
  },
});

const SignUp = () => {
  const classes = useStyles();

  return (
    <Grid>
      <Paper elevation={10} className={classes.paperStyle}>
        <Stack spacing={1.5}>
          <Grid align="center">
            <Avatar sx={{ bgcolor: "success.main" }}>
              <LockOutlinedIcon />
            </Avatar>

            <Typography variant="h5" gutterBottom sx={{ fontWeight: "600" }}>
              Sign Up
            </Typography>
          </Grid>

          <TextField label="Company Name" variant="outlined" fullWidth />
          <TextField label="Company Address" variant="outlined" fullWidth />
          <TextField label="Company GST No" variant="outlined" fullWidth />
          <TextField label="Company Mail" variant="outlined" fullWidth />
          <TextField label="Username" variant="outlined" fullWidth />

          <TextField
            label="Password"
            variant="outlined"
            type="password"
            fullWidth
          />

          <Button type="submit" color="primary" variant="contained" fullWidth>
            Sign Up
          </Button>

          <Typography>
            Already Registered?{" "}
            <Link href="/signin" underline="hover">
              Sign In
            </Link>
          </Typography>
        </Stack>
      </Paper>
    </Grid>
  );
};

export default SignUp;
