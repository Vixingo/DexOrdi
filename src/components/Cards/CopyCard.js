import { Paper, Typography, useTheme } from "@mui/material";
import React from "react";

function CopyCard() {
    const theme = useTheme();
    return (
        <>
            <Paper
                sx={{
                    borderRadius: "22px",
                    maxHeight: "44px",
                    display: "flex",
                    alignItems: "center",
                    order: { xs: 3, md: 3 },
                }}
            >
                <Typography
                    variant="h6"
                    sx={{
                        px: 2,
                        color: theme.palette.text.secondary,
                    }}
                >
                    Copyright © 2023 DexOrdi. All rights reserved.
                </Typography>
            </Paper>
        </>
    );
}

export default CopyCard;
