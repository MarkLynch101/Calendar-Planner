import React , { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import dayjs from 'dayjs';

// import Calendar from 'react-calendar';
import DatePicker from 'sassy-datepicker';

import './Topbar.css';
// import SearchBar from './SearchBar'

// Icons Used
import {GoChevronLeft} from 'react-icons/go';
import {GoChevronRight} from 'react-icons/go';
import {BsFillCalendarFill} from 'react-icons/bs';
// import {FaFilter} from 'react-icons/fa';
import {BiPlusMedical} from 'react-icons/bi';

function Topbar(props) {
    // React hook for updating date
    let [today, setDate] = useState(props.day);
    const [value, onChange] = useState(new Date());
    var calDatePickFormat = dayjs(value).format("DD MMM YY").toString();

    // Return date from calendar picker
    const calDatePick = newDate => {
        console.log(`New date selected - ${newDate.toString()}`);
        onChange(newDate);
        props.updateDay(calDatePickFormat);
        today = setDate(calDatePickFormat);
      };
    
    // Toggle Calendar on and off
    const [tog, onTog] = useState(false);
    
    // Set visable or invisable
    const [vis, updateVis] = useState("dNone");
    
    
    // Move to tomorrow or yesterday and formats it 
    let tmrw = dayjs(today).add(1, 'day').format("DD MMM YY").toString();
    let ystd = dayjs(today).subtract(1, 'day').format("DD MMM YY").toString();
    const tomorrow=()=> {
        setDate(tmrw);
        props.updateDay(tmrw);
    }
    const yesterday=()=> {
        setDate(ystd);
        props.updateDay(ystd);
    }
    function toggle() {
        onTog(!tog);
        if(tog) {
            updateVis("dNone");
        } else {
            updateVis("dShow");
        }
    }
    
    return (
        <>

        <div className="topbar">
            <div className="month-date">
                
                {/* Big Month At The Top */}
                <div className="month">{ props.month }</div>
                {/* Smaller Date Below Big Month */}
                <div className="date">
                    {/* 
                        All of this shite literally just 
                        adds or subtracts a day
                    */}
                    <GoChevronLeft onClick={() => yesterday(today)}/> 
                        <p className="displayDate">{ today }</p> 
                        
                    <GoChevronRight onClick={() => tomorrow(today)} />
                    {/* Toggle calendar on click */}
                    <BsFillCalendarFill className="cal" onClick={() => toggle()}/>
                    <DatePicker 
                        className={"calDisplay " +  vis}
                        onChange={calDatePick}
                        selected={value}
                    />
                </div>
            </div>
            
            {/* Event button on right and search bar */}
            <div className="tools">
                <Link to='/create'>
                    <Button className="add">Add Event <BiPlusMedical className="plus"/></Button>    
                </Link>

            </div>
        </div>
        </>
    )
}

export default Topbar
