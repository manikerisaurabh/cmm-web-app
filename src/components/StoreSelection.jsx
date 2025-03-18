"use client"

import { useState } from "react"
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Button,
  Breadcrumbs,
  Link,
  Chip,
  Rating,
  Divider,
} from "@mui/material"
import { ArrowForward, ArrowBack, LocationOn, AccessTime, LocalOffer } from "@mui/icons-material"

export default function StoreSelection({ stores, onSelect, onBack, subcategory }) {
  const [hoveredId, setHoveredId] = useState(null)

  if (!stores || stores.length === 0) {
    return (
      <Box>
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
            <Link
              color="inherit"
              href="#"
              onClick={(e) => {
                e.preventDefault()
                onBack()
              }}
            >
              {subcategory?.categoryName || "Category"}
            </Link>
            <Typography color="text.primary">{subcategory?.name || "Subcategory"}</Typography>
          </Breadcrumbs>

          <Button startIcon={<ArrowBack />} onClick={onBack} variant="outlined">
            Back to Subcategories
          </Button>
        </Box>

        <Typography variant="h5" gutterBottom align="center" sx={{ mb: 3 }}>
          No Stores Found
        </Typography>

        <Typography variant="body1" align="center" sx={{ mb: 3 }}>
          We couldn't find any stores near your location that offer products in this category.
        </Typography>

        <Box display="flex" justifyContent="center">
          <Button variant="contained" color="primary" onClick={onBack}>
            Try Another Subcategory
          </Button>
        </Box>
      </Box>
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
          <Link
            color="inherit"
            href="#"
            onClick={(e) => {
              e.preventDefault()
              onBack()
            }}
          >
            {subcategory?.categoryName || "Category"}
          </Link>
          <Typography color="text.primary">{subcategory?.name || "Subcategory"}</Typography>
        </Breadcrumbs>

        <Button startIcon={<ArrowBack />} onClick={onBack} variant="outlined">
          Back to Subcategories
        </Button>
      </Box>

      <Typography variant="h5" gutterBottom align="center" sx={{ mb: 1 }}>
        Stores Near You
      </Typography>

      <Typography variant="body1" align="center" sx={{ mb: 3 }}>
        Select a store to browse products in {subcategory?.name}
      </Typography>

      <Grid container spacing={3}>
        {stores.map((store) => (
          <Grid item xs={12} sm={6} key={store.id}>
            <Card
              sx={{
                cursor: "pointer",
                height: "100%",
                transition: "transform 0.2s, box-shadow 0.2s",
                transform: hoveredId === store.id ? "translateY(-5px)" : "none",
                boxShadow: hoveredId === store.id ? 3 : 1,
              }}
              onClick={() => onSelect(store)}
              onMouseEnter={() => setHoveredId(store.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <CardMedia
                component="img"
                height="160"
                image={store.image || "/placeholder.svg?height=160&width=400"}
                alt={store.name}
              />
              <CardContent>
                <Box display="flex" justifyContent="space-between" alignItems="flex-start">
                  <Box>
                    <Typography variant="h6" component="div">
                      {store.name}
                    </Typography>

                    <Box display="flex" alignItems="center" sx={{ mb: 1 }}>
                      <Rating value={store.rating} precision={0.5} readOnly size="small" />
                      <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                        ({store.reviewCount} reviews)
                      </Typography>
                    </Box>

                    <Box display="flex" alignItems="center" sx={{ mb: 1 }}>
                      <LocationOn fontSize="small" color="action" sx={{ mr: 0.5 }} />
                      <Typography variant="body2" color="text.secondary">
                        {store.distance} km away • {store.address}
                      </Typography>
                    </Box>

                    <Box display="flex" alignItems="center" sx={{ mb: 1 }}>
                      <AccessTime fontSize="small" color="action" sx={{ mr: 0.5 }} />
                      <Typography variant="body2" color="text.secondary">
                        {store.isOpen ? "Open Now" : "Closed"} • {store.hours}
                      </Typography>
                    </Box>

                    <Divider sx={{ my: 1 }} />

                    <Box display="flex" alignItems="center">
                      <LocalOffer fontSize="small" color="primary" sx={{ mr: 0.5 }} />
                      <Typography variant="body2">
                        {store.productCount} products in {subcategory?.name}
                      </Typography>
                    </Box>

                    {store.offers && (
                      <Box sx={{ mt: 1 }}>
                        <Chip label={store.offers} size="small" color="secondary" variant="outlined" />
                      </Box>
                    )}
                  </Box>
                  <ArrowForward
                    color="primary"
                    sx={{
                      transition: "transform 0.2s",
                      transform: hoveredId === store.id ? "translateX(4px)" : "none",
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

