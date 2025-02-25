import React from "react";
import { Container, Grid, Card, CardContent, Typography, Button } from "@mui/material";

// Customer Dashboard
export default function CustomerDashboard() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>Customer Dashboard</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">My Orders</Typography>
              <Typography variant="body2">Track your recent orders and delivery status.</Typography>
              <Button variant="contained" color="primary" sx={{ mt: 2 }}>View Orders</Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Saved Stores</Typography>
              <Typography variant="body2">View your favorite stores.</Typography>
              <Button variant="contained" color="primary" sx={{ mt: 2 }}>Saved Stores</Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Account Settings</Typography>
              <Typography variant="body2">Manage your profile and addresses.</Typography>
              <Button variant="contained" color="primary" sx={{ mt: 2 }}>Settings</Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

