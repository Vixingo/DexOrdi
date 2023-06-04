import { Box, Paper, Stack, Typography } from "@mui/material";
import React from "react";

function ConnectCard() {
    return (
        <>
            <Paper
                sx={{
                    borderRadius: "0px 22px 22px 22px",
                    maxHeight: "44px",
                    display: "flex",
                    alignItems: "center",
                    padding: "10px",
                }}
            >
                <Typography variant="h6" sx={{ px: 2 }}>
                    Connect
                </Typography>
                <Stack
                    flexDirection={"row"}
                    sx={{
                        gap: "8px",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <a href="#">
                        <img src="/img/con1.svg" alt="twitter" height="23px" />
                    </a>
                    <a href="#">
                        <img src="/img/con2.svg" alt="Tele" height="23px" />
                    </a>
                    <a href="#">
                        <img src="/img/con3.svg" alt="Medium" height="23px" />
                    </a>
                </Stack>
            </Paper>
        </>
    );
}

export default ConnectCard;
