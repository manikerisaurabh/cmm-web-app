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
    <Box sx={{ py: 8, zIndex: 1 }}>
      <Container maxWidth="lg">
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 4, zIndex: 2, position: "relative" }}>
          <Typography variant="h4" component="h2" fontWeight="bold">
            Category
          </Typography>
          <Link href="/categories">
            <Typography variant="body2" color="text.secondary">
              See all <NavigateNextIcon fontSize="small" sx={{ ml: 4 }} />
            </Typography>
          </Link>
        </Box>
        <Grid container spacing={10}>
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
                  }}
                >
                  <CardContent
                    sx={{
                      flexGrow: 1,
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Box>
                      <Typography variant="h6" component="h3" gutterBottom color="primary">
                        {category.category}
                      </Typography>
                      <Box sx={{ height: 128, position: "relative" }}>
                        <img
                          className="categoriesImage"
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

