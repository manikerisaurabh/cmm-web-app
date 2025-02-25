import { Box, Typography, Button, Container, Grid } from "@mui/material"
import Image from "next/image"
import GooglePlayIcon from "@mui/icons-material/Google"
import AppleIcon from "@mui/icons-material/Apple"

export default function Hero() {
  return (
    <Box
      sx={{
        background: "linear-gradient(to bottom right, #FFF8E7, #FFE5D2)",
        py: { xs: 6, md: 12 },
        position: "relative",
        width: "100%",
        // height: "500px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        overflow: "hidden",

      }}
    >
      <Image
        src="/images/home/herobg.png" // Replace with your image URL
        alt="Hero Background"
        layout="fill"
        objectFit="cover"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.5, // Adjust for blending effect
          zIndex: 1,
        }}
        className="absolute top-0 left-0 w-full h-full mix-blend-multiply"
      />
      <Container maxWidth="lg" sx={{
        zIndex:2
      }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6} sx={{textAlign:"left"}}>
            <Typography variant="h2" component="h1" color="primary" fontWeight="bold" gutterBottom>
              "Stay In,
              <br />
              Get it in
            </Typography>
            <Typography variant="h5" gutterBottom>
              Welcome to
              <br />
              City Center Mall, India's top B2C platform!
            </Typography>
            <Box sx={{ mt: 4, display: "flex", flexDirection: { xs: "column", sm: "row" }, gap: 2 }}>
              <Button
                variant="contained"
                color="secondary"
                startIcon={<GooglePlayIcon />}
                sx={{ color: "white", textTransform: "none" }}
              >
                Google Play
              </Button>
              <Button
                variant="contained"
                color="secondary"
                startIcon={<AppleIcon />}
                sx={{ color: "white", textTransform: "none" }}
              >
                App Store
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ position: "relative", height: { xs: "300px", md: "600px" } }}>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Desktop%20-%203.png-qZ1IOC6YHunuZkByr2x6mffqypiTAj.jpeg"
                alt="App Preview"
                fill
                style={{ objectFit: "contain" }}
                priority
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

