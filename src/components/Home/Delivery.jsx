import { Box, Typography, Grid, Card, CardContent, Container } from "@mui/material"
import Image from "next/image"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"

const deliveryOptions = [
  { title: "Quick", image: "/placeholder.svg?height=192&width=192" },
  { title: "Self-Pickup", image: "/placeholder.svg?height=192&width=192" },
  { title: "Scheduled", image: "/placeholder.svg?height=192&width=192" },
]

export default function Delivery() {
  return (
    <Box sx={{ py: 8, background: "linear-gradient(to bottom right, #FFF0F5, #E6E6FA)" }}>
      <Container maxWidth="lg">
        <Typography variant="h4" component="h2" fontWeight="bold" gutterBottom>
          Delivery
        </Typography>
        <Grid container spacing={3}>
          {deliveryOptions.map((option) => (
            <Grid item xs={12} md={4} key={option.title}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "0.3s",
                  "&:hover": { boxShadow: 6 },
                }}
              >
                <CardContent>
                  <Box sx={{ height: 192, position: "relative", mb: 2 }}>
                    <Image
                      src={option.image || "/placeholder.svg"}
                      alt={option.title}
                      fill
                      style={{ objectFit: "contain" }}
                    />
                  </Box>
                  <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <Typography variant="h6" component="h3">
                      {option.title}
                    </Typography>
                    <ArrowForwardIcon color="primary" />
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

