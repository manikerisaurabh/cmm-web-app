import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Box, Grid, Typography, Button, Breadcrumbs, RadioGroup, FormControlLabel, Radio } from "@mui/material";
import { ArrowBack, Star, Check } from "@mui/icons-material";
import { getProductById, getCategoryById, getSubcategoryById } from "@/lib/data";

export async function getServerSideProps({ params }) {
  const product = getProductById(params.productId);
  if (!product) return { notFound: true };

  const category = getCategoryById(product.categoryId);
  const subcategory = getSubcategoryById(product.subcategoryId);
  if (!category || !subcategory) return { notFound: true };

  return { props: { product, category, subcategory } };
}

export default function ProductPage({ product, category, subcategory }) {
  return (
    <Box maxWidth="lg" mx="auto" px={2} py={4}>
      {/* Breadcrumbs */}
      <Breadcrumbs separator="›" aria-label="breadcrumb" sx={{ mb: 3 }}>
        <Link href="/categories" style={{ textDecoration: "none", color: "inherit" }}>
          <Typography variant="body2">Categories</Typography>
        </Link>
        <Link href={`/categories/${category.id}`} style={{ textDecoration: "none", color: "inherit" }}>
          <Typography variant="body2">{category.name}</Typography>
        </Link>
        <Link href={`/categories/${category.id}/${subcategory.id}`} style={{ textDecoration: "none", color: "inherit" }}>
          <Typography variant="body2">{subcategory.name}</Typography>
        </Link>
        <Typography variant="body2" color="text.primary">
          {product.name}
        </Typography>
      </Breadcrumbs>

      {/* Back Button */}
      <Button startIcon={<ArrowBack />} component={Link} href={`/categories/${category.id}/${subcategory.id}`} sx={{ mb: 3 }}>
        Back to {subcategory.name}
      </Button>

      {/* Product Content */}
      <Grid container spacing={4}>
        {/* Product Images */}
        <Grid item xs={12} md={6}>
          <Box position="relative" height={350} border={1} borderColor="grey.300" borderRadius={2} overflow="hidden">
            <Image src={product.images[0] || "/placeholder.svg"} alt={product.name} fill style={{ objectFit: "contain" }} />
          </Box>
          <Grid container spacing={1} mt={2}>
            {product.images.map((image, index) => (
              <Grid item xs={3} key={index}>
                <Box position="relative" height={80} border={1} borderColor="grey.300" borderRadius={1} overflow="hidden">
                  <Image src={image || "/placeholder.svg"} alt={`Product Image ${index + 1}`} fill style={{ objectFit: "contain" }} />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* Product Details */}
        <Grid item xs={12} md={6}>
          <Typography variant="h4" fontWeight={700} gutterBottom>
            {product.name}
          </Typography>

          {/* Rating */}
          <Box display="flex" alignItems="center" gap={1} mb={2}>
            {[...Array(5)].map((_, i) => (
              <Star key={i} sx={{ color: i < Math.floor(product.rating) ? "yellow" : "grey.400" }} />
            ))}
            <Typography variant="body2" color="text.secondary">
              ({product.reviewCount} reviews)
            </Typography>
          </Box>

          {/* Price & Discount */}
          <Box display="flex" alignItems="center" gap={2} mb={2}>
            <Typography variant="h4" fontWeight={700} color="primary">
              ${product.discountPrice ? product.discountPrice.toFixed(2) : product.price.toFixed(2)}
            </Typography>
            {product.discountPrice && (
              <>
                <Typography variant="body1" sx={{ textDecoration: "line-through", color: "grey.500" }}>
                  ${product.price.toFixed(2)}
                </Typography>
                <Typography variant="body2" color="green">
                  {Math.round(((product.price - product.discountPrice) / product.price) * 100)}% OFF
                </Typography>
              </>
            )}
          </Box>

          <Typography variant="body1" color="text.secondary" mb={2}>
            {product.description}
          </Typography>

          {/* Features */}
          <Box mb={2}>
            <Typography variant="h6" fontWeight={600} mb={1}>
              Key Features
            </Typography>
            <ul style={{ paddingLeft: "16px" }}>
              {product.features.map((feature, index) => (
                <li key={index} style={{ display: "flex", alignItems: "center", marginBottom: "4px" }}>
                  <Check sx={{ color: "green", mr: 1 }} />
                  {feature}
                </li>
              ))}
            </ul>
          </Box>

          {/* Delivery Options */}
          <Box mb={2}>
            <Typography variant="h6" fontWeight={600} mb={1}>
              Delivery Options
            </Typography>
            <RadioGroup defaultValue={product.deliveryOptions[0].id}>
              {product.deliveryOptions.map((option) => (
                <FormControlLabel
                  key={option.id}
                  value={option.id}
                  control={<Radio />}
                  label={
                    <>
                      <Typography variant="body1" fontWeight={500}>
                        {option.name} - ${option.price.toFixed(2)}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {option.description}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {option.estimatedDelivery}
                      </Typography>
                    </>
                  }
                  sx={{ mb: 1 }}
                />
              ))}
            </RadioGroup>
          </Box>

          {/* Action Buttons */}
          <Box display="flex" gap={2}>
            <Button variant="contained" color="primary" size="large">
              Add to Cart
            </Button>
            <Button variant="outlined" size="large">
              Add to Wishlist
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
