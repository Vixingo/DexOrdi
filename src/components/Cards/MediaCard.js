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
import { ThemeContext } from "../../ThemeProvider";

export default function MediaCard() {
    const theme = useTheme();
    const { themeMode } = React.useContext(ThemeContext);

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
                    order: { xs: 1, md: 2 },
                    m: 1,
                    justifyContent: "space-around",
                    position: "relative",
                    alignSelf: { xs: "flex-end", md: "unset" },
                }}
            >
                <Typography variant="h6" sx={{ px: 2 }}>
                    Media
                </Typography>

                <Stack flexDirection={"row"} sx={{ gap: "8px" }}>
                    {" "}
                    <a
                        href="https://www.marketwatch.com/press-release/automated-market-maker-dao-based-on-brc-20-protocol-launched-by-dexordi-2023-06-06?mod=search_headline"
                        target="_blank"
                    >
                        <img
                            src={
                                themeMode === "light"
                                    ? "/img/f_logo_1.svg"
                                    : "/img/f_logo_1D.svg"
                            }
                            alt=""
                            height={"24px"}
                        />
                    </a>
                    <img src="/img/f_logo_2.svg" alt="" height={"24px"} />
                </Stack>

                <Card
                    sx={{
                        position: "absolute",
                        bottom: "50px",
                        right: "0px",
                        display: "flex",
                        maxWidth: "399px",
                        minWidth: "339px",
                        margin: "0 auto",
                        background: "rgba(255, 255, 255, 0.05)",
                        p: 2,
                        boxShadow: "0px 4px 40px rgba(0, 0, 0, 0.13)",
                        backdropFilter: "blur(5px)",
                        borderRadius: "15px 15px 0px 15px;",
                        border: "1px solid",
                        borderColor: theme.palette.borderColor,
                    }}
                >
                    <CardMedia
                        component="img"
                        sx={{ width: "143px", height: "143px" }}
                        image="https://www.coinprwire.com/assets/uploads/pr_listing_image/06062023094512_500335_brc.jpg"
                        alt="MediaCard"
                    />
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            textAlign: "left",
                        }}
                    >
                        <CardContent sx={{ flex: "1 0 auto", py: 0 }}>
                            <Typography component="div" variant="h5">
                                Automated Market Maker & DAO based{" "}
                            </Typography>
                            <Typography
                                variant="subtitle1"
                                color="text.secondary"
                                component="div"
                            >
                                on BRC-20 Protocol Launched by DexOrdi
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
                            <a
                                href="https://www.marketwatch.com/press-release/automated-market-maker-dao-based-on-brc-20-protocol-launched-by-dexordi-2023-06-06?mod=search_headline"
                                target="_blank"
                            >
                                {" "}
                                <Button variant="contained">More info</Button>
                            </a>
                        </Box>
                    </Box>
                </Card>
            </Paper>
        </>
    );
}
