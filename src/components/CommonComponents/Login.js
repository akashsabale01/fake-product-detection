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
    width: "350px",
    margin: "20px auto",
    borderRadius: "4px",
  },
});

const Login = () => {
  const classes = useStyles();

  const [viewer, setViewer] = useState(false);
  const handleVisibility = () => {
    setViewer((prev) => !prev);
  };

  return (
    <Grid>
      <Paper elevation={10} className={classes.paperStyle}>
        <Stack spacing={2}>
          <Grid align="center">
            <Avatar sx={{ bgcolor: "success.main" }}>
              <LockOutlinedIcon />
            </Avatar>

            <Typography variant="h5" gutterBottom sx={{ fontWeight: "600" }}>
              Login
            </Typography>
          </Grid>

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
            Login
          </Button>

          <Typography>
            <Link href="/forgetpassword" underline="hover">
              Forget Password?
            </Link>
          </Typography>

          <Typography>
            Don't have an account?{" "}
            <Link href="/register" underline="hover">
              Create Acoount
            </Link>
          </Typography>
        </Stack>
      </Paper>
    </Grid>
  );
};

export default Login;
