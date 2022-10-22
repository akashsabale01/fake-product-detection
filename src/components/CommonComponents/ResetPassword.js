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

  const [viewer, setViewer] = useState(false);
  const handleVisibility = () => {
    setViewer((prev) => !prev);
  };

  return (
    <Grid>
      <Paper elevation={10} className={classes.paperStyle}>
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

          <TextField
            label="Confirm Password"
            type={viewer ? "text" : "password"}
            fullWidth
          />

          <Button type="submit" color="primary" variant="contained" fullWidth>
            Reset Password
          </Button>
        </Stack>
      </Paper>
    </Grid>
  );
};

export default ResetPassword;
