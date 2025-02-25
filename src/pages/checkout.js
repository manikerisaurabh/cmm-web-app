// Checkout Component
import { Container, Typography, Card, CardContent, Button, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, MenuItem, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";

export default function Checkout() {
    return (
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>Checkout</Typography>
        <Card sx={{ boxShadow: 3, p: 2 }}>
          <CardContent>
            <Typography variant="body1">Checkout functionality coming soon!</Typography>
          </CardContent>
        </Card>
      </Container>
    );
  }