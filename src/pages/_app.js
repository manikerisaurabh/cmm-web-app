import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import { Container } from "@mui/material";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Poppins } from "next/font/google"; // Import Poppins from Next.js
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
          border:"1px solid #fff"
        },
      },
    },
  },
});


function MyApp({ Component, pageProps }) {
  return (
    <main className={poppins.className}>
    <SessionProvider session={pageProps.session}>
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
