import { Box, Typography, Container } from "@mui/material"

export default function Welcome() {
  return (
    <Box sx={{ py: 6, backgroundColor: "#FFF8E7" }}>
      <Container maxWidth="lg">
        <Typography variant="body1" align="center" sx={{ maxWidth: "800px", margin: "0 auto" }}>
          We connect both new and experienced sellers to construct from home. From home appliances to trendy clothing
          and the latest electronics, we offer everything at your fingertips. You can shop with us from home, you can
          sell with us from home. If you can buy it, we can deliver it to you. If you can ship it, we can sell it for
          you.
        </Typography>
      </Container>
    </Box>
  )
}

