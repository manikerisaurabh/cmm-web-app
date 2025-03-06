import React from "react";
import Image from "next/image";
import { Box, Typography, Grid, Button, Container } from "@mui/material";
import CallMadeOutlinedIcon from '@mui/icons-material/CallMadeOutlined';

const deliveryOptions = [
  { title: "Quick", image: "/images/Delivery/Quick.png" },
  { title: "Self-Pickup", image: "/images/Delivery/SelfPickup.png" },
  { title: "Scheduled", image: "/images/Delivery/Scheduled.png" },
];

export default function DeliverySection() {
  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
    <Box sx={{ py: 5 }}>
      <Typography variant="h4" component="h2" fontWeight="bold" gutterBottom>
        Delivery
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {deliveryOptions.map((option, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                backgroundImage:"url(/images/Delivery/bgCard.png)",
                backgroundSize:"contain",
                height: 300,
                borderRadius: 3,
                // overflow: "hidden",
                boxShadow: 3,
              }}
            >
               {/* <Image
                        src="/images/Delivery/bgCard.png" // Replace with your image URL
                        alt="Hero Background"
                        layout="fill"
                        objectFit="contain"
                        className="deliveryCardBg"
                      /> */}
              <Image src={option.image} className="deliveryCard" alt={option.title} layout="fill" objectFit="contain" />
            </Box>
            <Box sx={{mt:20,alignItems:"center",display:"flex"}} >
            <Button
              variant="outlined"
              size="large"
              sx={{
                mr: 3,
                borderRadius: 5,
                fontSize: "1rem",
                fontWeight: 500,
                color: "primary.main",
                width:"100%",
                borderColor: "primary.main",
                px: 10,
              }}
            >
              {option.title}
            </Button>
            <CallMadeOutlinedIcon color="primary"  sx={{ border:"1px solid #6C6AED",borderRadius:"20px",fontSize:"43px",zIndex:1}} />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
    </Container>
    </Box>
  );
}
