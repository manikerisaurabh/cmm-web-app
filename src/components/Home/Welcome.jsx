import { Box, Typography, Container } from "@mui/material";
import Image from "next/image";

export default function Welcome() {
  return (
    <Box
      sx={{
        py: 6,
        my: 10,
        backgroundColor: "#FFC8C6",
        position: "relative",
      }}
    >
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
          align="start"
          sx={{
            margin: "0 auto",
            px: { xs: 2, sm: 4, md: 6 }, // horizontal padding
            maxWidth: "900px", // limit line length
            fontSize: {
              xs: "14px", // phones
              sm: "16px", // tablets
              md: "18px", // desktops
              lg: "20px", // large desktops
            },
          }}
        >

          Welcome to City Center Mall - {" "}

          <Box component="span" fontWeight="bold">
            Top fast 60 minute delivery app in Pune {" "}
          </Box>  <br /><br />
          At City Center Mall, we are proud to be
          one of Pune’s most trusted and fastest-growing online
          shopping platforms. Whether you prefer to shop online from
          the comfort of your home or visit our physical store in
          Kasba Peth, we ensure a smooth, fast, and reliable shopping
          experience every time.
          <br /><br />Our hybrid shopping model bridges
          the gap between traditional retail and modern
          eCommerce, making it easy for customers to buy what they
          need — anytime, anywhere. We connect both new and
          experienced sellers to buyers, offering a wide range of
          quality products under one roof.

          <br /><br />  Need something urgently?
          Whether it’s a <Box component="span" fontWeight="bold">kitchen appliance</Box>, a <Box component="span" fontWeight="bold">last-minute
            gift</Box>, or your <Box component="span" fontWeight="bold">weekly grocery order, Books, baby products </Box> or <Box component="span" fontWeight="bold">Home Decor</Box> we’ll deliver it
          to your doorstep in just <Box component="span" fontWeight="bold">60 minutes</Box>  with our express
          delivery service in Pune. Plus, our easy-to-use shopping
          app makes browsing, searching, and buying hassle-free.

          <br /><br />Discover the future of  <Box component="span" fontWeight="bold">
            online shopping in Pune
          </Box>  with City
          Center Mall — where fast delivery, great deals, and
          top products come together to give you the best shopping
          experience
        </Typography>
      </Container>
    </Box>
  );
}
