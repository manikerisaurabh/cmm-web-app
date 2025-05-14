import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import { Container } from "@mui/material";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Poppins } from "next/font/google"; // Import Poppins from Next.js
import SEO from "@/components/SEO";
const poppins = Poppins({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"], // Choose required weights
    display: "swap",
});

const theme = createTheme({
    palette: {
        primary: {
            main: "#6C6AE2", // Your primary color
        },
        secondary: {
            main: "#FF4081",
        },
    },
    typography: {
        fontFamily: "Poppins, sans-serif", // Apply Poppins to Material-UI
        button: {
            textTransform: "none", // Prevents uppercase text in buttons
            fontWeight: "bold",
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: "50px", // Rounded corners
                    border: "1px solid #fff",
                },
            },
        },
    },
});

function MyApp({ Component, pageProps }) {
    return (
        <main className={poppins.className}>
            <SessionProvider session={pageProps.session}>
                <SEO
                    title="City Center Mall "
                    description="Shop top brands across electronics, fashion, home appliances, and more at City Center Mall — with fast 60-minute delivery, secure checkout, and unbeatable prices."
                    image="https://www.citycentermall.com/og-image.jpeg"
                    url="https://www.citycentermall.com/"
                />
                <ThemeProvider theme={theme}>
                    <Navbar />
                    {/* <Sidebar /> */}
                    {/* <Container > */}
                    <Component {...pageProps} />
                    {/* </Container> */}
                    <Footer />
                </ThemeProvider>
            </SessionProvider>
        </main>
    );
}

export default MyApp;
