import { Box, Container, Typography } from "@mui/material";
import React from "react";
import ConnectCard from "../Cards/ConnectCard";
import MediaCard from "../Cards/MediaCard";
import CopyCard from "../Cards/CopyCard";

function Footer() {
    return (
        <>
            <Container>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        pt: 30,
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
