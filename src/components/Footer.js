import { Box, Typography, Grid, Container } from "@mui/material";
import Image from "next/image";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";

export default function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: "primary.main", backgroundImage:"url(images/Vendor/cardBg.png)",backgroundSize:"contain", color: "white", py: 4, mt: "auto" }}>

      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Image 
              src="/images/logo.png"  
              fill 
              objectFit="contain" 
              className="footerlogo" 
              sx={{ display: { xs: 'none', sm: 'block' }}} 
            />
            <Box sx={{ display: "flex", alignItems: "flex-start", mb: 2 }}>
              <LocationOnIcon sx={{ mr: 1, mt: 0.5 }} />
              <Typography variant="body2">
                650, Kasba Peth, Waiker Heights Building, 3rd floor, Pune 411011
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <PhoneIcon sx={{ mr: 1 }} />
              <Typography variant="body2">+1 234 567 8900</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ height: 200, position: "relative", borderRadius: 2, overflow: "hidden" }}>
              <Image src="/placeholder.svg?height=200&width=400" alt="Map" fill style={{ objectFit: "cover" }} />
            </Box>
          </Grid>
        </Grid>

        {/* Copyright Section */}
        <Box sx={{ textAlign: "center", mt: 4 }}>
          <Typography variant="body2" color="inherit">
            &copy; {new Date().getFullYear()} City Center Mall. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
