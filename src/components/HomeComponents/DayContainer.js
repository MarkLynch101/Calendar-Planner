import React, { useEffect, useState } from 'react';
import Event from './Event';
import dayjs from 'dayjs';
import axios from 'axios'

import './DayContainer.css'

function DayContainer(props) {
    const [apiData, setApiData] = useState([]);
    const [click, isClicked] = useState(false);
    useEffect(() => {
        axios.get('https://61b89d5838f69a0017ce5c5e.mockapi.io/eventdb')
        .then((getData) => {
            setApiData(getData.data)
        })
        
    }, [])

    
    // Get today 
    var today = dayjs().format("YYYY-MM-DD").toString();

    // Draws a blue box around the current day
    var isActive = (props.id === today)? "focus" : "notFocus";

    var eventsOnDay = [];
    for(var item in apiData) {
        if(apiData[item].date === props.id) {
            eventsOnDay.push(
                <Event 
                    title={apiData[item].title}
                    subtitle={apiData[item].location}
                    timez={apiData[item].time}
                    id={apiData[item].id}
                />
            )
        }
    }

    // Position is time*77 + 188
    return (
        // Id of container is set to that date
        <div id={props.id} className="DayContainer">
            {/* 
                The header of each container
                day on right, date on left
            */}
            <div className="head">
                <div className="days">{ props.day }</div>
                <div className="dates">{ props.date }</div>
            </div>
            {/* 
                Adds bluebox class based on isActive var
            */}
            <div className={"body2 " + isActive} >
                { eventsOnDay }
            </div>
        </div>
    )
}

export default DayContainer
