import {Chip} from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import * as React from "react";

type propsSortEvent = {
    selected: string;
    onClickItem: (key: string) => any;
    listFilter: string[]
}

export default function SortEvent({listFilter, onClickItem, selected}: propsSortEvent) {
    return (
        <Box sx={{marginTop: '20px', marginBottom: '20px'}}>
            <Typography variant="h6" component="div">
                Discover Upcoming Events
            </Typography>
            <Box sx={{display: 'flex', alignItems: 'center'}}>
                <Typography>
                    Sort by:
                </Typography>
                {listFilter.map((filter) =>  <Chip
                    key={filter}
                    color="primary"
                    sx={{width: '80px', marginLeft: 1}}
                    label={filter}
                    onClick={onClickItem(filter)}
                    variant={selected === filter ? 'filled' : 'outlined'}
                />)}
            </Box>
        </Box>
    )
}
