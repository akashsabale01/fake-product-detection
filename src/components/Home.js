import React from "react";
import { Typography, Grid } from "@mui/material";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import FactoryIcon from "@mui/icons-material/Factory";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DashboardCard from "./DashboardCard";

const Home = () => {
  return (
    <div>
      <Typography variant="h2" marginTop={3} align="center">
        Blockchain Powered Supply Chain
      </Typography>

      <Typography variant="h4" marginTop={8} gutterBottom align="center">
        Who are you?
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
          cardIcon={<FactoryIcon color="primary" sx={{ fontSize: 150 }} />}
          cardText="Manufacturer"
          cardLink="/manufacturer"
        />

        <DashboardCard
          cardIcon={
            <LocalShippingIcon color="primary" sx={{ fontSize: 150 }} />
          }
          cardText="Supplier"
          cardLink="/supplier"
        />

        <DashboardCard
          cardIcon={
            <AccountCircleIcon color="primary" sx={{ fontSize: 150 }} />
          }
          cardText="Customer"
          cardLink="/customer"
        />
      </Grid>
    </div>
  );
};

export default Home;
