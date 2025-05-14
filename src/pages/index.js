import React from "react";
import {
    Container,
    Grid,
    Card,
    CardContent,
    Typography,
    Button,
    Box,
} from "@mui/material";
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
import Image from "next/image";
import { Height } from "@mui/icons-material";
import FAQSection from "@/components/Home/FAQSecction";

// Home Page with Slider and Sections
export default function HomePage() {
    const slides = [
        {
            title: "Fast & Reliable Delivery",
            description: "Get your orders delivered in no time!",
        },
        {
            title: "Wide Range of Products",
            description: "Shop from multiple vendors at City Center Mall.",
        },
        {
            title: "Exclusive Deals & Discounts",
            description: "Save more with special offers!",
        },
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
                <FAQSection />
            </Box>
        </>
    );
}
