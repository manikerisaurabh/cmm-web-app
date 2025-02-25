// Admin Disputes Page
import React from "react";
import { Container, Typography, Card, CardContent } from "@mui/material";
export default function AdminDisputes() {
    return (
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>Dispute Resolution</Typography>
        <Card sx={{ boxShadow: 3, p: 2 }}>
          <CardContent>
            <Typography variant="body1">Handle escalations and disputes here.</Typography>
          </CardContent>
        </Card>
      </Container>
    );
  }