import React, { useContext } from "react";
import { ThemeProviderWrapper, ThemeContext } from "./ThemeProvider";
import { Button, Box, Typography, Paper } from "@mui/material";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
const App = () => {
    const { toggleTheme } = useContext(ThemeContext);

    return (
        <>
            <BrowserRouter>
                <Box
                    sx={{
                        minHeight: "100vh",
                        // display: "flex",
                        // flexDirection: "column",
                        // justifyContent: "center",
                        // alignItems: "center",
                        borderRadius: "0",
                    }}
                >
                    <Navbar />
                    <Routes>
                        {" "}
                        <Route exact path="/" element={<LandingPage />} />
                    </Routes>
                </Box>
            </BrowserRouter>
        </>
    );
};

export default App;
