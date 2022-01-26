import React, {useState, useEffect } from 'react'
import axios from 'axios';
import { useHistory } from 'react-router';
import { Button, Form } from 'semantic-ui-react';
import './EventInput.css';

function EventUpdate() {

    let history = useHistory();
    const [title, setTitle] = useState('');
    const [location, setLocation] = useState('');
    const [date, setDate] = useState(null);
    const [time, setTime] = useState(null);
    const [note, setNote] = useState('');
    const [ID, setID] = useState(null);

  
    const postData = () => {
        axios.put(`https://61b89d5838f69a0017ce5c5e.mockapi.io/eventdb/${ID}`,{
            title, location,
            date, time, note
        }).then(() => {
            history.push('/');
            refreshPage();
        })
    }
    function refreshPage() {
        window.location.reload(false);
      }
    useEffect(() => {
        setTitle(localStorage.getItem('title'));
        setLocation(localStorage.getItem('location'));
        setDate(localStorage.getItem('date'));
        setTime(localStorage.getItem('time'));
        setNote(localStorage.getItem('note'));
        setID(localStorage.getItem('ID'));
    }, [])
    
    return (
        <div className={"EventInput"}>
            <Form className="modal">
                Update Event
                <div className='header'>
                    <Form.Field >
                        <input 
                            className='item'
                            name='title' 
                            value={title}
                            onChange={(e) => setTitle(e.target.value)} 
                            placeholder='Title' 
                        />
                    </Form.Field>
                    <Form.Field>
                        <input 
                            className='item'
                            name='location' 
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            placeholder='Location' 
                        />
                    </Form.Field>
                    <Form.Field >
                        <input 
                            className='item'
                            name='date' 
                            value={date}
                            type='date'
                            onChange={(e) => setDate(e.target.value)}
                            placeholder='Date' 
                        />
                    </Form.Field>
                    <Form.Field >
                        <input
                            className='item'
                            name='time'
                            value={time} 
                            type='time'
                            onChange={(e) => setTime(e.target.value)}
                            placeholder='Time' 
                        />
                    </Form.Field>
                    <Form.Field >
                        <textarea
                            className='item'
                            name='note' 
                            value={note}
                            type='textarea'
                            onChange={(e) => setNote(e.target.value)}
                            placeholder='Notes...' 
                        />
                    </Form.Field>
                </div>
                <Button 
                    className='submit'
                    type='submit' 
                    onClick={postData}> 
                    Update
                </Button>
            </Form>
        </div>
    )
}

export default EventUpdate