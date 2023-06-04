import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import { Button, Paper, Stack } from "@mui/material";

export default function MediaCard() {
    const theme = useTheme();

    return (
        <>
            <Paper
                sx={{
                    borderRadius: "22px 0px 22px 22px",
                    display: "flex",
                    maxWidth: "200px",
                    maxHeight: "44px",
                    marginLeft: "auto",
                    alignItems: "flex-start",
                    textAlign: "center",
                    padding: "10px 20px",
                    m: 1,
                    justifyContent: "space-around",
                    position: "relative",
                }}
            >
                <Typography variant="h6" sx={{ px: 2 }}>
                    Media
                </Typography>

                <Stack flexDirection={"row"} sx={{ gap: "8px" }}>
                    {" "}
                    <img src="/img/f_logo_1.svg" alt="" height={"24px"} />
                    <img src="/img/f_logo_2.svg" alt="" height={"24px"} />
                </Stack>

                <Card
                    sx={{
                        position: "absolute",
                        bottom: "50px",
                        right: "0px",
                        display: "flex",
                        maxWidth: "399px",
                        minWidth: "375px",
                        margin: "0 auto",
                        background: "rgba(255, 255, 255, 0.05)",
                        p: 2,
                        boxShadow: "0px 4px 40px rgba(0, 0, 0, 0.13)",
                        backdropFilter: "blur(5px)",
                        borderRadius: "15px 15px 0px 15px;",
                        border: "1px solid",
                        borderColor: theme === "light" ? "#fff" : "#373737",
                    }}
                >
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <CardContent sx={{ flex: "1 0 auto" }}>
                            <Typography component="div" variant="h5">
                                News Headling will be this text..{" "}
                            </Typography>
                            <Typography
                                variant="subtitle1"
                                color="text.secondary"
                                component="div"
                            >
                                News element is here and Headling will be this
                                text...{" "}
                            </Typography>
                        </CardContent>
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                pl: 1,
                                pb: 1,
                            }}
                        >
                            <Button variant="contained">More info</Button>
                        </Box>
                    </Box>
                    <CardMedia
                        component="img"
                        sx={{ width: "143px", height: "143px" }}
                        image="/img/MediaCard.png"
                        alt="Live from space album cover"
                    />
                </Card>
            </Paper>
        </>
    );
}
