import { Box, Typography, Card, CardContent, Container } from "@mui/material"
import StarIcon from "@mui/icons-material/Star"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const testimonials = [
  {
    content: "Great service and fast delivery! The app is very user-friendly and the products are high quality.",
    bgColor: "#FFF0F5",
  },
  {
    content:
      "I love how convenient it is to shop from home. The delivery is always on time and the staff is very professional.",
    bgColor: "#FFFACD",
  },
  {
    content: "Amazing selection of products and competitive prices. Will definitely continue shopping here!",
    bgColor: "#E6E6FA",
  },
]

export default function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h4" component="h2" fontWeight="bold" gutterBottom>
          Testimonials
        </Typography>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <Box key={index} sx={{ p: 1 }}>
              <Card sx={{ height: "100%", backgroundColor: testimonial.bgColor }}>
                <CardContent>
                  <Box sx={{ display: "flex", mb: 2 }}>
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} sx={{ color: "gold" }} />
                    ))}
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    {testimonial.content}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Slider>
      </Container>
    </Box>
  )
}

