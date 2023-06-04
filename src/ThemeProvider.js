import React, { useState } from "react";
import {
    ThemeProvider as MuiThemeProvider,
    createTheme,
} from "@mui/material/styles";
export const ThemeContext = React.createContext();

export const ThemeProvider = ({ children }) => {
    const [themeMode, setThemeMode] = useState("light");

    const toggleTheme = () => {
        const newThemeMode = themeMode === "light" ? "dark" : "light";
        setThemeMode(newThemeMode);
    };

    const theme = createTheme({
        palette: {
            mode: themeMode,
            primary: { main: "#6900FF" },
            background: {
                default: themeMode === "light" ? "" : "#000000",
                paper: themeMode === "light" ? "#ffffff" : "#1B1B1B",
            },
        },

        typography: {
            fontFamily: "League Spartan",
            h1: {
                fontSize: "59px",
                lineHeight: "120%",
                fontWeight: "700",
                "@media (max-width:600px)": {
                    fontSize: "32px",
                },
            },
            h2: {
                fontSize: "32px",
                fontWeight: "700",
                "@media (max-width:600px)": {
                    fontSize: "28px",
                },
            },
            h3: {
                fontSize: "24px",
                fontWeight: "700",
                "@media (max-width:600px)": {
                    fontSize: "14px",
                },
            },
            h4: {
                fontSize: "25px",
                fontWeight: "400",
            },
            h5: {
                fontSize: "20px",
                fontWeight: "600",
            },
            h6: {
                fontSize: "18px",
                fontWeight: "400",
            },
            subtitle1: {
                fontSize: "14px",
                color: "rgba(255,255,255,0.6)",
            },
            subtitle2: {
                fontSize: "12px",
            },
        },
    });

    return (
        <ThemeContext.Provider value={{ themeMode, toggleTheme }}>
            <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>{" "}
        </ThemeContext.Provider>
    );
};
