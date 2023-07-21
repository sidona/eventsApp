import * as React from 'react';
import Image from 'next/image'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {propsEvent} from "@/app/types/event";
import './style.css';

export default function EventDetail({event} : propsEvent) {
    return (
        <Card className="rootCard">
            <CardContent className="rootContent">
                <Image
                    src="/vercel.svg"
                    alt="Vercel Logo"
                    width={100}
                    height={24}
                    priority
                />
                <Box sx={{marginLeft: '10px'}}>
                    <Typography variant="h5" component="div">
                        {event?.title}
                    </Typography>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {event?.description}
                    </Typography>
                    <Typography variant="h5" component="div">
                        {event?.categories?.[0]}
                    </Typography>
                    <Typography variant="body2">
                        {event?.createdBy}
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    )
}
