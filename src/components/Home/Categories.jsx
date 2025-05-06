import { useState, useEffect } from "react";
import { Box, Typography, Grid, Card, CardContent, Container, Button } from "@mui/material"
import Image from "next/image"
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import CallMadeOutlinedIcon from '@mui/icons-material/CallMadeOutlined';

import Link from "next/link";
import { fetchCategories } from "@/lib/api";
// const categories = [
//   { title: "Appliances & Electronics", image: "/images/Category/Electronics.png" },
//   { title: "Automotive", image: "/images/Category/Automotive.png" },
//   { title: "Baby Products", image: "/images/Category/BabyProducts.png" },
//   { title: "Personal Care Products", image: "/images/Category/PersonalCareproducts.png" },
//   { title: "Books", image: "/images/Category/Books.png" },
//   { title: "Grocery & Gourmet Food", image: "/images/Category/GroceryGourmetFood.png" },
// ]

export default function Categories() {
  const [categories, setcategories] = useState([])
  useEffect(() => {
    getAllCategories();
  }, [])
  const getAllCategories = async () => {
    const data = await fetchCategories();
    console.log("data of categoris : ", data)
    setcategories(data);
  }

  return (
    <Box sx={{ py: { xs: 4, md: 8 }, zIndex: 1 }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", sm: "center" },
            mb: 4,
            gap: 2,
          }}
        >
          <Typography
            variant="h5"
            component="h2"
            fontWeight="bold"
            sx={{ fontSize: { xs: "20px", sm: "24px", md: "32px" } }}
          >
            Category
          </Typography>
          <Link href="/categories">
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ display: "flex", alignItems: "center" }}
            >
              See all <NavigateNextIcon fontSize="small" sx={{ ml: 1 }} />
            </Typography>
          </Link>
        </Box>

        {/* Category Cards */}
        <Grid container spacing={{ xs: 4, sm: 6, md: 10 }}>
          {categories.map((category) => (
            <Grid item xs={12} sm={6} md={4} key={category.title}>
              <Link href={`/categories/${category.id}`} passHref>
                <Card
                  component="a"
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    transition: "0.3s",
                    background: "#F7EEFF",
                    borderRadius: "20px",
                    boxShadow: "0px 4px 4px 0px #00000040",
                    textDecoration: "none",
                    "&:hover": { boxShadow: 6 },
                    px: 2,
                    py: 3,
                  }}
                >
                  <CardContent
                    sx={{
                      flexGrow: 1,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      gap: 2,
                      p: 0,
                    }}
                  >
                    <Typography
                      variant="subtitle1"
                      fontWeight="bold"
                      color="primary"
                      sx={{ fontSize: { xs: "16px", sm: "18px", md: "20px" } }}
                    >
                      {category.category}
                    </Typography>
                    <Box
                      sx={{
                        height: { xs: 120, sm: 140, md: 160 },
                        width: "100%",
                        position: "relative",
                      }}
                    >
                      <img
                        src={category.image || "/placeholder.svg"}
                        alt={category.title}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          borderRadius: "10px",
                        }}
                      />
                    </Box>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )

}

