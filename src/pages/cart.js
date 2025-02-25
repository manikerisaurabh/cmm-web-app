// Cart Component
import { Container, Typography, Card, CardContent, Button, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, MenuItem, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { useState } from "react";

export default function Cart() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Product A", price: 100, quantity: 2 },
    { id: 2, name: "Product B", price: 50, quantity: 1 }
  ]);

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>Shopping Cart</Typography>
      <Card sx={{ boxShadow: 3, p: 2 }}>
        <CardContent>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Product</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>Quantity</TableCell>
                  <TableCell>Total</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cartItems.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>${item.price}</TableCell>
                    <TableCell>{item.quantity}</TableCell>
                    <TableCell>${item.price * item.quantity}</TableCell>
                  </TableRow>
                ))}
                <TableRow>
                  <TableCell colSpan={3} align="right"><strong>Total Price:</strong></TableCell>
                  <TableCell><strong>${totalPrice}</strong></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </Container>
  );
}
