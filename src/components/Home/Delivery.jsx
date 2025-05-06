// import { Box, Typography, Grid, Card, CardContent, Container } from "@mui/material"
// import Image from "next/image"
// import ArrowForwardIcon from "@mui/icons-material/ArrowForward"

// const deliveryOptions = [
//   { title: "Quick", image: "/images/Delivery/Quick.png" },
//   { title: "Self-Pickup", image: "/images/Delivery/SelfPickup.png" },
//   { title: "Scheduled", image: "/images/Delivery/Scheduled.png" },
// ]

// export default function Delivery() {
//   return (
//     <Box sx={{ py: 8 }}>
//       <Container maxWidth="lg">
//         <Typography variant="h4" component="h2" fontWeight="bold" gutterBottom>
//           Delivery
//         </Typography>
//         <Grid container spacing={3}>
//           {deliveryOptions.map((option) => (
//            <Grid item xs={12}  md={4} key={option.title} >
//               <Box
//                 sx={{
//                   position:"relative",
//                   height: "100%",
//                   display: "flex",
//                   flexDirection: "column",
//                   borderRadius:"20px",
//                   transition: "0.3s",
//                   "&:hover": { boxShadow: 6 },
//                 }}
//               >
//                 <Image
//                         src="/images/Delivery/bgCard.png" // Replace with your image URL
//                         alt="Hero Background"
//                         layout="fill"
//                         objectFit="contain"
//                         className="deliveryCardBg"
//                       />
//                   <Box sx={{ height: 250, position: "relative", mb: 2 }}>
//                     <Image
//                       src={option.image || "/placeholder.svg"}
//                       alt={option.title}
//                       fill
//                       style={{ objectFit: "contain"}}
//                     />
//               <Box >
//                     <Typography variant="h6" component="h3" color="primary">
//                       {option.title}
//                     </Typography>
//                     <ArrowForwardIcon color="primary" />
//                   </Box>
//               </Box>
//                   </Box>

//             </Grid>
//           ))}
//         </Grid>
//       </Container>
//     </Box>
//   )
// }
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
    <Box sx={{ py: { xs: 4, sm: 8 } }}>
      <Container maxWidth="lg">
        <Box sx={{ py: 5 }}>
          <Typography
            variant="h4"
            component="h2"
            fontWeight="bold"
            gutterBottom
            sx={{
              fontSize: { xs: "24px", sm: "32px" },
              textAlign: "center",
              color: "primary.main"
            }}
          >
            Delivery
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            {deliveryOptions.map((option, index) => (
              <Grid item xs={10} sm={6} md={4} key={index}>
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    backgroundImage: "url(/images/Delivery/bgCard.png)",
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    height: { xs: 180, sm: 220, md: 250 }, // Adjusted height for mobile
                    borderRadius: 3,
                    boxShadow: 3,
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src={option.image}
                    alt={option.title}
                    layout="fill"
                    objectFit="contain"
                    className="deliveryCard"
                  />
                </Box>
                <Box sx={{ mt: { xs: 3, sm: 4 }, textAlign: "center" }}>
                  <Button
                    variant="outlined"
                    size="large"
                    sx={{
                      borderRadius: 5,
                      fontSize: { xs: "0.875rem", sm: "1rem" },
                      fontWeight: 500,
                      color: "primary.main",
                      width: "100%",
                      borderColor: "primary.main",
                      px: { xs: 5, sm: 10 },
                      py: 1,
                    }}
                  >
                    {option.title}
                  </Button>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
