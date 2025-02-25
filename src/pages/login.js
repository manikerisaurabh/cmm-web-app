import { signIn } from "next-auth/react";
import { Container, Card, CardContent, Typography, TextField, Button } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();
  
    const handleLogin = (e) => {
        e.preventDefault();
        setError("");
    
        // Simple validation
        if (!email || !password) {
          setError("Both fields are required");
          return;
        }
    
        // Mock authentication (Replace with API call)
        if (email === "admin@example.com" && password === "password") {
          document.cookie = `authToken=valid_token; path=/; max-age=3600`;
          document.cookie = `authType=admin; path=/; max-age=3600`;
          router.push("/admin");
        } else if (email === "vendor@example.com" && password === "password") {
          document.cookie = `authToken=valid_token;; path=/; max-age=3600`;
          document.cookie = `authType=vendor; path=/; max-age=3600`;

          router.push("/vendor");
        } else if (email === "customer@example.com" && password === "password") {
          document.cookie = `authToken=valid_token; path=/; max-age=3600`;
          document.cookie = `authType=customer; path=/; max-age=3600`;
          router.push("/");
        } else {
          setError("Invalid email or password");
        }
      };
  
    return (
      <Container maxWidth="sm" sx={{ mt: 10 }}>
        <Card>
          <CardContent>
            <Typography variant="h5" gutterBottom>Login</Typography>
            {error && <Typography color="error">{error}</Typography>}
            <TextField label="Email" fullWidth margin="normal" value={email} onChange={(e) => setEmail(e.target.value)} />
            <TextField label="Password" type="password" fullWidth margin="normal" value={password} onChange={(e) => setPassword(e.target.value)} />
            <Button variant="contained" color="primary" sx={{ mt: 2 }} fullWidth onClick={handleLogin}>Login</Button>
          </CardContent>
        </Card>
      </Container>
    );
}
