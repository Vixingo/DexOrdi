import React from "react";
import Hero from "../components/Hero/Hero";
import { Box, useTheme } from "@mui/material";

import Footer from "../components/Footer/Footer";

function LandingPage() {
    const theme = useTheme();
    return (
        <>
            <Box
                sx={{
                    backgroundImage: "url(/img/bg.png)",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundColor:
                        "linear-gradient(66.95deg, #F1F1F1 -0.5%, #FFFFFF 79.09%)",
                }}
            >
                <Hero />
                <Footer />
            </Box>
        </>
    );
}

export default LandingPage;
