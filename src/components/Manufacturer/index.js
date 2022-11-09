import React from "react";
import { Typography, Grid } from "@mui/material";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DashboardCard from "../DashboardCard";

const Manufacturer = () => {
  return (
    <div>
      <Typography
        variant="h2"
        marginY={4}
        align="center"
        sx={{ typography: { xs: "h4", sm: "h3", md: "h2" } }}
        gutterBottom
      >
        Manufacturer Dashboard
      </Typography>

      <Grid
        container
        gap={2}
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{ width: "80%" }}
        my={1}
        mx={"auto"}
      >
        <DashboardCard
          cardIcon={<AddCircleIcon color="primary" sx={{ fontSize: 150 }} />}
          cardText="Add Product"
          cardLink="/manufacturer"
        />

        <DashboardCard
          cardIcon={<ManageSearchIcon color="primary" sx={{ fontSize: 150 }} />}
          cardText="Check Product History"
          cardLink="/manufacturer"
        />

        <DashboardCard
          cardIcon={<VerifiedUserIcon color="primary" sx={{ fontSize: 150 }} />}
          cardText="Verify Product"
          cardLink="/manufacturer"
        />
      </Grid>
    </div>
  );
};

export default Manufacturer;
