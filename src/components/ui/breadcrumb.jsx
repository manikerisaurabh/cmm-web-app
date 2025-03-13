import Link from "next/link";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import HomeIcon from "@mui/icons-material/Home";
import Box from "@mui/material/Box";

export function Breadcrumb({ items }) {
  return (
    <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb" sx={{ mb: 2 }}>
      <Link href="/" style={{ display: "flex", alignItems: "center", color: "inherit", textDecoration: "none" }}>
        <HomeIcon fontSize="small" sx={{ mr: 0.5 }} />
        <Typography variant="body2">Home</Typography>
      </Link>
      {items.map((item, index) => (
        index === items.length - 1 ? (
          <Typography key={item.href} variant="body2" color="text.primary">
            {item.label}
          </Typography>
        ) : (
          <Link key={item.href} href={item.href} style={{ color: "inherit", textDecoration: "none" }}>
            <Typography variant="body2">{item.label}</Typography>
          </Link>
        )
      ))}
    </Breadcrumbs>
  );
}
