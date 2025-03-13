import Image from "next/image";
import Link from "next/link";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";

export function ProductCard({ product }) {
  return (
    <Link href={`/products/${product.id}`} style={{ textDecoration: "none" }}>
      <Card sx={{ height: "100%", transition: "box-shadow 0.3s", '&:hover': { boxShadow: 6 } }}>
        <CardContent sx={{ p: 0 }}>
          <Box sx={{ position: "relative", height: 192, width: "100%" }}>
            <Image
              src={product.images[0] || "/placeholder.svg"}
              alt={product.name}
              layout="fill"
              objectFit="cover"
              style={{ borderTopLeftRadius: 4, borderTopRightRadius: 4 }}
            />
          </Box>
          <Box sx={{ p: 2 }}>
            <Typography variant="h6" noWrap>{product.name}</Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1, overflow: "hidden", textOverflow: "ellipsis", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical" }}>
              {product.description}
            </Typography>
            <Box display="flex" alignItems="center" gap={0.5} mb={1}>
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} fontSize="small" sx={{ color: i < Math.floor(product.rating) ? "#FFD700" : "#E0E0E0" }} />
              ))}
              <Typography variant="caption" color="text.secondary">({product.reviewCount})</Typography>
            </Box>
            <Box display="flex" alignItems="center" gap={1}>
              {product.discountPrice ? (
                <>
                  <Typography variant="h6" fontWeight={700}>${product.discountPrice.toFixed(2)}</Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ textDecoration: "line-through" }}>${product.price.toFixed(2)}</Typography>
                </>
              ) : (
                <Typography variant="h6" fontWeight={700}>${product.price.toFixed(2)}</Typography>
              )}
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Link>
  );
}
