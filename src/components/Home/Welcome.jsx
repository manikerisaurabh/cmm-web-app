import { Box, Typography, Container } from "@mui/material"
import Image from "next/image"

export default function Welcome() {
  return (
    <Box sx={{ py: 6, my: 10, backgroundColor: "#FFC8C6", position: "relative" }}>
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
        <Typography
          variant="body1"
          align="center"
          sx={{
            margin: "0 auto",
            px: { xs: 2, sm: 4, md: 6 }, // horizontal padding
            maxWidth: "900px",           // limit line length
            fontSize: {
              xs: "14px",   // phones
              sm: "16px",   // tablets
              md: "18px",   // desktops
              lg: "20px"    // large desktops
            },
          }}
        >
          **Welcome to City Center Mall – Pune’s Top Fast Delivery Shopping App**

          At **City Center Mall**, we are proud to be one of **Pune’s most trusted and fastest-growing online shopping platforms**. Whether you prefer to shop online from the comfort of your home or visit our physical store in Kasba Peth, we ensure a smooth, fast, and reliable shopping experience every time.

          Our **hybrid shopping model** bridges the gap between **traditional retail** and **modern eCommerce**, making it easy for customers to buy what they need — anytime, anywhere. We connect both new and experienced sellers to buyers, offering a wide range of quality products under one roof.

          Need something urgently? Whether it’s a **kitchen appliance**, a **last-minute gift**, or your **weekly grocery order**, we’ll deliver it to your doorstep in just **60 minutes** with our **express delivery service in Pune**. Plus, our easy-to-use shopping app makes browsing, searching, and buying hassle-free.

          Discover the future of **online shopping in Pune** with City Center Mall — where **fast delivery**, **great deals**, and **top products** come together to give you the best shopping experience        </Typography>

      </Container>
    </Box>
  )
}

