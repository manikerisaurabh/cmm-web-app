import { Box, Typography, Container, Grid } from "@mui/material"
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid"
import SearchIcon from "@mui/icons-material/Search"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import PaymentIcon from "@mui/icons-material/Payment"
import LocalShippingIcon from "@mui/icons-material/LocalShipping"

const steps = [
  { title: "Install The App", icon: <PhoneAndroidIcon fontSize="large" />, color: "#E6E6FA" },
  { title: "Explore App", icon: <SearchIcon fontSize="large" />, color: "#E0FFFF" },
  { title: "Search Product", icon: <ShoppingCartIcon fontSize="large" />, color: "#E6E6FA" },
  { title: "Buy The Product", icon: <PaymentIcon fontSize="large" />, color: "#FFFACD" },
  { title: "Delivery Within 60 min", icon: <LocalShippingIcon fontSize="large" />, color: "#E6E6FA" },
]

export default function HowToShop() {
  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h4" component="h2" align="center" fontWeight="bold" gutterBottom>
          How to shop
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {steps.map((step, index) => (
            <Grid item key={step.title} xs={6} sm={4} md={2}>
              <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
                <Box
                  sx={{
                    width: 64,
                    height: 64,
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: step.color,
                    mb: 2,
                  }}
                >
                  {step.icon}
                </Box>
                <Typography variant="subtitle1" fontWeight="bold">
                  step {index + 1}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {step.title}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

