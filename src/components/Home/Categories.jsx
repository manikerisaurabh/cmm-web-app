import { Box, Typography, Grid, Card, CardContent, Container } from "@mui/material"
import Image from "next/image"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"

const categories = [
  { title: "Appliances & Electronics", image: "/placeholder.svg?height=128&width=128" },
  { title: "Automotive", image: "/placeholder.svg?height=128&width=128" },
  { title: "Baby Products", image: "/placeholder.svg?height=128&width=128" },
  { title: "Personal Care Products", image: "/placeholder.svg?height=128&width=128" },
  { title: "Books", image: "/placeholder.svg?height=128&width=128" },
  { title: "Grocery & Gourmet Food", image: "/placeholder.svg?height=128&width=128" },
]

export default function Categories() {
  return (
    <Box sx={{ py: 8, backgroundColor: "#FFF0F5" }}>
      <Container maxWidth="lg">
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 4 }}>
          <Typography variant="h4" component="h2" fontWeight="bold">
            Category
          </Typography>
          <Typography variant="body2" color="text.secondary">
            see all →
          </Typography>
        </Box>
        <Grid container spacing={3}>
          {categories.map((category) => (
            <Grid item xs={12} sm={6} md={4} key={category.title}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "0.3s",
                  "&:hover": { boxShadow: 6 },
                }}
              >
                <CardContent sx={{ flexGrow: 1, display: "flex", justifyContent: "space-between" }}>
                  <Box>
                    <Typography variant="h6" component="h3" gutterBottom>
                      {category.title}
                    </Typography>
                    <Box sx={{ height: 128, position: "relative" }}>
                      <Image
                        src={category.image || "/placeholder.svg"}
                        alt={category.title}
                        fill
                        style={{ objectFit: "contain" }}
                      />
                    </Box>
                  </Box>
                  <ArrowForwardIcon color="primary" />
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

