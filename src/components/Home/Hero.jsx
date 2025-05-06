import { Box, Typography, Button, Container, Grid } from "@mui/material";
import Image from "next/image";
import GooglePlayIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";

export default function Hero() {
  return (
    <Box
      sx={{
        background: "#FFF9DB",
        py: { xs: 6, md: 12 },
        position: "relative",
        width: "100%",
        overflow: "hidden",
        textAlign: { xs: "center", md: "left" },
      }}
    >
      {/* Background Image */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 1,
        }}
      >
        <Image
          src="/images/home/herobg.png"
          alt="Hero Background"
          fill
          style={{ objectFit: "cover", opacity: 0.5 }}
          priority
        />
      </Box>

      {/* Foreground Content */}
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        <Grid container spacing={4} alignItems="center" justifyContent="center">
          {/* Text Content */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="h2"
              component="h1"
              color="primary"
              fontWeight="bold"
              gutterBottom
              sx={{
                fontSize: {
                  xs: "2rem",
                  sm: "2.5rem",
                  md: "3rem",
                  lg: "3.5rem",
                },
                textAlign: { xs: "center", md: "left" },
              }}
            >
              "Stay In,
              <br />
              Get it in 60min! “
            </Typography>

            <Typography
              variant="h5"
              color="primary"
              fontWeight="bold"
              sx={{
                fontSize: {
                  xs: "1.1rem",
                  sm: "1.3rem",
                  md: "1.5rem",
                },
                mb: { xs: 4, md: 6 },
                textAlign: { xs: "center", md: "left" },
              }}
            >
              Welcome to
              <br />
              City Center Mall, India's top B2C platform!
            </Typography>

            {/* (Optional) CTA Buttons can go here */}
            {/* <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
              <Button variant="contained" startIcon={<GooglePlayIcon />} sx={{ mr: 2 }}>
                Google Play
              </Button>
              <Button variant="outlined" startIcon={<AppleIcon />}>
                App Store
              </Button>
            </Box> */}
          </Grid>

          {/* Image Preview */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                position: "relative",
                height: {
                  xs: "480px",   // larger for mobile
                  sm: "500px",
                  md: "500px",
                },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "currentcolor"
              }}
            >
              <Image
                src="/images/home/mobileback.png"
                alt="App Background"
                fill
                style={{ objectFit: "contain" }}
                priority
              />

              <Box
                sx={{
                  position: "absolute",
                  top: { xs: "60px", sm: "100px", md: "120px" }, // lower on mobile
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: {
                    xs: "80%",  // make it wider on mobile
                    sm: "70%",
                    md: "60%",
                  },
                  height: {
                    xs: "350px",
                    sm: "400px",
                    md: "450px",
                  },
                }}
              >
                <Image
                  src="/images/home/phone.png"
                  alt="Phone"
                  fill
                  style={{ objectFit: "contain" }}
                  priority
                />
              </Box>
            </Box>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
}
