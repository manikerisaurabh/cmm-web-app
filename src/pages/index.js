import React from "react";
import { Container, Grid, Card, CardContent, Typography, Button, Box } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Welcome from "@/components/Home/Welcome";
import Categories from "@/components/Home/Categories";
import HowToShop from "@/components/Home/HowToShop";
import Delivery from "@/components/Home/Delivery";
import Testimonials from "@/components/Home/Testimonials";
import SocialMedia from "@/components/Home/SocialMedia";
import Hero from "@/components/Home/Hero";

// Home Page with Slider and Sections
export default function HomePage() {
  const slides = [
    { title: "Fast & Reliable Delivery", description: "Get your orders delivered in no time!" },
    { title: "Wide Range of Products", description: "Shop from multiple vendors at City Center Mall." },
    { title: "Exclusive Deals & Discounts", description: "Save more with special offers!" }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <>
      <Hero />
      <Welcome />
      <Categories />
      <HowToShop />
      <Delivery />
      <Testimonials />
      <SocialMedia />
    </>
  );
}