import React from "react";
import { useRouter } from "next/router";
import { Container, Typography, Card, CardContent, Button } from "@mui/material";

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>Product Detail - {id}</Typography>
      <Card>
        <CardContent>
          <Typography variant="h6">Product Name</Typography>
          <Typography variant="body2">Product description...</Typography>
          <Button variant="contained" color="primary" sx={{ mt: 2 }}>Buy Now</Button>
        </CardContent>
      </Card>
    </Container>
  );
}