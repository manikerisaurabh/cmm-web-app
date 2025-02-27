import { Box, Typography, Container } from "@mui/material"
import Image from "next/image"

export default function Welcome() {
  return (
    <Box sx={{ py: 6, my:10, backgroundColor: "#FFC8C6" ,position:"relative"}}>
      <Image
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
            />
      <Container maxWidth="lg">
        <Typography variant="body1" align="center" sx={{  margin: "0 auto" }}>
        We connect both new and experienced sellers to consumers. From home appliances to trendy clothing and the latest electronics, we offer everything at affordable prices to simplify your shopping experience! You can shop with us in two ways. You can visit our store to see the gadgets in person, and our friendly staff will be there to help you. If you prefer to shop online, you can find our products on popular websites like Amazon and Flipkart, or you can buy directly from our website, making it easy for you to browse and shop from anywhere.
        </Typography>
      </Container>
    </Box>
  )
}

