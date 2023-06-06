import {
    Box,
    Button,
    Container,
    Grid,
    Typography,
    useTheme,
} from "@mui/material";
import React, { useContext } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import KeyboardDoubleArrowRightRoundedIcon from "@mui/icons-material/KeyboardDoubleArrowRightRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import { ThemeContext } from "../../ThemeProvider";
function Hero() {
    const theme = useTheme();
    const { themeMode } = useContext(ThemeContext);

    return (
        <>
            <Container className="hero" maxWidth="xl">
                <Grid container justifyContent={"space-between"} sx={{ pt: 3 }}>
                    <Grid item md={6} alignSelf={"center"}>
                        <Box sx={{ maxWidth: "650px", margin: "0 auto" }}>
                            <Typography
                                variant="h1"
                                sx={{ pb: 5, pt: { xs: 5 } }}
                            >
                                The 1st AMM Dex & DAO based on{" "}
                                <Typography
                                    variant="h1"
                                    component={"span"}
                                    sx={{
                                        position: "relative",
                                        "&::before": {
                                            content: '" "',
                                            zIndex: "-1",
                                            bottom: "5px",
                                            position: "absolute",
                                            width: "100%",
                                            height: "45%",
                                            backgroundColor:
                                                theme.palette.highL,
                                        },
                                    }}
                                >
                                    brc-20
                                </Typography>
                                token standard
                            </Typography>
                            <Typography variant="h4" sx={{ pb: 5 }}>
                                Pioneering Role in Revolutionizing Decentralized
                                Trading on the Bitcoin Network
                            </Typography>
                            <Stack direction="row" spacing={2}>
                                <Button
                                    variant="contained"
                                    sx={{
                                        height: "59px",
                                        borderRadius: "30px",
                                        display: "flex",
                                        alignItems: "center",
                                        backgroundColor: "#6900FF",
                                        ":hover": {
                                            backgroundColor: "#6900FF",
                                        },
                                    }}
                                >
                                    <Typography
                                        variant="h3"
                                        sx={{
                                            lineHeight: "120%",
                                            mx: 2,
                                        }}
                                    >
                                        Start Now
                                    </Typography>
                                    <KeyboardDoubleArrowRightRoundedIcon fontSize="large" />
                                </Button>
                                <Button
                                    variant="outlined"
                                    sx={{
                                        height: "59px",
                                        borderRadius: "30px",
                                        border: "2px solid #6900FF",
                                        color:
                                            themeMode === "light"
                                                ? "#373737"
                                                : theme.palette.primary,
                                        "&:hover": {
                                            border: "2px solid #6900FF",
                                            background: "#6900FF",
                                            color: "#ffffff",
                                        },
                                    }}
                                >
                                    <Typography
                                        variant="h3"
                                        sx={{
                                            lineHeight: "120%",
                                            mx: 2,
                                        }}
                                    >
                                        Get Whitelisted
                                    </Typography>{" "}
                                    <FavoriteRoundedIcon
                                        fontSize="large"
                                        px={5}
                                    />
                                </Button>
                            </Stack>
                        </Box>
                    </Grid>
                    <Grid item md={6}>
                        <img
                            src={
                                themeMode === "light"
                                    ? "/img/hero-l.svg"
                                    : "/img/hero-d.svg"
                            }
                            alt=""
                            width="100%"
                        />
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}

export default Hero;
