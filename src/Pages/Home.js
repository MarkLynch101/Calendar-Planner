import React, { useState } from 'react';
import DayContainer from '../components/HomeComponents/DayContainer';
import Topbar from '../components/HomeComponents/Topbar';
import Times from '../components/HomeComponents/Times';

import EventInput from '../components/HomeComponents/EventInput';
import Delete from '../components/HomeComponents/delete';
import Update from '../components/HomeComponents/EventUpdate';
import dayjs from 'dayjs';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './Home.css';

function Home() {
    // Month at top of page
    var focusMonth = dayjs().format("MMMM").toString().toUpperCase();

    // Initial day with blue box around it
    var focusDay = dayjs().format("DD MMM YY");

    // Used to retrieve day change from topbar when you click the arrows
    let [setDay, updateDay] = useState(focusDay);
    
    // Convert int to a day of the week
    const daysOfWeek = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];
    
    // Get width of the screen and divide by 
    // 350 which is the width of each day container
    var sw = window.innerWidth/350;

    // Array to store containers
    var displayDays = [];
    
    // Fill the screen with DayContainers based on screen size
    for(var i = 0; i<=sw+1; i+=1) {

        // Small light grey date on top left of each container
        var smallDate = dayjs(setDay).add(i, 'day').format("DD.MM.YYYY").toString();
        var idDate = dayjs(setDay).add(i, 'day').format("YYYY-MM-DD").toString();
        
        // Sets current day and each day after it 
        // e.g. tomorrow is today + 1, the next day is today + 2...
        // so each day is set based on today + i
        var dayContainerTitle = dayjs(setDay).day() + i;
        
        // when you add i it can go over 7
        // but there are 7 days in a week so this just rounds
        // down to monday after sunday
        dayContainerTitle = dayContainerTitle === 7? dayContainerTitle % 7 : dayContainerTitle;

        // Combines all these variables and 
        // adds them to the displayDays array
        displayDays.push(<DayContainer id={idDate} day={daysOfWeek[dayContainerTitle]} date={smallDate}/>)
    }

    return (
        <Router>
            
            
            <Route path='/create' component={EventInput} />
            <Route path='/delete' component={Delete} /> 
            <Route path='/update' component={Update} />
            {/* <Route exact path='/read' component={Read} /> */}
                {/* Sets top bar to be current month and day
                updateDay retrieves day change from topbar 
                when you click the arrows */}
            <Topbar month={ focusMonth } day={ focusDay } updateDay={ updateDay }/>
            
            <div className='home' >
                <Times />

                {/*  Renders the displayDays array*/}
                {displayDays}

                
            </div>
            
        </Router>
    )
}


export default Home
