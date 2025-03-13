import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardActionArea } from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export function CategoryCard({ category }) {
  return (
    <Link href={`/categories/${category.id}`} passHref>
      <Card sx={{ height: "100%", transition: "box-shadow 0.3s", '&:hover': { boxShadow: 3 } }}>
        <CardActionArea sx={{ p: 2 }}>
          <Box display="flex" justifyContent="space-between" alignItems="start">
            <Box>
              <Typography variant="h6" gutterBottom>
                {category.name}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                {category.description}
              </Typography>
              <Box sx={{ height: 128, position: "relative" }}>
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  fill
                  style={{ objectFit: "contain" }}
                />
              </Box>
            </Box>
            <ArrowForwardIcon sx={{ color: "#6B5DE9", transition: "transform 0.3s", '&:hover': { transform: "translateX(4px)" } }} />
          </Box>
        </CardActionArea>
      </Card>
    </Link>
  );
}
