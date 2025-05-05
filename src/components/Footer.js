import {
    Box,
    Typography,
    Grid,
    Container,
    Button,
    Stack,
    Divider,
} from "@mui/material";
import Image from "next/image";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";

export default function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                bgcolor: "primary.main",
                backgroundImage: "url(images/Vendor/cardBg.png)",
                backgroundSize: "contain",
                color: "white",
                py: 4,
                mt: "auto",
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={6}>
                    {/* Left: Logo + Contact Info */}
                    <Grid item xs={12} md={4}>
                        <Box sx={{ mb: 2 }}>
                            <Image
                                src="/images/logo.png"
                                alt="Logo"
                                width={160}
                                height={50}
                                style={{ objectFit: "contain" }}
                            />
                        </Box>
                        <Stack spacing={1.5}>
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "flex-start",
                                }}
                            >
                                <LocationOnIcon
                                    sx={{ mr: 1, mt: "3px", color: "#AAB3BF" }}
                                />
                                <Typography variant="body2" color="gray.300">
                                    650, Kasba Peth, Waiker Heights Building,
                                    3rd Floor, Pune 411011
                                </Typography>
                            </Box>
                            <Box sx={{ display: "flex", alignItems: "center" }}>
                                <PhoneIcon sx={{ mr: 1, color: "#AAB3BF" }} />
                                <Typography variant="body2" color="gray.300">
                                    +91 705 709 7790
                                </Typography>
                            </Box>
                        </Stack>
                    </Grid>

                    {/* Center: Map */}
                    <Grid item xs={12} md={4}>
                        <Typography variant="h6" gutterBottom>
                            Our Location
                        </Typography>
                        <Box
                            sx={{
                                position: "relative",
                                width: "100%",
                                height: 180,
                                borderRadius: 2,
                                overflow: "hidden",
                                boxShadow: 2,
                            }}
                        >
                            <Image
                                src="/images/Footer/map.jpeg"
                                alt="Map"
                                fill
                                style={{ objectFit: "cover" }}
                            />
                        </Box>
                    </Grid>

                    {/* Right: Download App */}
                    {/* Right: Download App */}
                    <Grid item xs={12} md={4}>
                        <Button
                            variant="outlined"
                            fullWidth
                            sx={{
                                borderColor: "#6C6AED",
                                color: "#fff",
                                fontWeight: 600,
                                fontSize: "1rem",
                                px: 4,
                                py: 1.5,
                                textTransform: "none",
                                borderRadius: "10px",
                                transition: "all 0.3s ease",
                                backgroundColor: "transparent",
                                "&:hover": {
                                    backgroundColor: "gray",
                                    color: "#fff",
                                    boxShadow:
                                        "0 4px 15px rgba(108, 106, 237, 0.4)",
                                },
                            }}
                        >
                            Download It
                        </Button>

                        <Stack direction="row" spacing={2} sx={{ mt: 3 }}>
                            <Box
                                sx={{
                                    position: "relative",
                                    width: 140,
                                    height: 48,
                                    borderRadius: 2,
                                    overflow: "hidden",
                                    boxShadow: 1,
                                    backgroundColor: "#fff",
                                }}
                            >
                                <Image
                                    src="/images/home/playstore.png"
                                    alt="Play Store"
                                    fill
                                    style={{
                                        objectFit: "contain",
                                        padding: "4px",
                                    }}
                                />
                            </Box>
                            <Box
                                sx={{
                                    position: "relative",
                                    width: 140,
                                    height: 48,
                                    borderRadius: 2,
                                    overflow: "hidden",
                                    boxShadow: 1,
                                    backgroundColor: "#fff",
                                }}
                            >
                                <Image
                                    src="/images/home/Appstore.png"
                                    alt="App Store"
                                    fill
                                    style={{
                                        objectFit: "contain",
                                        padding: "4px",
                                    }}
                                />
                            </Box>
                        </Stack>
                    </Grid>
                </Grid>

                <Divider sx={{ bgcolor: "#2B3A55", my: 4 }} />

                {/* Footer Bottom */}
                <Box textAlign="center">
                    <Typography variant="body2" sx={{ color: "#AAB3BF" }}>
                        &copy; {new Date().getFullYear()} City Center Mall. All
                        rights reserved.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}
