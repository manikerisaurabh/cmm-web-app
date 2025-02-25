// Order Component
import { Container, Typography, Card, CardContent, Button, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, MenuItem, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";

export default function Order() {
    return (
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>My Orders</Typography>
        <Card sx={{ boxShadow: 3, p: 2 }}>
          <CardContent>
            <Typography variant="h6">Order #12345</Typography>
            <Typography variant="body2">Status: Shipped</Typography>
            <Typography variant="body2">Total: $99.99</Typography>
            <Button variant="contained" color="primary" sx={{ mt: 2 }}>View Details</Button>
          </CardContent>
        </Card>
      </Container>
    );
  }