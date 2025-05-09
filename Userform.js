import React from "react";
import { colors, Container, Grid, Typography } from "@mui/material";

const Userform = (props) => {
  return (
    <Container>
      <Grid
        container
        spacing={2}
        sx={{
          backgroundColor:'white',
          marginBottom:"30px",
          display:'block',
        }}
      >
        <Grid item xs={12}>
            <Typography component={h1} sx={{colors:'#000000'}}>User Form</Typography>

        </Grid>
        {/* Add your Grid items or content here */}
      </Grid>
    </Container>
  );
};

export default Userform;
