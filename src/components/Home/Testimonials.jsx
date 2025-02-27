import React from "react";
import { Box, Typography, Card, CardContent, Container } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    text: `"I love how City Center Mall connects small businesses with customers. As a seller, I've gained great exposure and reached more buyers than ever. Their platform is easy to use, and their team is always supportive."`,
    author: "Rohan Mehta",
    bgColor: "#FFCDD2",
  },
  {
    text: `"City Center Mall made my shopping so much easier! I found everything I needed in one place, from home essentials to trendy outfits. The online shopping experience was smooth, and the delivery was super fast!"`,
    author: "Aditi Sharma",
    bgColor: "#FFF9C4",
  },
  {
    text: `"Great prices, amazing product range, and excellent customer service! Whether I visit the store or shop online, I always have a seamless shopping experience. Highly recommended!"`,
    author: "Sneha Verma",
    bgColor: "#E1BEE7",
  },
  {
    text: `"Great prices, amazing product range, and excellent customer service! Whether I visit the store or shop online, I always have a seamless shopping experience. Highly recommended!"`,
    author: "Sneha Verma",
    bgColor: "#E1BEE7",
  },
];

export default function Testimonials() {
  return (
      <Container maxWidth="lg">
    <Box sx={{ py: 5, textAlign: "center" }}>
      <Typography variant="h4" gutterBottom>
        Testimonials
      </Typography>
      <Swiper
        modules={[Pagination]}
        // slidesPerView={3}
        spaceBetween={0}
        // centeredSlides
        // lazy={true}
        pagination={{ clickable: true }}
        breakpoints={{
          512: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        style={{ paddingBottom: "40px" }}
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <Card
              sx={{
                backgroundColor: item.bgColor,
                borderRadius: "20px",
                boxShadow: 3,
                px: 3,
                py: 4,
                mx: 2,
                position: "relative",
              }}
            >
              <CardContent>
                <Typography variant="h6" sx={{ color: "#FFC107", fontSize: "24px", mb: 1 }}>
                  ⭐⭐⭐⭐⭐
                </Typography>
                <Typography variant="body1" sx={{ fontSize: "1rem" }}>
                  {item.text}
                </Typography>
                <Typography variant="subtitle1" sx={{ fontWeight: 600, mt: 2 }}>
                  — {item.author}
                </Typography>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
    </Container>
  );
}
