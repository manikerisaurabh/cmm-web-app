import { Box, Typography, Container } from "@mui/material"
import Image from "next/image"

export default function Welcome() {
  return (
    <Box sx={{ py: 6, my:10, backgroundColor: "#A8FFE0" ,position:"relative"}}>
      {/* <Image
              src="/images/welcome/bg.png" // Replace with your image URL
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
            /> */}
      <Container maxWidth="lg">
        <Typography variant="body1" align="center" sx={{  margin: "0 auto" }}>
        We are a marketplace designed to support local sellers, providing tools and services to grow their businesses with ease. Operating exclusively in Pune, we ensure a tailored approach to meet local business needs Join the leading marketplace with free delivery, zero cammission, and unparalleled support.
        </Typography>
      </Container>
    </Box>
  )
}

