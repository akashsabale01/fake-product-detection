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

const SignUp = () => {
  const classes = useStyles();

  const [viewer, setViewer] = useState(false);
  const handleVisibility = () => {
    setViewer((prev) => !prev);
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

          <TextField label="Company Name" variant="outlined" fullWidth />
          <TextField label="Company Address" variant="outlined" fullWidth />
          <TextField label="Company GST No" variant="outlined" fullWidth />
          <TextField label="Company Mail" variant="outlined" fullWidth />
          <TextField label="Username" variant="outlined" fullWidth />

          <TextField
            label="Password"
            type={viewer ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end" onClick={handleVisibility}>
                  {viewer ? (
                    <VisibilityOffIcon sx={{ cursor: "pointer" }} />
                  ) : (
                    <VisibilityIcon sx={{ cursor: "pointer" }} />
                  )}
                </InputAdornment>
              ),
            }}
            fullWidth
          />

          <Button type="submit" color="primary" variant="contained" fullWidth>
            Create Account
          </Button>

          <Typography>
            Already Registered?{" "}
            <Link href="/signin" underline="hover">
              Login
            </Link>
          </Typography>
        </Stack>
      </Paper>
    </Grid>
  );
};

export default SignUp;
