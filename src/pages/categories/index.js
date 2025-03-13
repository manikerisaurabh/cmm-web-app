import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Link from "next/link";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { CategoryCard } from "@/components/category-card";
import { categories } from "@/lib/data";

export default function CategoriesPage() {
  return (
    <Box maxWidth="lg" mx="auto" px={2} py={4}>
      <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb" sx={{ mb: 3 }}>
        <Typography variant="body2" color="text.primary">
          Categories
        </Typography>
      </Breadcrumbs>

      <Typography variant="h4" fontWeight={700} gutterBottom>
        All Categories
      </Typography>

      <Grid container spacing={3}>
        {categories.map((category) => (
          <Grid item xs={12} sm={6} lg={4} key={category.id}>
            <CategoryCard category={category} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
