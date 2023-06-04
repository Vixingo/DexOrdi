import { Paper, Typography } from "@mui/material";
import React from "react";

function CopyCard() {
    return (
        <>
            <Paper
                sx={{
                    borderRadius: "22px",
                    maxHeight: "44px",
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <Typography variant="h6" sx={{ px: 2 }}>
                    Copyright © 2023 DexOrdi. All rights reserved.
                </Typography>
            </Paper>
        </>
    );
}

export default CopyCard;
