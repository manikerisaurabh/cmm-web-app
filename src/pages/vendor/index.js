import React from "react";
import { Container, Grid, Card, CardContent, Typography, Button } from "@mui/material";


// Vendor Dashboard
export default function VendorDashboard() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>Vendor Dashboard</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Manage Products</Typography>
              <Typography variant="body2">Add, edit, and remove your products.</Typography>
              <Button variant="contained" color="primary" sx={{ mt: 2 }}>Manage Products</Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Manage Orders</Typography>
              <Typography variant="body2">Track your store's incoming orders.</Typography>
              <Button variant="contained" color="primary" sx={{ mt: 2 }}>View Orders</Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Store Settings</Typography>
              <Typography variant="body2">Update store details and delivery settings.</Typography>
              <Button variant="contained" color="primary" sx={{ mt: 2 }}>Settings</Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

