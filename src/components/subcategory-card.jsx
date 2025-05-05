import Image from "next/image";
import Link from "next/link";
import { Card, CardActionArea } from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export function SubcategoryCard({ subcategory }) {
  return (
    <Link href={`/categories/${subcategory.categoryId}/${subcategory.id}`} passHref>
      <Card sx={{ height: "100%", transition: "box-shadow 0.3s", '&:hover': { boxShadow: 3 } }}>
        <CardActionArea sx={{ p: 2 }}>
          <Box display="flex" justifyContent="space-between" alignItems="start">
            <Box>
              <Typography variant="h6" gutterBottom>
                {subcategory.name}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                {subcategory.description}
              </Typography>
              <Box sx={{ height: 128, position: "relative" }}>
                <img
                  src={subcategory.image || "/placeholder.svg"}
                  alt={subcategory.name}
                  fill
                  style={{ objectFit: "contain" }}
                />
              </Box>
            </Box>
          </Box>
        </CardActionArea>
      </Card>
    </Link>
  );
}