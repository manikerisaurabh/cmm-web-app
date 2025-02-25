import React from "react";
import { Container, Typography, Card, CardContent, Button } from "@mui/material";
export default function VendorOrders() {
    return (
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>Vendor Orders</Typography>
        <Card>
          <CardContent>
            <Typography variant="body2">List of vendor orders...</Typography>
          </CardContent>
        </Card>
      </Container>
    );
  
}