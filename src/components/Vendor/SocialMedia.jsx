import { Box, Typography, Grid, Card, Container } from "@mui/material"
import Image from "next/image"

export default function SocialMedia() {
  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h4" component="h2" fontWeight="bold" gutterBottom>
          Social Media
        </Typography>
        <Grid container spacing={3}>
          {[1, 2, 3].map((item) => (
            <Grid item xs={12} md={4} key={item}>
              <Card sx={{ aspectRatio: "1/1", position: "relative", overflow: "hidden" }}>
                <Image
                  src="/images/Social/blamk.png?height=400&width=400"
                  alt={`Social media post ${item}`}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

