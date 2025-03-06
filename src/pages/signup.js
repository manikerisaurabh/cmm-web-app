// // Register Component
// import { Container, Typography, Card, CardContent, Button, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, MenuItem, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";

// export default function Register() {
//     return (
//       <Container maxWidth="sm" sx={{ mt: 4 }}>
//         <Typography variant="h4" gutterBottom>Register</Typography>
//         <Card sx={{ boxShadow: 3, p: 2 }}>
//           <CardContent>
//             <TextField fullWidth label="Name" margin="normal" />
//             <TextField fullWidth label="Email" margin="normal" />
//             <TextField fullWidth label="Password" type="password" margin="normal" />
//             <TextField fullWidth label="Confirm Password" type="password" margin="normal" />
//             <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>Register</Button>
//           </CardContent>
//         </Card>
//       </Container>
//     );
//   }
  "use client"

import { useState } from "react"
import { Box, Container, Typography, TextField, Button, Paper } from "@mui/material"
import { useRouter } from "next/router"

export default function Signup() {
  const [name, setName] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [email, setEmail] = useState("")
  const router = useRouter()

  const handleSignup = () => {
    // Here you would typically send the signup data to your backend
    console.log("Signing up with", { name, phoneNumber, email })
    // If successful, redirect to login page
    router.push("/login")
  }

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} sx={{ mt: 8, p: 4, display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Typography component="h1" variant="h5" sx={{ mb: 3 }}>
          Sign Up
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="Full Name"
            name="name"
            autoComplete="name"
            autoFocus
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="phone"
            label="Phone Number"
            name="phone"
            autoComplete="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button fullWidth variant="contained" color="primary" sx={{ mt: 3, mb: 2 }} onClick={handleSignup}>
            Sign Up
          </Button>
          <Button fullWidth variant="text" onClick={() => router.push("/login")} sx={{ mt: 1 }}>
            Already have an account? Login
          </Button>
        </Box>
      </Paper>
    </Container>
  )
}

