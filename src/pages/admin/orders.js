// Admin Orders Page
import React from "react";
import { Container, Typography, Card, CardContent } from "@mui/material";
export default function AdminOrders() {
    return (
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>Manage Orders</Typography>
        <Card sx={{ boxShadow: 3, p: 2 }}>
          <CardContent>
            <Typography variant="body1">Track and update order statuses here.</Typography>
          </CardContent>
        </Card>
      </Container>
    );
  }