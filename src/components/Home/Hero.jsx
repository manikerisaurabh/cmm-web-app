import { Box, Typography, Button, Container, Grid } from "@mui/material"
import Image from "next/image"
import GooglePlayIcon from "@mui/icons-material/Google"
import AppleIcon from "@mui/icons-material/Apple"

export default function Hero() {
  return (
    <Box
      sx={{
        background: "#FFF9DB",
        py: { xs: 6, md: 12 },
        position: "relative",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",

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
        // className="absolute top-0 left-0 w-full h-full mix-blend-multiply"
      />
      <Container maxWidth="lg" sx={{
        zIndex: 2
      }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6} sx={{ textAlign: "left" }}>
            <Typography variant="h2" component="h1" color="primary" fontWeight="bold" gutterBottom>
              "Stay In,
              <br />
              Get it in
            </Typography>
            <Typography variant="h5" gutterBottom color="primary" fontWeight="bold">
              Welcome to
              <br />
              City Center Mall, India's top B2C platform!
            </Typography>
            <Box sx={{ mt: 4, display: "flex", flexDirection: {  xs: "row" }, gap: 2 }}>
              <Button variant="outlined" size="large" sx={{ border: "1px solid #6C6AED", fontSize:{ xs:"1rem",sm:"1.5rem"}, mt: "10px", py:{ xs:"15px",sm:"20px"},px:{ xs:"60px",sm:"100px"} }}>Download It</Button>
              <Image
                src="/images/home/ArrowButton.png" // Replace with your image URL
                alt="Hero Background"
                layout="fill"
                className="DownloadButtonArrow"
              /></Box>
            <Box sx={{ mt: 4, display: "flex", flexDirection: {xs:"column",sm: "row" }, gap: 2 }}>
              <Box sx={{position:"relative",height: { xs: "60px", md: "60px" } }}>
            <Image
                src="/images/home/playstore.png"
                alt="App Preview"
                className="NextImage"
                fill
                style={{ objectFit: "contain"}}
                priority
              />
              </Box>
              <Box sx={{position:"relative",height: { xs: "60px", md: "60px" } }}>
              <Image
              className="NextImage"
                src="/images/home/Appstore.png"
                alt="App Preview"
                fill
                style={{ objectFit: "contain" }}
                priority
              />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ position: "relative", height: { xs: "500px", md: "500px" } }}>
            <Image
                src="/images/home/mobileback.png"
                alt="App Preview"
                fill
                style={{ objectFit: "contain" }}
                priority
              />
              <Box sx={{ position: "relative", top:"120px", height: { xs: "400px", md: "450px" } }}>
              <Image
                src="/images/home/phone.png"
                alt="App Preview"
                fill
                style={{ objectFit: "contain" }}
                priority
              />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <br/>
      <br/>
      <br/>
    </Box>
  )
}

