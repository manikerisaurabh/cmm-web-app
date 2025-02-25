// Footer Component
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemText, Box, Container } from "@mui/material";

export default function Footer() {
    return (
      <Box component="footer" sx={{ bgcolor: "primary.main", color: "white", py: 2, textAlign: "center", marginTop: "auto" }}>
        <Container>
          <Typography variant="body1">&copy; {new Date().getFullYear()} Quick eCommerce</Typography>
        </Container>
      </Box>
    );
  }