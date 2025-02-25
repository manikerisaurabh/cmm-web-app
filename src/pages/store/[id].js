import React from "react";
import { useRouter } from "next/router";
import { Container, Typography, Card, CardContent, Button } from "@mui/material";
export default function StoreDetail() {
    const router = useRouter();
    const { id } = router.query;
  
    return (
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>Store Detail - {id}</Typography>
        <Card>
          <CardContent>
            <Typography variant="h6">Store Name</Typography>
            <Typography variant="body2">Store details...</Typography>
          </CardContent>
        </Card>
      </Container>
    );
  }