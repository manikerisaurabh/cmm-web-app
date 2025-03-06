// import { signIn } from "next-auth/react";
// import { Container, Card, CardContent, Typography, TextField, Button } from "@mui/material";
// import { useRouter } from "next/router";
// import { useState } from "react";

// export default function Login() {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [error, setError] = useState("");
//     const router = useRouter();
  
//     const handleLogin = (e) => {
//         e.preventDefault();
//         setError("");
    
//         // Simple validation
//         if (!email || !password) {
//           setError("Both fields are required");
//           return;
//         }
    
//         // Mock authentication (Replace with API call)
//         if (email === "admin@example.com" && password === "password") {
//           document.cookie = `authToken=valid_token; path=/; max-age=3600`;
//           document.cookie = `authType=admin; path=/; max-age=3600`;
//           router.push("/admin");
//         } else if (email === "vendor@example.com" && password === "password") {
//           document.cookie = `authToken=valid_token;; path=/; max-age=3600`;
//           document.cookie = `authType=vendor; path=/; max-age=3600`;

//           router.push("/vendor");
//         } else if (email === "customer@example.com" && password === "password") {
//           document.cookie = `authToken=valid_token; path=/; max-age=3600`;
//           document.cookie = `authType=customer; path=/; max-age=3600`;
//           router.push("/");
//         } else {
//           setError("Invalid email or password");
//         }
//       };
  
//     return (
//       <Container maxWidth="sm" sx={{ mt: 10 }}>
//         <Card>
//           <CardContent>
//             <Typography variant="h5" gutterBottom>Login</Typography>
//             {error && <Typography color="error">{error}</Typography>}
//             <TextField label="Email" fullWidth margin="normal" value={email} onChange={(e) => setEmail(e.target.value)} />
//             <TextField label="Password" type="password" fullWidth margin="normal" value={password} onChange={(e) => setPassword(e.target.value)} />
//             <Button variant="contained" color="primary" sx={{ mt: 2 }} fullWidth onClick={handleLogin}>Login</Button>
//           </CardContent>
//         </Card>
//       </Container>
//     );
// }

"use client"

import { useState } from "react"
import { Box, Container, Typography, TextField, Button, Paper } from "@mui/material"
import { useRouter } from "next/router"

export default function Login() {
  const [phoneNumber, setPhoneNumber] = useState("")
  const [otp, setOtp] = useState("")
  const [otpSent, setOtpSent] = useState(false)
  const router = useRouter()

  const handleSendOtp = () => {
    // Here you would typically send the OTP to the phone number
    console.log("Sending OTP to", phoneNumber)
    setOtpSent(true)
  }

  const handleLogin = () => {
    // Here you would verify the OTP
    console.log("Logging in with OTP", otp)
    document.cookie = `authToken=valid_token; path=/; max-age=3600`;
    document.cookie = `authType=admin; path=/; max-age=3600`;
    // If successful, redirect to home page
    router.push("/")
  }

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} sx={{ mt: 8, p: 4, display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Typography component="h1" variant="h5" sx={{ mb: 3 }}>
          Login
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="phone"
            label="Phone Number"
            name="phone"
            autoComplete="tel"
            autoFocus
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          {otpSent && (
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="otp"
              label="OTP"
              type="text"
              id="otp"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
          )}
          {!otpSent ? (
            <Button fullWidth variant="contained" color="primary" sx={{ mt: 3, mb: 2 }} onClick={handleSendOtp}>
              Send OTP
            </Button>
          ) : (
            <Button fullWidth variant="contained" color="primary" sx={{ mt: 3, mb: 2 }} onClick={handleLogin}>
              Login
            </Button>
          )}
          <Button fullWidth variant="text" onClick={() => router.push("/signup")} sx={{ mt: 1 }}>
            Don't have an account? Sign Up
          </Button>
        </Box>
      </Paper>
    </Container>
  )
}


