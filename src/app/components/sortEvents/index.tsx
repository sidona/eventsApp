import {Chip} from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import * as React from "react";
import './style.css';

type propsSortEvent = {
    selected: string;
    onClickItem: (key: string) => any;
    listFilter: string[]
}

export default function SortEvent({listFilter, onClickItem, selected}: propsSortEvent) {
    return (
        <Box className="contentSort">
            <Typography variant="h6" component="div" color="text.primary">
                Discover Upcoming Events
            </Typography>
            <Box className="contentFilters" color="text.secondary">
                <Typography>
                    Sort by:
                </Typography>
                {listFilter.map((filter) =>  <Chip
                    key={filter}
                    color="primary"
                    className="chipContent"
                    label={filter}
                    onClick={onClickItem(filter)}
                    variant={selected === filter ? 'filled' : 'outlined'}
                />)}
            </Box>
        </Box>
    )
}
