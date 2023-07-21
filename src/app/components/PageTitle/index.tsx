import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import * as React from "react";

type propsTitle = {
    title: string;
    subtitle: string
}

export default function PageTitle({title, subtitle}: propsTitle) {

    return (
        <Box sx={{textAlign: 'left'}}>
            <Typography variant="h5" component="div">
                {title}
            </Typography>
            <Typography color="text.secondary">
                {subtitle}
            </Typography>
        </Box>
    )
}
