import React from "react";
import useStyles from "./dashboardCardStyles";
import { Typography, IconButton, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";

const DashboardCard = (props) => {
  const classes = useStyles();
  return (
    <>
      <Stack
        className={classes.category}
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={0.5}
      >
        <span>{props.cardIcon}</span>

        <Typography variant="h6" align="center">
          {props.cardText}
        </Typography>

        <Link to={props.cardLink}>
          <IconButton>
            <ArrowCircleRightOutlinedIcon color="info" fontSize="large" />
          </IconButton>
        </Link>
      </Stack>
    </>
  );
};

export default DashboardCard;
