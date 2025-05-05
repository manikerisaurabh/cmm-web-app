import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Link from "next/link";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { ProductCard } from "@/components/product-card";
import { getCategoryById, getSubcategoryById, getProductsBySubcategoryId, getVendorsForThisFilter } from "@/lib/data";

export async function getServerSideProps({ params }) {
  console.log('params in subid', params)
  const categoryId = params.categoryId;
  const subcategoryId = params.subcategoryId;
  console.log(categoryId, subcategoryId)
  // if (!categoryId || !subcategoryId) {
  //   return { notFound: true }; // Redirects to the 404 page
  // }

  // const products = getProductsBySubcategoryId(params.subcategoryId);
  const vendors = await getVendorsForThisFilter(categoryId, subcategoryId)
  console.log({ vendors })
  return {
    props: { categoryId, subcategoryId, vendors }, // Pass data as props
  };
}

export default function SubcategoryPage({ category, subcategory, vendors }) {
  return (
    <Box maxWidth="lg" mx="auto" px={2} py={4}>
      <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb" sx={{ mb: 3 }}>
        <Link href="/categories" style={{ textDecoration: "none", color: "inherit" }}>
          <Typography variant="body2">Categories</Typography>
        </Link>
        {/* <Link href={`/categories/${category.id}`} style={{ textDecoration: "none", color: "inherit" }}>
          <Typography variant="body2">{category.name}</Typography>
        </Link> */}
        {/* <Typography variant="body2" color="text.primary">
          {subcategory.name}
        </Typography> */}
      </Breadcrumbs>

      <Box display="flex" flexDirection={{ xs: "column", md: "row" }} justifyContent="space-between" alignItems={{ md: "center" }} gap={2} mb={4}>
        <Box>
          <Typography variant="h4" fontWeight={700} gutterBottom>
            {/* {subcategory.name} */}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {/* {subcategory.description} */}
          </Typography>
        </Box>

      </Box>

      <Typography variant="h5" fontWeight={600} mb={3}>
        Vendors
      </Typography>

      {
        vendors.length > 0 ? (
          <Grid container spacing={3}>
            {vendors.map((vendor) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={vendor.id}>
                {/* <ProductCard product={product} /> */}
                {vendor.user.name}
                {vendor.user.email}
              </Grid>
            ))}
          </Grid>
        ) : (
          <Typography variant="body2" color="text.secondary">
            No products found in this subcategory.
          </Typography>
        )
      }
    </Box >
  );
}
