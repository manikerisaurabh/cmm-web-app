import { Box, Typography, Grid, Card, CardContent, Container, Button } from "@mui/material"
import Image from "next/image"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import CallMadeOutlinedIcon from '@mui/icons-material/CallMadeOutlined';
const categories = [
  { title: "Appliances & Electronics", image: "/images/Category/Electronics.png" },
  { title: "Automotive", image: "/images/Category/Automotive.png" },
  { title: "Baby Products", image: "/images/Category/BabyProducts.png" },
  { title: "Personal Care Products", image: "/images/Category/PersonalCareproducts.png" },
  { title: "Books", image: "/images/Category/Books.png" },
  { title: "Grocery & Gourmet Food", image: "/images/Category/GroceryGourmetFood.png" },
]

export default function Categories() {
  return (
    <Box sx={{ py: 8,zIndex:1 }}>
      <Container maxWidth="lg">
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 4 }}>
          <Typography variant="h4" component="h2" fontWeight="bold">
            Category
          </Typography>
          <Typography variant="body2" color="text.secondary">
            see all →
          </Typography>
        </Box>
        <Grid container spacing={10}>
          {categories.map((category) => (
            <Grid item xs={12} sm={6} md={4} key={category.title}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "0.3s",
                  background:"#F7EEFF",
                  borderRadius:"20px",
                  boxShadow: "0px 4px 4px 0px #00000040",
                  "&:hover": { boxShadow: 6 },
                }}
              >
                <CardContent sx={{ flexGrow: 1, display: "flex", justifyContent: "space-between" }}>
                  <Box>
                    <Typography variant="h6" component="h3" gutterBottom color="primary">
                      {category.title}
                    </Typography>
                    <Box sx={{ height: 128, position: "relative" }}>
                      <Image
                      className="categoriesImage"
                        src={category.image || "/placeholder.svg"}
                        alt={category.title}
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </Box>
                  </Box>
                  {/* <Button variant="contained" endIcon={<CallMadeIcon />}></Button> */}
                  <CallMadeOutlinedIcon color="primary"  sx={{background:"#fff",borderRadius:"20px",fontSize:"40px"}} />
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

