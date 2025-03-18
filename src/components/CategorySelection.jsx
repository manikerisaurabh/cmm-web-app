"use client"

import { useState } from "react"
import { Grid, Card, CardContent, CardMedia, Typography, Box, Skeleton } from "@mui/material"
import { ArrowForward } from "@mui/icons-material"

export default function CategorySelection({ categories, onSelect }) {
  const [hoveredId, setHoveredId] = useState(null)

  if (!categories || categories.length === 0) {
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
      <Typography variant="h5" gutterBottom align="center" sx={{ mb: 3 }}>
        Select a Category to Begin
      </Typography>

      <Grid container spacing={3}>
        {categories.map((category) => (
          <Grid item xs={12} sm={6} md={4} key={category.id}>
            <Card
              sx={{
                cursor: "pointer",
                height: "100%",
                transition: "transform 0.2s, box-shadow 0.2s",
                transform: hoveredId === category.id ? "translateY(-5px)" : "none",
                boxShadow: hoveredId === category.id ? 3 : 1,
              }}
              onClick={() => onSelect(category)}
              onMouseEnter={() => setHoveredId(category.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <CardMedia
                component="img"
                height="140"
                image={category.image || "/placeholder.svg?height=140&width=300"}
                alt={category.name}
              />
              <CardContent>
                <Box display="flex" justifyContent="space-between" alignItems="flex-start">
                  <Box>
                    <Typography variant="h6" component="div">
                      {category.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {category.description}
                    </Typography>
                  </Box>
                  <ArrowForward
                    color="primary"
                    sx={{
                      transition: "transform 0.2s",
                      transform: hoveredId === category.id ? "translateX(4px)" : "none",
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

