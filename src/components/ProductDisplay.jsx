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
  IconButton,
  Pagination,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material"
import { ArrowBack, FavoriteBorder, Favorite, ShoppingCart, FilterList, Sort } from "@mui/icons-material"

export default function ProductDisplay({ products, onBack, store, subcategory }) {
  const [favorites, setFavorites] = useState({})
  const [sortBy, setSortBy] = useState("popularity")
  const [page, setPage] = useState(1)
  const productsPerPage = 8

  const toggleFavorite = (productId) => {
    setFavorites((prev) => ({
      ...prev,
      [productId]: !prev[productId],
    }))
  }

  const handleSortChange = (event) => {
    setSortBy(event.target.value)
  }

  const handlePageChange = (event, value) => {
    setPage(value)
  }

  // Sort products based on selected option
  const sortedProducts = [...products].sort((a, b) => {
    switch (sortBy) {
      case "priceLow":
        return a.price - b.price
      case "priceHigh":
        return b.price - a.price
      case "rating":
        return b.rating - a.rating
      case "newest":
        return new Date(b.dateAdded) - new Date(a.dateAdded)
      default: // popularity
        return b.popularity - a.popularity
    }
  })

  // Paginate products
  const paginatedProducts = sortedProducts.slice((page - 1) * productsPerPage, page * productsPerPage)

  const pageCount = Math.ceil(products.length / productsPerPage)

  if (!products || products.length === 0) {
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
              Stores
            </Link>
            <Typography color="text.primary">{store?.name || "Store"}</Typography>
          </Breadcrumbs>

          <Button startIcon={<ArrowBack />} onClick={onBack} variant="outlined">
            Back to Stores
          </Button>
        </Box>

        <Typography variant="h5" gutterBottom align="center" sx={{ mb: 3 }}>
          No Products Found
        </Typography>

        <Typography variant="body1" align="center" sx={{ mb: 3 }}>
          We couldn't find any products in this category at the selected store.
        </Typography>

        <Box display="flex" justifyContent="center">
          <Button variant="contained" color="primary" onClick={onBack}>
            Try Another Store
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
          <Link
            color="inherit"
            href="#"
            onClick={(e) => {
              e.preventDefault()
              onBack()
            }}
          >
            {subcategory?.name || "Subcategory"}
          </Link>
          <Typography color="text.primary">{store?.name || "Store"}</Typography>
        </Breadcrumbs>

        <Button startIcon={<ArrowBack />} onClick={onBack} variant="outlined">
          Back to Stores
        </Button>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
        <Typography variant="h5" component="h2">
          Products at {store?.name}
        </Typography>

        <Box sx={{ display: "flex", gap: 2 }}>
          <FormControl variant="outlined" size="small" sx={{ minWidth: 150 }}>
            <InputLabel id="sort-select-label">Sort By</InputLabel>
            <Select
              labelId="sort-select-label"
              id="sort-select"
              value={sortBy}
              onChange={handleSortChange}
              label="Sort By"
              startAdornment={<Sort fontSize="small" sx={{ mr: 1 }} />}
            >
              <MenuItem value="popularity">Popularity</MenuItem>
              <MenuItem value="priceLow">Price: Low to High</MenuItem>
              <MenuItem value="priceHigh">Price: High to Low</MenuItem>
              <MenuItem value="rating">Rating</MenuItem>
              <MenuItem value="newest">Newest First</MenuItem>
            </Select>
          </FormControl>

          <Button variant="outlined" startIcon={<FilterList />}>
            Filter
          </Button>
        </Box>
      </Box>

      <Grid container spacing={3}>
        {paginatedProducts.map((product) => (
          <Grid item xs={12} sm={6} md={3} key={product.id}>
            <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
              <Box sx={{ position: "relative" }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={product.image || "/placeholder.svg?height=200&width=300"}
                  alt={product.name}
                />
                <IconButton
                  sx={{
                    position: "absolute",
                    top: 8,
                    right: 8,
                    bgcolor: "rgba(255, 255, 255, 0.8)",
                    "&:hover": { bgcolor: "rgba(255, 255, 255, 0.9)" },
                  }}
                  onClick={(e) => {
                    e.stopPropagation()
                    toggleFavorite(product.id)
                  }}
                >
                  {favorites[product.id] ? <Favorite color="error" /> : <FavoriteBorder />}
                </IconButton>

                {product.discount && (
                  <Chip
                    label={`${product.discount}% OFF`}
                    color="error"
                    size="small"
                    sx={{
                      position: "absolute",
                      top: 8,
                      left: 8,
                      fontWeight: "bold",
                    }}
                  />
                )}
              </Box>

              <CardContent sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
                <Typography variant="subtitle1" component="h3" gutterBottom>
                  {product.name}
                </Typography>

                <Box display="flex" alignItems="center" sx={{ mb: 1 }}>
                  <Rating value={product.rating} precision={0.5} readOnly size="small" />
                  <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                    ({product.reviewCount})
                  </Typography>
                </Box>

                <Typography variant="body2" color="text.secondary" sx={{ mb: 2, flexGrow: 1 }}>
                  {product.description}
                </Typography>

                <Box display="flex" justifyContent="space-between" alignItems="center">
                  <Box>
                    {product.originalPrice ? (
                      <>
                        <Typography variant="h6" component="span" color="primary" fontWeight="bold">
                          ${product.price.toFixed(2)}
                        </Typography>
                        <Typography
                          variant="body2"
                          component="span"
                          color="text.secondary"
                          sx={{ ml: 1, textDecoration: "line-through" }}
                        >
                          ${product.originalPrice.toFixed(2)}
                        </Typography>
                      </>
                    ) : (
                      <Typography variant="h6" component="span" color="primary" fontWeight="bold">
                        ${product.price.toFixed(2)}
                      </Typography>
                    )}
                  </Box>

                  <IconButton
                    color="primary"
                    sx={{
                      bgcolor: "primary.light",
                      color: "white",
                      "&:hover": { bgcolor: "primary.main" },
                    }}
                  >
                    <ShoppingCart />
                  </IconButton>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {pageCount > 1 && (
        <Box display="flex" justifyContent="center" sx={{ mt: 4 }}>
          <Pagination count={pageCount} page={page} onChange={handlePageChange} color="primary" size="large" />
        </Box>
      )}
    </>
  )
}

