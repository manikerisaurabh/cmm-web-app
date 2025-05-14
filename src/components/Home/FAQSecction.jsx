import React from "react";
import {
    Box,
    Container,
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Divider,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const faqs = [
    {
        question: "How does your delivery service work?",
        answer:
            "We offer fast, convenient delivery of a wide range of products — from groceries and daily needs to electronics and fashion. Once you place an order, we aim to deliver it to your doorstep within an hour, depending on your location and product availability.",
    },
    {
        question: "Which areas do you currently serve in Pune?",
        answer:
            "We deliver across multiple neighborhoods in Pune, including Koregaon Park, Baner, Aundh, Viman Nagar, Hadapsar, Kothrud, and many others. Enter your pincode during checkout to confirm service availability in your area.",
    },
    {
        question: "What can I shop for on your platform?",
        answer:
            "Our platform features a diverse selection of categories such as fresh groceries, fruits & vegetables, home appliances, fashion apparel, electronics, personal care, and lifestyle products.",
    },
    {
        question: "How do I track my order?",
        answer:
            "You’ll receive real-time updates via SMS or email once your order is on the way. You can also track the status from your account dashboard or order history page.",
    },
    {
        question: "What if my area is not eligible for fast delivery?",
        answer:
            "If we’re not yet delivering to your area, you’ll be notified at checkout. We’re constantly expanding our service zones, so stay tuned!",
    },
    {
        question: "What payment options do you accept?",
        answer:
            "We accept multiple secure payment methods including UPI, credit/debit cards, net banking, popular wallets, and cash on delivery.",
    },
    {
        question: "Can I return or exchange a product?",
        answer:
            "Yes. We offer easy returns and exchanges for eligible products. Just head to your order page or contact support within the return window.",
    },
    {
        question: "What are your delivery hours?",
        answer:
            "Our deliveries are fulfilled between 10:00 AM and 09:00 PM, all days of the week. Orders placed late in the day may be scheduled for the next available slot.",
    },
    {
        question: "How can I contact customer support?",
        answer:
            "You can reach us via live chat on the website, email, or phone. Visit our Contact Us page for full details and working hours.",
    },
];

export default function FAQSection() {
    return (
        <Box sx={{ py: 8, bgcolor: "#f9f9f9" }}>
            <Container maxWidth="md">
                <Typography
                    variant="h4"
                    component="h2"
                    fontWeight="bold"
                    gutterBottom
                    textAlign="center"
                >
                    Frequently Asked Questions
                </Typography>
                <Divider sx={{ mb: 4 }} />
                {faqs.map((faq, index) => (
                    <Accordion key={index} sx={{ mb: 2, borderRadius: 2, boxShadow: 2 }}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={`faq-${index}-content`}>
                            <Typography fontWeight={600}>{index + 1}. {faq.question}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography color="text.secondary">{faq.answer}</Typography>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </Container>
        </Box>
    );
}
