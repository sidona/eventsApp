import {Backdrop, CircularProgress} from "@mui/material";
import * as React from "react";

type propsLoading = {
    isLoading: boolean;
}

export default function LoadingComponent({isLoading}: propsLoading) {
    return (
        <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={isLoading}
        >
            <CircularProgress color="inherit" />
        </Backdrop>
    )
}
