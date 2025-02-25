import React from "react";
import { Container, Typography, Card, CardContent } from "@mui/material";

// Admin Reports Page
export default function AdminReports() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>Analytics & Reports</Typography>
      <Card sx={{ boxShadow: 3, p: 2 }}>
        <CardContent>
          <Typography variant="body1">View sales and performance reports here.</Typography>
        </CardContent>
      </Card>
    </Container>
  );
}