// // Profile Component
// import { Container, Typography, Card, CardContent, Button, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, MenuItem, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";

// export default function Profile() {
//     return (
//       <Container maxWidth="sm" sx={{ mt: 4 }}>
//         <Typography variant="h4" gutterBottom>Profile</Typography>
//         <Card sx={{ boxShadow: 3, p: 2 }}>
//           <CardContent>
//             <TextField fullWidth label="Name" margin="normal" />
//             <TextField fullWidth label="Email" margin="normal" disabled />
//             <TextField fullWidth label="Phone Number" margin="normal" />
//             <TextField fullWidth label="Address" margin="normal" multiline rows={3} />
//             <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>Update Profile</Button>
//           </CardContent>
//         </Card>
//       </Container>
//     );
//   }
import { Box, Container, Typography, Paper, Avatar } from "@mui/material"

export default function Profile() {
  // This data should come from your authentication state
  const user = {
    name: "John Doe",
    email: "john@example.com",
    phone: "+1234567890",
  }

  return (
    <Container component="main" maxWidth="sm">
      <Paper elevation={3} sx={{ mt: 8, p: 4, display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Avatar sx={{ width: 100, height: 100, mb: 3 }} />
        <Typography component="h1" variant="h4" sx={{ mb: 3 }}>
          {user.name}
        </Typography>
        <Box sx={{ width: "100%" }}>
          <Typography variant="body1" sx={{ mb: 2 }}>
            <strong>Email:</strong> {user.email}
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            <strong>Phone:</strong> {user.phone}
          </Typography>
        </Box>
      </Paper>
    </Container>
  )
}

