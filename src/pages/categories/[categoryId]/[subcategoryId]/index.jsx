import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Link from "next/link";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { ProductCard } from "@/components/product-card";
import { getCategoryById, getSubcategoryById, getProductsBySubcategoryId } from "@/lib/data";

export async function getServerSideProps({ params }) {
  const category = getCategoryById(params.categoryId);
  const subcategory = getSubcategoryById(params.subcategoryId);

  if (!category || !subcategory || subcategory.categoryId !== params.categoryId) {
    return { notFound: true }; // Redirects to the 404 page
  }

  const products = getProductsBySubcategoryId(params.subcategoryId);

  return {
    props: { category, subcategory, products }, // Pass data as props
  };
}

export default function SubcategoryPage({ category, subcategory, products }) {
  return (
    <Box maxWidth="lg" mx="auto" px={2} py={4}>
      <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb" sx={{ mb: 3 }}>
        <Link href="/categories" style={{ textDecoration: "none", color: "inherit" }}>
          <Typography variant="body2">Categories</Typography>
        </Link>
        <Link href={`/categories/${category.id}`} style={{ textDecoration: "none", color: "inherit" }}>
          <Typography variant="body2">{category.name}</Typography>
        </Link>
        <Typography variant="body2" color="text.primary">
          {subcategory.name}
        </Typography>
      </Breadcrumbs>

      <Box display="flex" flexDirection={{ xs: "column", md: "row" }} justifyContent="space-between" alignItems={{ md: "center" }} gap={2} mb={4}>
        <Box>
          <Typography variant="h4" fontWeight={700} gutterBottom>
            {subcategory.name}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {subcategory.description}
          </Typography>
        </Box>
        <Link href={`/categories/${category.id}`} passHref>
          <Button variant="outlined">Back to {category.name}</Button>
        </Link>
      </Box>

      <Typography variant="h5" fontWeight={600} mb={3}>
        Products
      </Typography>

      {products.length > 0 ? (
        <Grid container spacing={3}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography variant="body2" color="text.secondary">
          No products found in this subcategory.
        </Typography>
      )}
    </Box>
  );
}
