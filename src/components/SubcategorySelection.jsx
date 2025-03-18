"use client"

import { useState } from "react"
import { Grid, Card, CardContent, CardMedia, Typography, Box, Button, Breadcrumbs, Link, Skeleton } from "@mui/material"
import { ArrowForward, ArrowBack } from "@mui/icons-material"

export default function SubcategorySelection({ subcategories, onSelect, onBack, category }) {
  const [hoveredId, setHoveredId] = useState(null)

  if (!subcategories || subcategories.length === 0) {
    // Show skeleton loading UI
    return (
      <Grid container spacing={3}>
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item}>
            <Card>
              <Skeleton variant="rectangular" height={140} />
              <CardContent>
                <Skeleton variant="text" height={30} width="80%" />
                <Skeleton variant="text" height={20} width="60%" />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    )
  }

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link
            color="inherit"
            href="#"
            onClick={(e) => {
              e.preventDefault()
              onBack()
            }}
          >
            Categories
          </Link>
          <Typography color="text.primary">{category?.name || "Subcategories"}</Typography>
        </Breadcrumbs>

        <Button startIcon={<ArrowBack />} onClick={onBack} variant="outlined">
          Back to Categories
        </Button>
      </Box>

      <Typography variant="h5" gutterBottom align="center" sx={{ mb: 3 }}>
        Select a Subcategory
      </Typography>

      <Grid container spacing={3}>
        {subcategories.map((subcategory) => (
          <Grid item xs={12} sm={6} md={4} key={subcategory.id}>
            <Card
              sx={{
                cursor: "pointer",
                height: "100%",
                transition: "transform 0.2s, box-shadow 0.2s",
                transform: hoveredId === subcategory.id ? "translateY(-5px)" : "none",
                boxShadow: hoveredId === subcategory.id ? 3 : 1,
              }}
              onClick={() => onSelect(subcategory)}
              onMouseEnter={() => setHoveredId(subcategory.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <CardMedia
                component="img"
                height="140"
                image={subcategory.image || "/placeholder.svg?height=140&width=300"}
                alt={subcategory.name}
              />
              <CardContent>
                <Box display="flex" justifyContent="space-between" alignItems="flex-start">
                  <Box>
                    <Typography variant="h6" component="div">
                      {subcategory.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {subcategory.description}
                    </Typography>
                  </Box>
                  <ArrowForward
                    color="primary"
                    sx={{
                      transition: "transform 0.2s",
                      transform: hoveredId === subcategory.id ? "translateX(4px)" : "none",
                    }}
                  />
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  )
}

