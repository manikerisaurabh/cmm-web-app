import React from "react";
import { Container, Typography, Card, CardContent, Button } from "@mui/material";

export default function VendorProducts() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>Vendor Products</Typography>
      <Card>
        <CardContent>
          <Typography variant="body2">List of vendor products...</Typography>
        </CardContent>
      </Card>
    </Container>
  );
}
