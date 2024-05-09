import * as React from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";

import Info from "./components/info";

const logoStyle = {
  width: "140px",
  height: "56px",
  marginLeft: "-4px",
  marginRight: "-8px",
};

export default function Checkout() {
  return (
    <Grid container>
      <Grid item>
        <Box>
          <Info totalPrice="$144.97" />
        </Box>
      </Grid>
    </Grid>
  );
}
