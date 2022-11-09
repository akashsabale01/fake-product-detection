import React from "react";
import { Typography, Grid } from "@mui/material";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import DashboardCard from "../DashboardCard";

const Supplier = () => {
  return (
    <div>
      <Typography variant="h2" marginY={4} align="center" sx={{ typography: { xs: "h4", sm: "h3", md: "h2" } }} gutterBottom>
        Supplier Dashboard
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
          cardIcon={<AddBusinessIcon color="primary" sx={{ fontSize: 150 }} />}
          cardText="Add Supplier details"
          cardLink="/supplier"
        />

        <DashboardCard
          cardIcon={<ManageSearchIcon color="primary" sx={{ fontSize: 150 }} />}
          cardText="Check Product History"
          cardLink="/supplier"
        />

        <DashboardCard
          cardIcon={<VerifiedUserIcon color="primary" sx={{ fontSize: 150 }} />}
          cardText="Verify Product"
          cardLink="/supplier"
        />

        <DashboardCard
          cardIcon={
            <PersonAddAlt1Icon color="primary" sx={{ fontSize: 150 }} />
          }
          cardText="Add Customer Details"
          cardLink="/supplier"
        />
      </Grid>
    </div>
  );
};

export default Supplier;
