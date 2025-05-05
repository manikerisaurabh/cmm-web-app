import { useState, useEffect } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Button from "@mui/material/Button";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { SubcategoryCard } from "@/components/subcategory-card";
import { getCategoryById, getCategoryInfo, getSubcategoriesByCategoryId, getSubcategoryById } from "@/lib/data";

export default function CategoryPage({ categoryId, categoryInfo }) {
  const [subCategories, setSubCategories] = useState([])
  useEffect(() => {
    getSubcategories();
  }, [])

  const getSubcategories = async () => {
    const data = await getSubcategoriesByCategoryId(categoryId)
    setSubCategories(data)
  }

  console.log("categoryId from props : ", categoryId)
  if (!categoryId) {
    return notFound();
  }

  return (
    <Box maxWidth="lg" mx="auto" px={2} py={4}>
      <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb" sx={{ mb: 3 }}>
        <Link href="/categories" style={{ textDecoration: "none", color: "inherit" }}>
          <Typography variant="body2">Categories</Typography>
        </Link>
        <Typography variant="body2" color="text.primary">
        </Typography>
      </Breadcrumbs>

      <Box display="flex" flexDirection={{ xs: "column", md: "row" }} justifyContent="space-between" alignItems={{ md: "center" }} gap={2} mb={4}>
        <Box>
          <Typography variant="h4" fontWeight={700} gutterBottom>
            {categoryInfo.category}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {/* {"category".description} */}
          </Typography>
        </Box>
        <Link href="/categories" passHref>
          <Button variant="outlined">Back to Categories</Button>
        </Link>
      </Box>

      <Typography variant="h5" fontWeight={600} mb={3}>
        Subcategories
      </Typography>

      {subCategories.length > 0 ? (
        <Grid container spacing={3}>
          {subCategories.map((subcategory) => (
            <Grid item xs={12} sm={6} lg={4} key={subcategory.id}>
              <SubcategoryCard subcategory={subcategory} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography variant="body2" color="text.secondary">
          No subcategories found for this category.
        </Typography>
      )}
    </Box>
  );
}

// Fetch "category" data on server-side
export async function getServerSideProps({ params }) {
  console.log(params.categoryId)
  const categoryId = params.categoryId;
  const categoryInfo = await getCategoryInfo(categoryId)
  return {
    props: { categoryId, categoryInfo },
  };
}
