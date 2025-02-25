// Profile Component
import { Container, Typography, Card, CardContent, Button, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, MenuItem, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";

export default function Profile() {
    return (
      <Container maxWidth="sm" sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>Profile</Typography>
        <Card sx={{ boxShadow: 3, p: 2 }}>
          <CardContent>
            <TextField fullWidth label="Name" margin="normal" />
            <TextField fullWidth label="Email" margin="normal" disabled />
            <TextField fullWidth label="Phone Number" margin="normal" />
            <TextField fullWidth label="Address" margin="normal" multiline rows={3} />
            <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>Update Profile</Button>
          </CardContent>
        </Card>
      </Container>
    );
  }