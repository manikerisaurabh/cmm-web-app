import React, { useState } from "react";
import { Container, Typography, Card, CardContent, Button, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, MenuItem, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";

// Admin Vendors Page
export default function AdminVendors() {
  const [vendors, setVendors] = useState([
    { id: 1, name: "Vendor A", email: "vendorA@example.com", status: "Approved" },
    { id: 2, name: "Vendor B", email: "vendorB@example.com", status: "Pending" }
  ]);
  const [newVendor, setNewVendor] = useState({ name: "", email: "", shopName: "", address: "", category: "" });
  const [open, setOpen] = useState(false);

  const categories = ["Electronics", "Fashion", "Groceries", "Furniture", "Sports"];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewVendor({ ...newVendor, [name]: value });
  };

  const addVendor = () => {
    if (newVendor.name && newVendor.email && newVendor.shopName && newVendor.address && newVendor.category) {
      setVendors([...vendors, { id: vendors.length + 1, ...newVendor, status: "Pending" }]);
      setNewVendor({ name: "", email: "", shopName: "", address: "", category: "" });
      setOpen(false);
    }
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>Manage Vendors</Typography>
      <Button variant="contained" color="primary" onClick={() => setOpen(true)} sx={{ mb: 3 }}>Add Vendor</Button>
      
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Create Vendor</DialogTitle>
        <DialogContent>
          <TextField 
            label="Vendor Name" 
            name="name" 
            value={newVendor.name} 
            onChange={handleInputChange} 
            fullWidth 
            margin="normal"
          />
          <TextField 
            label="Email" 
            name="email" 
            value={newVendor.email} 
            onChange={handleInputChange} 
            fullWidth 
            margin="normal"
          />
          <TextField 
            label="Shop Name" 
            name="shopName" 
            value={newVendor.shopName} 
            onChange={handleInputChange} 
            fullWidth 
            margin="normal"
          />
          <TextField 
            label="Shop Address" 
            name="address" 
            value={newVendor.address} 
            onChange={handleInputChange} 
            fullWidth 
            margin="normal"
          />
          <TextField
            select
            label="Product Category"
            name="category"
            value={newVendor.category}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          >
            {categories.map((category) => (
              <MenuItem key={category} value={category}>{category}</MenuItem>
            ))}
          </TextField>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color="secondary">Cancel</Button>
          <Button onClick={addVendor} color="primary" variant="contained">Add Vendor</Button>
        </DialogActions>
      </Dialog>
      
      <Card sx={{ boxShadow: 3, p: 2 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>Vendor List</Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Shop Name</TableCell>
                  <TableCell>Address</TableCell>
                  <TableCell>Category</TableCell>
                  <TableCell>Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {vendors.map((vendor) => (
                  <TableRow key={vendor.id}>
                    <TableCell>{vendor.id}</TableCell>
                    <TableCell>{vendor.name}</TableCell>
                    <TableCell>{vendor.email}</TableCell>
                    <TableCell>{vendor.shopName}</TableCell>
                    <TableCell>{vendor.address}</TableCell>
                    <TableCell>{vendor.category}</TableCell>
                    <TableCell>{vendor.status}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </Container>
  );
}
