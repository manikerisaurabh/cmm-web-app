import { Box, Typography, Grid, Card, CardContent, Container, Button } from "@mui/material"
import Image from "next/image"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import CallMadeOutlinedIcon from '@mui/icons-material/CallMadeOutlined';
const categories = [
  { title: "MISSION", image: "/images/Vendor/mission.png",content:"To create a seamless platfrom where sellers can thrive without worrying about commissions, hiddene fees, or operational challenges" },
  { title: "VISION", image: "/images/Vendor/vision.png",content:"To create a seamless platfrom where sellers can thrive without worrying about commissions, hiddene fees, or operational challenges" },
]

export default function Categories() {
  return (
    <Box sx={{ py: 8,zIndex:1 }}>
      <Container maxWidth="lg">
        <Grid container spacing={10}>
          {categories.map((category) => (
            <Grid item xs={12} sm={6} key={category.title}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "0.3s",
                  background:"#F7EEFF",
                  borderRadius:"20px",
                  boxShadow: "0px 4px 4px 0px #00000040",
                  "&:hover": { boxShadow: 6 },
                }}
              >
                <Box
                                sx={{
                                  position: "relative",
                                  width: "100%",
                                  backgroundImage:"url(/images/Vendor/cardBg.png)",
                                  backgroundSize:"contain",
                                  height: 150,
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                }}
                              >
                    <Image src={category.image}  alt={category.title} width={120} height={120} />

                  </Box>
                <CardContent sx={{ flexGrow: 1,  textAlign: "center" }}>
                  
                  <Box>
                    <Typography variant="h6" component="h3" gutterBottom color="primary">
                      {category.title}
                    </Typography>
                    <Typography  gutterBottom >
                      {category.content}
                    </Typography>
                  </Box>
                  {/* <Button variant="contained" endIcon={<CallMadeIcon />}></Button> */}
                  {/* <CallMadeOutlinedIcon color="primary"  sx={{background:"#fff",borderRadius:"20px",fontSize:"40px"}} /> */}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

