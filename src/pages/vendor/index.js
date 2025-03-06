import React from "react";
import { Container, Grid, Card, CardContent, Typography, Button, Box } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Welcome from "@/components/Vendor/Welcome";
import Categories from "@/components/Vendor/Categories";
import HowToShop from "@/components/Home/HowToShop";
import Delivery from "@/components/Home/Delivery";
import Testimonials from "@/components/Home/Testimonials";
import SocialMedia from "@/components/Home/SocialMedia";
import Image from "next/image";
import VendorHero from "@/components/Vendor/Hero";

// Home Page with Slider and Sections
export default function Vendor() {

  return (
    <>
      <VendorHero />
      <Welcome />
      <Box sx={{ position: "relative" }}>
        <Image
          src="/images/welcome/roundbg.png" // Replace with your image URL
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          className="secondbg"
          sx={{
            position: "absolute",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Categories />
        <HowToShop />
        <Delivery />
      </Box>
      <Box sx={{ position: "relative" }}>
        <Image
          src="/images/welcome/roundbglast.png" // Replace with your image URL
          alt="Hero Background 2"
          layout="fill"
          objectFit="contain"
          className="thirdbg"
        />
      <Testimonials />
      <SocialMedia />
      </Box>
    </>
  );
}
