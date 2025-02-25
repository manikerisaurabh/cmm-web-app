// Register Component
import { Container, Typography, Card, CardContent, Button, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, MenuItem, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";

export default function Register() {
    return (
      <Container maxWidth="sm" sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>Register</Typography>
        <Card sx={{ boxShadow: 3, p: 2 }}>
          <CardContent>
            <TextField fullWidth label="Name" margin="normal" />
            <TextField fullWidth label="Email" margin="normal" />
            <TextField fullWidth label="Password" type="password" margin="normal" />
            <TextField fullWidth label="Confirm Password" type="password" margin="normal" />
            <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>Register</Button>
          </CardContent>
        </Card>
      </Container>
    );
  }
  