import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import KeyboardDoubleArrowRightRoundedIcon from "@mui/icons-material/KeyboardDoubleArrowRightRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
function Hero() {
    return (
        <>
            <div className="hero">
                <Grid container>
                    <Grid item md={6} alignSelf={"center"}>
                        <Container sx={{ maxWidth: "650px", margin: "0 auto" }}>
                            <Typography variant="h1" sx={{ pb: 5, pt: 4 }}>
                                The 1st AMM Dex & DAO based on brc-20 token
                                standard
                            </Typography>
                            <Typography variant="h4" sx={{ pb: 5 }}>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s
                            </Typography>
                            <Stack direction="row" spacing={2}>
                                <Button
                                    variant="contained"
                                    sx={{
                                        height: "59px",
                                        borderRadius: "30px",
                                        display: "flex",
                                        alignItems: "center",
                                    }}
                                >
                                    <Typography
                                        variant="h3"
                                        sx={{
                                            lineHeight: "120%",

                                            mx: 2,
                                        }}
                                    >
                                        Start Now{"   "}
                                    </Typography>
                                    <KeyboardDoubleArrowRightRoundedIcon fontSize="large" />
                                </Button>
                                <Button
                                    variant="outlined"
                                    sx={{
                                        height: "59px",
                                        borderRadius: "30px",
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
                        </Container>
                    </Grid>
                    <Grid item md={6}>
                        <img src="/img/hero-l.png" alt="" width="100%" />
                    </Grid>
                </Grid>
            </div>
        </>
    );
}

export default Hero;
