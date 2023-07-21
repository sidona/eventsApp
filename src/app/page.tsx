"use client";

import {FormControlLabel, Grid, Stack} from "@mui/material";
import EventDetail from "@/app/components/EventDetail";
import {ThemeProvider} from "@mui/material/styles";
import {darkTheme, lightTheme} from "@/app/theme";
import {useEffect, useState} from "react";
import {Switch} from "@mui/base";
import Event from "@/app/components/Event";
import * as React from "react";
import SortEvent from "@/app/components/sortEvents";
import PageTitle from "@/app/components/PageTitle";
import './page.module.css';
import LoadingComponent from "@/app/components/Loading";
import {propsEvent} from "@/app/types/event";

export default function Home() {
    const [activeTheme, setActiveTheme] = useState(lightTheme);
    const [events, setEvents] = useState([]);
    const [eventsFiltered, setEventsFiltered] = useState([]);
    const [categories, setCategories] = useState([]);
    const [activeFilter, setActiveFilter] = useState('');
    const [isLoading, setIsLoading] = useState(false);


    const handleChange = () => {
        setActiveTheme(activeTheme === lightTheme ? darkTheme : lightTheme)
    }
    // Get All events
    const fetchEventData = () => {
        setIsLoading(true)
        let categoriesAdd = [] as string[];
        fetch(`http://localhost:3000/events`)
            .then(response => {
                return response.json()
            })
            .then(data => {
                data.data.forEach((dataItem: propsEvent) => {
                    if(Array.isArray(dataItem?.categories)) {
                        categoriesAdd = [...categoriesAdd, ...dataItem?.categories]
                    }
                })
                setIsLoading(false)
                setCategories([...new Set(categoriesAdd)])
                setEvents(data?.data);
                setEventsFiltered(data?.data);
            })
    }
    useEffect(() => {
        fetchEventData()
    }, [])
    const handleSelectFilter = (value: string) => () =>  {
        if(activeFilter === value) {

            setEventsFiltered(events)
            setActiveFilter('');
        } else {
            const filter = events.filter((event: propsEvent) => {
                if(event?.categories?.includes(value)) {
                    return event;
                }
            })
            setEventsFiltered(filter)
            setActiveFilter(value);
        }
    }
    // Select event and save in database subscribe or unsubscribe
    const handleSelectEvent =  async (id, subscribe) => {
        const data = {
            id: id,
            subscribe: !subscribe,
        }
        setIsLoading(true)
        const response = await fetch(`http://localhost:3000/events`, {
            method: 'PUT',
            body: JSON.stringify(data)
        })
        if(response.ok) {
            setIsLoading(false)
            const updateEvent = events.map((event: propsEvent) => {
                if(event._id === id) {
                    return {
                        ...event,
                        subscribe: !subscribe
                    }
                } else {
                    return  {
                        ...event
                    }
                }
            })
            setEvents(updateEvent);
            const updateEventFiltered = eventsFiltered.map((event: propsEvent) => {
                if(event._id === id) {
                    return {
                        ...event,
                        subscribe: !subscribe
                    }
                } else {
                    return  {
                        ...event
                    }
                }
            })
            setEventsFiltered(updateEventFiltered)
        }
    }
  return (
      <ThemeProvider theme={activeTheme}>
      <Grid container height="100vh"  direction="column" sx={{padding: 2}}>
          <LoadingComponent isLoading={isLoading}/>
          <FormControlLabel
              control={
          <Switch
              checked={activeTheme === lightTheme}
              onChange={handleChange}
              inputProps={{ 'aria-label': 'controlled' }}
          />} />
          <PageTitle title="Welcome" subtitle="Your next event" />
          <EventDetail event={events?.[0]} />

          <SortEvent listFilter={categories} onClickItem={handleSelectFilter} selected={activeFilter}/>

          <Stack spacing={2} sx={{width: '100%'}}>
              {eventsFiltered.map((event: propsEvent) => <div key={event._id} className="box">
                  <Event title={event.title} image={event?.image} checked={event?.subscribe} onClickEvent={handleSelectEvent} id={event._id}/>
              </div>)}
          </Stack>
      </Grid>
      </ThemeProvider>
  )
}
