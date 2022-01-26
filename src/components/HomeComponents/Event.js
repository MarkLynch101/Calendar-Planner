import React, { useEffect, useState } from 'react';
import './Event.css';
import { AiOutlineClose } from 'react-icons/ai';
import { Button } from 'semantic-ui-react';
import axios from 'axios';

function Event(props) {
    var tag = props.id;
    const [apiData, setApiData] = useState([]);
    useEffect(() => {
        axios.get('https://61b89d5838f69a0017ce5c5e.mockapi.io/eventdb')
        .then((getData) => {
            setApiData(getData.data)
        })
    }, []);

    const getData = () => {
        axios.get('https://61b89d5838f69a0017ce5c5e.mockapi.io/eventdb')
        .then((getData) => {
            setApiData(getData.data)
        })
    }

    const onDelete = () => {
        console.log(tag)
        axios.delete(`https://61b89d5838f69a0017ce5c5e.mockapi.io/eventdb/${tag}`)
        .then(() => {
           getData();
           refreshPage();
        })
    }

    function refreshPage() {
        window.location.reload(false);
      }
    var val = props.timez;
    var offset = 0;
    switch(val) {
        case '00:00':
            offset = 0;
            break;
        case '01:00':
            offset = 1;
            break;
        case '02:00':
            offset = 2;
            break;
        case '03:00':
            offset = 3;
            break;
        case '04:00':
            offset = 4;
            break;
         case '05:00':
            offset = 5;
            break;
        case '06:00':
            offset = 6;
            break;
        case '07:00':
            offset = 7;
            break;
        case '08:00':
            offset = 8;
            break;
        case '09:00':
            offset = 9;
            break;
        case '10:00':
            offset = 10;
            break;
        case '11:00':
            offset = 11;
            break;
        case '12:00':
            offset = 12;
            break;
        case '14:00':
            offset = 14;
            break;
        case '15:00':
            offset = 15;
            break;
        case '16:00':
            offset = 16;
            break;
        case '17:00':
            offset = 17;
            break;
         case '18:00':
            offset = 18;
            break;
        case '19:00':
            offset = 19;
            break;
        case '20:00':
            offset = 20;
            break;
        case '21:00':
            offset = 21;
            break;
        case '22:00':
            offset = 22;
            break;
        case '23:00':
            offset = 23;
            break;
        default:
            offset = 0;
    }
    const pos = {
        top:  offset * 77+188,
        position: "absolute"
    }
    return (
        <div className="Event" style={pos}>
            <div className="title">{props.title}</div>
            <div className="subtitle">{props.subtitle}</div>     
            <Button className="star" onClick={()=>onDelete(tag)}>  <AiOutlineClose /> </Button> 
    {/* <div className="tags">{props.tags}</div> */}
        </div>
    )
}

export default Event
