import { ThemeProvider, createTheme } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import Hero from "@/components/sections/Hero"
import Welcome from "@/components/sections/Welcome"
import Categories from "@/components/sections/Categories"
import HowToShop from "@/components/sections/HowToShop"
import Delivery from "@/components/sections/Delivery"
import Testimonials from "@/components/sections/Testimonials"
import SocialMedia from "@/components/sections/SocialMedia"

const theme = createTheme({
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
  },
  palette: {
    primary: {
      main: "#6B5DE9",
    },
    secondary: {
      main: "#FFA500",
    },
  },
})

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <Header />
        <main>
          <Hero />
          <Welcome />
          <Categories />
          <HowToShop />
          <Delivery />
          <Testimonials />
          <SocialMedia />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

