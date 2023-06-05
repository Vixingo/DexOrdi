import { Box, Container, Typography } from "@mui/material";
import React from "react";
import ConnectCard from "../Cards/ConnectCard";
import MediaCard from "../Cards/MediaCard";
import CopyCard from "../Cards/CopyCard";

function Footer() {
    return (
        <>
            <Container maxWidth={"xl"}>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        pt: 22,
                        alignItems: "center",
                        pb: 2,
                        "@media (max-width:1599px)": {
                            pt: 30,
                        },
                        flexDirection: { xs: "column", md: "row" },
                    }}
                >
                    <ConnectCard />
                    <MediaCard />
                    <CopyCard />
                </Box>
            </Container>
        </>
    );
}

export default Footer;
